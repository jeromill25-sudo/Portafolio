import { useEffect, useState } from 'react';
import './scroll-progress.css';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.round(pct)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true" title={`${progress}% leído`}>
      <div className="scroll-progress__track">
        <div
          className="scroll-progress__fill"
          style={{ height: `${progress}%` }}
        />
        <div
          className="scroll-progress__indicator"
          style={{ top: `${progress}%` }}
        />
      </div>
      <span className="scroll-progress__label">{progress}%</span>
    </div>
  );
};

export default ScrollProgress;
