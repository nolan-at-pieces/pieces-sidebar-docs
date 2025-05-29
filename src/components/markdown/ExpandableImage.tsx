
import { useState } from 'react';
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

  if (!src) return null;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('❌ Image failed to load:', src);
    console.error('Error details:', e);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log('✅ Image loaded successfully:', src);
    setImageLoaded(true);
  };

  return (
    <>
      <figure className={`my-6 ${className || ''}`}>
        {imageError ? (
          <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
            <div className="text-gray-500 mb-2">Failed to load image</div>
            <div className="text-xs text-gray-400 break-all">{src}</div>
            <button 
              onClick={() => {
                setImageError(false);
                setImageLoaded(false);
              }}
              className="mt-2 text-blue-500 hover:text-blue-700 text-sm"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            {!imageLoaded && (
              <div className="rounded-lg bg-gray-100 animate-pulse h-48 flex items-center justify-center">
                <div className="text-gray-500">Loading image...</div>
              </div>
            )}
            <img
              src={src}
              alt={alt || ''}
              className={`rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200 max-w-full h-auto ${!imageLoaded ? 'hidden' : ''}`}
              onClick={() => setIsModalOpen(true)}
              onError={handleImageError}
              onLoad={handleImageLoad}
              loading="lazy"
              {...props}
            />
          </>
        )}
        {caption && (
          <figcaption className="mt-2 text-sm text-muted-foreground text-center italic">
            {caption}
          </figcaption>
        )}
      </figure>
      
      <ImageModal
        src={src}
        alt={alt || caption || ''}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
