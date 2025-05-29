
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

  if (!src) return null;

  return (
    <>
      <figure className={`my-6 ${className || ''}`}>
        <img
          src={src}
          alt={alt || ''}
          className="rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200 max-w-full h-auto"
          onClick={() => setIsModalOpen(true)}
          loading="lazy"
          {...props}
        />
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
