// ─── Importaciones ────────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from 'react';
// Estilos de la mascota: orejas, ojos, pupila, nariz, boca
import './pet.css';

/**
 * Utilidad: limita `value` al rango [min, max].
 * Evita que la cara o las pupilas se salgan de sus límites visuales.
 *
 * @param {number} value - Valor a limitar
 * @param {number} min   - Límite inferior
 * @param {number} max   - Límite superior
 * @returns {number}
 */
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

/**
 * Mascota interactiva tipo "animal face".
 *
 * La cara sigue al cursor del mouse con dos niveles de movimiento:
 *   1. Micro-parallax de la cara entera (leve, da profundidad 3D).
 *   2. Movimiento de pupilas más agresivo dentro del ojo.
 *
 * El seguimiento usa lerp (interpolación lineal) via requestAnimationFrame
 * para que el movimiento sea suave y no instantáneo.
 *
 * Si el cursor se acerca a la nariz, se activa el estado `curious`
 * que puede usarse para cambiar la expresión del animal.
 */
const Pet = () => {
  // Referencia al elemento DOM de la cara (para obtener su posición con getBoundingClientRect)
  const faceRef = useRef(null);

  /**
   * targetRef: posición OBJETIVO del mouse (se actualiza en cada mousemove).
   * Se usa ref en lugar de state para evitar re-renders por cada evento del mouse.
   */
  const targetRef = useRef({
    mouseX: window.innerWidth / 2,
    mouseY: window.innerHeight / 2,
  });

  /**
   * look: estado de animación que se actualiza en cada frame del RAF.
   * Contiene:
   *   - mouseX/mouseY: posición interpolada (lerped) del mouse → posición de la cara en pantalla
   *   - faceX/faceY:   desplazamiento micro-parallax de la cara entera (px)
   *   - pupilX/pupilY: desplazamiento de las pupilas dentro del ojo (px)
   *   - curious:       true si el cursor está muy cerca de la nariz
   */
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
    // ID del requestAnimationFrame activo (para cancelarlo al desmontar)
    let rafId = 0;

    /**
     * Loop de animación: corre en cada frame del navegador (~60 fps).
     * Interpola la posición actual del mouse hacia el target con factor 0.16
     * (lerp: cuanto más pequeño, más suave/lento el seguimiento).
     */
    const animate = () => {
      setLook((prev) => ({
        ...prev,
        // Lerp: mover un 16% de la distancia restante cada frame
        mouseX: prev.mouseX + (targetRef.current.mouseX - prev.mouseX) * 0.16,
        mouseY: prev.mouseY + (targetRef.current.mouseY - prev.mouseY) * 0.16,
      }));
      rafId = window.requestAnimationFrame(animate);
    };

    /**
     * Handler de movimiento del mouse.
     * Calcula los offsets desde el centro de la cara y los limita con clamp().
     * Actualiza targetRef (sin re-render) y setLook para faceX/faceY/pupilX/pupilY.
     */
    const handleMouseMove = (event) => {
      const face = faceRef.current;
      if (!face) return;

      const rect    = face.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top  + rect.height / 2;

      // Distancia del cursor al centro de la cara
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;

      // Micro-parallax de la cara: movimiento leve, da sensación de profundidad
      const faceX = clamp(dx / 120, -6, 6);
      const faceY = clamp(dy / 120, -6, 6);

      // Pupilas: rango más amplio para que parezcan "mirar" activamente
      const pupilX = clamp(dx / 18, -12, 12);
      const pupilY = clamp(dy / 18, -12, 12);

      // Punto de la nariz (62% de altura dentro del bounding box de la cara)
      const noseX = rect.left + rect.width / 2;
      const noseY = rect.top  + rect.height * 0.62;
      // `curious` si el cursor está a menos de 28px de la nariz
      const nearNose = Math.hypot(event.clientX - noseX, event.clientY - noseY) < 28;

      // Actualizar la posición objetivo del mouse (sin re-render)
      targetRef.current = { mouseX: event.clientX, mouseY: event.clientY };

      // Actualizar el estado visual de la cara y las pupilas
      setLook((prev) => ({
        ...prev,
        faceX,
        faceY,
        pupilX,
        pupilY,
        curious: nearNose,
      }));
    };

    // Iniciar el loop de animación y escuchar movimientos del mouse
    rafId = window.requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove);

    // Limpieza: cancelar RAF y remover el listener al desmontar el componente
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []); // [] → solo se ejecuta al montar/desmontar, nunca en re-renders

  return (
    <section className="contact-container" id="contact">
      {/* 
        Cara del animal. Se posiciona en pantalla usando `left` y `top`
        basados en la posición interpolada del mouse.
        Las CSS custom properties --face-x, --face-y, --pupil-x, --pupil-y
        son leídas por pet.css para mover cara y pupilas via transform/translate.
      */}
      <div
        ref={faceRef}
        className={`animal-face ${look.curious ? 'is-curious' : ''}`}
        style={{
          left: `${look.mouseX + 70}px`,   // Offset +70px para que no tape el cursor
          top:  `${look.mouseY + 16}px`,
          '--face-x':  `${look.faceX}px`,  // Micro-parallax horizontal
          '--face-y':  `${look.faceY}px`,  // Micro-parallax vertical
          '--pupil-x': `${look.pupilX}px`, // Movimiento horizontal de pupilas
          '--pupil-y': `${look.pupilY}px`, // Movimiento vertical de pupilas
        }}
      >
        {/* ── Orejas (izquierda y derecha) ── */}
        <div className="ear ear-left" />
        <div className="ear ear-right" />

        {/* ── Ojo izquierdo con pupila y brillo ── */}
        <div className="eye eye-left">
          <div className="pupil">
            <span className="shine" /> {/* Punto de luz reflejada */}
          </div>
        </div>

        {/* ── Ojo derecho con pupila y brillo ── */}
        <div className="eye eye-right">
          <div className="pupil">
            <span className="shine" />
          </div>
        </div>

        {/* ── Nariz ── */}
        <div className="nose" />

        {/* ── Boca (puede cambiar con la clase is-curious) ── */}
        <div className="mouth" />
      </div>
    </section>
  );
};

export default Pet;
