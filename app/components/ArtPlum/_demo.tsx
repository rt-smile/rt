"use client"

import { useEffect, useRef, useState } from 'react';

const PlumTrees = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let ctx: null | CanvasRenderingContext2D = null
  const WIDTH = 400
  const HEIGHT = 400
  interface Point {
    x: number
    y: number
  }

  interface Branch {
    start: Point
    length: number
    theta: number
  }

  const init = () => {
    console.log('canvasRef', canvasRef);
    const branch = {
      start: { x: WIDTH / 2, y: HEIGHT},
      length: 50,
      theta: -Math.PI / 2
    }
    step(branch)
    start()
  }
  useEffect(()=> {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ctx = canvasRef.current!.getContext("2d")!;
    init()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const lineTo = (p1: Point, p2: Point) => {
    ctx!.moveTo(p1.x, p1.y);
    ctx!.lineTo(p2.x, p2.y);
    ctx!.strokeStyle = "green"
    ctx!.stroke();
  }

  const getEndPoint = (p: Branch) => {
    return {
      x: p.start.x + p.length * Math.cos(p.theta),
      y: p.start.y + p.length * Math.sin(p.theta)
    }
  }

  const drawBranch = (b: Branch) => {
    lineTo(b.start, getEndPoint(b))
  }

  let penddingTask : Function[] = []

  const step = (b: Branch, depth = 0) => {
    const end = getEndPoint(b)
    drawBranch(b)

    if (depth < 2 || Math.random() < .5) {
      penddingTask.push(() => {
        step({
          start: end,
          length: b.length + 10 * Math.random(),
          theta: b.theta - .3 * Math.random()
        }, depth + 1)
      })
    }

    if (depth < 2 || Math.random() < .5) {
      penddingTask.push(() => {
        step({
          start: end,
          length: b.length + 10 * Math.random(),
          theta: b.theta + .3 * Math.random()
        }, depth + 1)
      })
    }
  }

  const frame = () => {
    const _tasks = [...penddingTask]
    penddingTask.length = 0
    _tasks.forEach(fn => fn())
  }

  let frameCount = 0
  const start = () => {
    requestAnimationFrame(() => {
      ++frameCount
      if (frameCount % 3 == 0)
        frame()
      start()
    })
  }
  
  return <canvas ref={canvasRef} width="400" height="400" className='fixed bottom-0 left-0 top-0 right-0 -z-10 border' />;
};

export default PlumTrees;

