"use client"

import { useWindowSize } from '@/app/hooks/useWindowSize';
import { useEffect, useRef, useState } from 'react';

const PlumTrees = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const windowSize = useWindowSize(200)
  
  const len = 6
  // const [stopped, setStopped] = useState(false);

  const r180 = Math.PI;
  const r90 = Math.PI / 2;
  const r15 = Math.PI / 12;
  const color = '#88888825'
  const MIN_BRANCH = 30
  /**
   * 0.2 - 0.8
   */
  const randomMiddle = () => random() * 0.6 + 0.2

  const { random } = Math;

  const polar2cart = (x = 0, y = 0, r = 0, theta = 0) => {
    const dx = r * Math.cos(theta);
    const dy = r * Math.sin(theta);
    return [x + dx, y + dy];
  };

  const initCanvas = (canvas: HTMLCanvasElement, width = 400, height = 400, _dpi?: number) => {
    const ctx = canvas.getContext('2d')!;
    const dpr = window.devicePixelRatio || 1;
    // @ts-expect-error vendor
    const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;

    console.log(_dpi , dpr, bsr);
    
    const dpi = _dpi || dpr / bsr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.width = dpi * width;
    canvas.height = dpi * height;
    ctx.scale(dpi, dpi);

    return { ctx, dpi };
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    console.log('windowSize', windowSize);
    
    const { ctx, dpi } = initCanvas(canvas, windowSize.width, windowSize.height);
    const width = canvas.width
    const height = canvas.height

    let steps: Function[] = [];
    let prevSteps: Function[] = [];
    // let iterations = 0;

    let lastTime = performance.now()
    const interval = 1000 / 40  // 50fps

    const step = (x: number, y: number, rad: number, counter: { value: number } = { value: 0 }) => {
      const length = random() * len;
      counter.value += 1
      const [nx, ny] = polar2cart(x, y, length, rad);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      const rad1 = rad + random() * r15;
      const rad2 = rad - random() * r15;

      // out of bounds
      if (nx < -100 || nx > width + 100 || ny < -100 || ny > height + 100) return;

      // if (iterations <= init || random() > 0.5) steps.push(() => step(nx, ny, rad1));
      // if (iterations <= init || random() > 0.5) steps.push(() => step(nx, ny, rad2));
      const rate = counter.value <= MIN_BRANCH
        ? 0.8
        : 0.5
      // left branch
      if (random() < rate)
        steps.push(() => step(nx, ny, rad1, counter))
      // right branch
      if (random() < rate)
        steps.push(() => step(nx, ny, rad2, counter))
    };

    const frame = () => {
      if (performance.now() - lastTime < interval) {
        requestAnimationFrame(frame);
        return
      }
      // iterations += 1;
      prevSteps = steps;
      steps = [];
      lastTime = performance.now()

      if (!prevSteps.length) {
        // setStopped(true);
        return;
      }
      // Execute all the steps from the previous frame
      prevSteps.forEach((i) => {
        // 50% chance to keep the step for the next frame, to create a more organic look
        if (random() < 0.5)
          steps.push(i)
        else
          i()
      })
      requestAnimationFrame(frame);
    };

    const start = () => {
      // setStopped(false);
      // iterations = 0;
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      prevSteps = [];
      steps = [
        () => step(randomMiddle() * windowSize.width, -5, r90),
        () => step(randomMiddle() * windowSize.width, windowSize.height + 5, -r90),
        () => step(-5, randomMiddle() * windowSize.height, 0),
        () => step(windowSize.width + 5, randomMiddle() * windowSize.height, r180),
      ];
      if (windowSize.width < 500) 
        steps.slice(0, 2)
      frame();
    };

    start();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize]);

  return (
    // <div 
    //   className='fixed bottom-0 left-0 top-0 right-0 -z-10 pointer-events-none print:hidden'
    //   style={{maskImage: 'radial-gradient(circle, transparent, black)', WebkitMaskImage: 'radial-gradient(circle, transparent, black)'}}
    // >
      <canvas ref={canvasRef} className='fixed bottom-0 left-0 top-0 right-0 -z-10 pointer-events-none print:hidden' />
    // </div>
  )
};

export default PlumTrees;

