import { useEffect, useRef, useState } from 'react';
import './pet.css';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const Pet = () => {
  const faceRef = useRef(null);
  const targetRef = useRef({
    mouseX: window.innerWidth / 2,
    mouseY: window.innerHeight / 2,
  });
  const [look, setLook] = useState({
    mouseX: window.innerWidth / 2,
    mouseY: window.innerHeight / 2,
    faceX: 0,
    faceY: 0,
    pupilX: 0,
    pupilY: 0,
    curious: false,
  });

  useEffect(() => {
    let rafId = 0;

    const animate = () => {
      setLook((prev) => ({
        ...prev,
        mouseX: prev.mouseX + (targetRef.current.mouseX - prev.mouseX) * 0.16,
        mouseY: prev.mouseY + (targetRef.current.mouseY - prev.mouseY) * 0.16,
      }));
      rafId = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      const face = faceRef.current;
      if (!face) return;

      const rect = face.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;

      // Micro-parallax para que no quede totalmente rigido.
      const faceX = clamp(dx / 120, -6, 6);
      const faceY = clamp(dy / 120, -6, 6);

      // Pupilas se mueven mas "agresivo" dentro del ojo.
      const pupilX = clamp(dx / 18, -12, 12);
      const pupilY = clamp(dy / 18, -12, 12);

      const noseX = rect.left + rect.width / 2;
      const noseY = rect.top + rect.height * 0.62;
      const nearNose = Math.hypot(event.clientX - noseX, event.clientY - noseY) < 28;

      targetRef.current = { mouseX: event.clientX, mouseY: event.clientY };

      setLook((prev) => ({
        ...prev,
        faceX,
        faceY,
        pupilX,
        pupilY,
        curious: nearNose,
      }));
    };

    rafId = window.requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="contact-container" id="contact">
      <div
        ref={faceRef}
        className={`animal-face ${look.curious ? 'is-curious' : ''}`}
        style={{
          left: `${look.mouseX + 70}px`,
          top: `${look.mouseY + 16}px`,
          '--face-x': `${look.faceX}px`,
          '--face-y': `${look.faceY}px`,
          '--pupil-x': `${look.pupilX}px`,
          '--pupil-y': `${look.pupilY}px`,
        }}
      >
        <div className="ear ear-left" />
        <div className="ear ear-right" />

        <div className="eye eye-left">
          <div className="pupil">
            <span className="shine" />
          </div>
        </div>
        <div className="eye eye-right">
          <div className="pupil">
            <span className="shine" />
          </div>
        </div>

        <div className="nose" />
        <div className="mouth" />
      </div>
    </section>
  );
};

export default Pet;

