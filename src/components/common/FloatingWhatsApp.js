import React, { useState, useEffect } from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostrar o botão após 1 segundo
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Mostrar o tooltip após 3 segundos
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      // Esconder o tooltip após 5 segundos
      setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/258855898000', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className={`whatsapp-float ${isVisible ? 'visible' : ''}`}>
        <button
          onClick={handleClick}
          className="whatsapp-button"
          aria-label="Contactar via WhatsApp"
        >
          <i className="mdi mdi-whatsapp"></i>
          <span className="whatsapp-pulse"></span>
          <span className="whatsapp-pulse-ring"></span>
        </button>
        
        {showTooltip && (
          <div className="whatsapp-tooltip">
            <span>Precisa de ajuda? Fale conosco!</span>
            <button 
              className="tooltip-close"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingWhatsApp;
