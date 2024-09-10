import { useState, useEffect } from 'react';

type WindowSize = {
  width: number;
  height: number;
};

// 简单 debounce 实现
function debounce(func: () => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func();
    }, wait);
  };
}

export function useWindowSize(debounceDelay = 200): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // 定义更新窗口大小的函数并使用 debounce
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, debounceDelay);

    // 页面加载时立即执行一次
    handleResize();

    // 添加事件监听器
    window.addEventListener('resize', handleResize);

    // 清除事件监听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}
