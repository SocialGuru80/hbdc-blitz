import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties; // Allow custom styles
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className,
  style
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto" style={style}>
  <div className="min-h-screen px-4 flex items-center justify-center">
    <div
      className="fixed inset-0 bg-black/50 transition-opacity"
      onClick={onClose}
    />
    <div
      className={cn(
        'relative bg-white rounded-xl shadow-xl w-full max-w-md transform transition-all duration-300',
        'animate-in slide-in-from-top fade-in',
        className
      )}
      style={{ zIndex: 10000 }}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  </div>
</div>
  );
};