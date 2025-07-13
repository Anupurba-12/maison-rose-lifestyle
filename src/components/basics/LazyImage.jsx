import React, { useState, useEffect } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholderClassName = '',
  onLoad = () => {},
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    // Create new image object
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
      onLoad();
    };
  }, [src, onLoad]);

  return (
    <>
      {isLoading && (
        <div 
          className={`animate-pulse bg-gray-200 ${placeholderClassName || className}`}
          style={{
            aspectRatio: props.aspectRatio || 'auto'
          }}
        />
      )}
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        className={`${className} ${isLoading ? 'hidden' : ''}`}
        {...props}
      />
    </>
  );
};

export default LazyImage;
