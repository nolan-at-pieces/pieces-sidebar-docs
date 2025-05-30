import React, { useState, useEffect } from 'react';
import { ImageModal } from './ImageModal';

interface ExpandableImageProps {
  src?: string;
  alt?: string;
  caption?: string;
  className?: string;
}

export function ExpandableImage({ src, alt, caption, className, ...props }: ExpandableImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset states when src changes
  useEffect(() => {
    console.log('🔄 ExpandableImage mounted/updated:', { src, alt, caption });
    setImageError(false);
    setImageLoaded(false);
  }, [src, alt, caption]);
  
  // Handle stuck loading states
  useEffect(() => {
    if (!src) return;
    
    const timeout = setTimeout(() => {
      if (!imageLoaded && !imageError) {
        console.log('⏱️ Image loading timeout, forcing display:', src);
        setImageLoaded(true);
      }
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [src, imageLoaded, imageError]);

  console.log('🔍 ExpandableImage rendered with:', { src, alt, caption, className, props });

  if (!src) {
    console.log('❌ No src provided to ExpandableImage');
    return null;
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('❌ Image failed to load:', src);
    console.error('Error details:', e);
    console.error('Image element:', e.currentTarget);
    setImageError(true);
    setImageLoaded(false);
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('✅ Image loaded successfully:', src);
    console.log('Image dimensions:', e.currentTarget.naturalWidth, 'x', e.currentTarget.naturalHeight);
    setImageLoaded(true);
    setImageError(false);
  };

  const handleRetry = () => {
    console.log('🔄 Retrying image load:', src);
    setImageError(false);
    setImageLoaded(false);
  };

  // Use caption from props if available, otherwise use alt text
  const displayCaption = caption || alt || '';

  return (
    <>
      <figure className={`my-6 ${className || ''}`}>
        {imageError ? (
          <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
            <div className="text-gray-500 mb-2">Failed to load image</div>
            <div className="text-xs text-gray-400 break-all">{src}</div>
            <button 
              onClick={handleRetry}
              className="mt-2 text-blue-500 hover:text-blue-700 text-sm"
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="relative">
            {!imageLoaded && !imageError && (
              <div className="rounded-lg bg-gray-100 animate-pulse h-48 flex items-center justify-center">
                <div className="text-gray-500">Loading image...</div>
              </div>
            )}
            <img
              src={src}
              alt={alt || ''}
              className={`rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200 max-w-full h-auto ${
                imageLoaded ? 'block' : 'absolute opacity-0 pointer-events-none'
              }`}
              onClick={() => setIsModalOpen(true)}
              onError={handleImageError}
              onLoad={handleImageLoad}
              {...props}
            />
          </div>
        )}
        {displayCaption && (
          <figcaption className="mt-2 text-sm text-muted-foreground text-center italic">
            {displayCaption}
          </figcaption>
        )}
      </figure>
      
      <ImageModal
        src={src}
        alt={displayCaption}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
