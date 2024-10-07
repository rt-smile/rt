import { useEffect, useState } from 'react';

export const useTheme = () => {
  // 从 localStorage 获取已保存的主题
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    } else {
      // 如果没有保存的主题，则根据系统的主题偏好设置
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDarkScheme ? 'dark' : 'light';
    }
  };

  const [theme, setTheme] = useState('dark');

  // 切换主题并保存到 localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // 根据系统的主题偏好设置自动切换主题
  useEffect(() => {
    setTheme(getInitialTheme)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const prefersDark = mediaQuery.matches;
      const storedTheme = localStorage.getItem('theme');
      if (!storedTheme) {
        setTheme(prefersDark ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 根据当前主题设置页面的类名
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return { theme, toggleTheme };
};
