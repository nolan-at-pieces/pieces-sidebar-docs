
import { useEffect } from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/40 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogContent className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] max-w-[90vw] max-h-[90vh] p-0 border-0 bg-transparent shadow-none focus:outline-none">
        <div className="relative flex items-center justify-center">
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 rounded-full bg-white/10 backdrop-blur-md p-2 text-white hover:bg-white/20 transition-all duration-200 z-50"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
            <img
              src={src}
              alt={alt}
              className="max-w-[85vw] max-h-[85vh] object-contain"
            />
            {alt && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white p-4">
                <p className="text-sm text-center font-medium">{alt}</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
