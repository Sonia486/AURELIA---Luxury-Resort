import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      ring.animate([
        { left: e.clientX + 'px', top: e.clientY + 'px' }
      ], { duration: 500, fill: 'forwards' });
    };

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, .cursor-pointer, .room-card, .gallery-item')) {
        ring.classList.add('hover');
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest('a, button, .cursor-pointer, .room-card, .gallery-item')) {
        ring.classList.remove('hover');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}