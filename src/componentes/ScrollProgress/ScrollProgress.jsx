// ─── Importaciones ────────────────────────────────────────────────────────────
import { useEffect, useState } from 'react';
// Estilos: oculta la barra en mobile, la muestra solo en desktop
import './scroll-progress.css';

/**
 * Barra de progreso de scroll vertical.
 *
 * Muestra cuánto ha bajado el usuario en la página (0 % – 100 %).
 * Está fija en el lado derecho de la pantalla.
 * Solo visible en viewports ≥ 768 px (controlado por CSS media query).
 *
 * Cálculo:
 *   progress = scrollY / (scrollHeight - clientHeight) * 100
 */
const ScrollProgress = () => {
  // Porcentaje de scroll actual (0 a 100)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    /**
     * Listener de scroll: recalcula el porcentaje cada vez que el
     * usuario mueve la página. Se usa `passive: true` para no bloquear
     * el hilo principal y mantener 60 fps.
     */
    const handleScroll = () => {
      const scrollTop  = window.scrollY;
      // Distancia total que se puede scrollear
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      // Clampeamos a 100 por seguridad y redondeamos a entero
      setProgress(Math.min(100, Math.round(pct)));
    };

    // Registrar el listener con opción pasiva para mejor rendimiento
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Llamada inicial para establecer el valor correcto al montar
    handleScroll();

    // Limpieza: eliminar el listener cuando el componente se desmonte
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // aria-hidden: elemento puramente decorativo, no relevante para lectores de pantalla
    <div className="scroll-progress" aria-hidden="true" title={`${progress}% leído`}>

      {/* ── Track: línea de fondo gris sobre la que corre el fill ── */}
      <div className="scroll-progress__track">

        {/* Fill: se expande en altura según el % de scroll */}
        <div
          className="scroll-progress__fill"
          style={{ height: `${progress}%` }}
        />

        {/* Indicador circular (dot) que viaja junto al fill */}
        <div
          className="scroll-progress__indicator"
          style={{ top: `${progress}%` }}
        />
      </div>

      {/* Etiqueta numérica del porcentaje (escrita verticalmente por CSS) */}
      <span className="scroll-progress__label">{progress}%</span>
    </div>
  );
};

export default ScrollProgress;
