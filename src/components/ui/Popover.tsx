import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Popover: React.FC<PopoverProps> = ({
  isOpen,
  onClose,
  trigger,
  children,
  className
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const updatePosition = () => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + window.scrollY + 8,
          left: Math.max(0, rect.left + window.scrollX - 100)
        });
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
      updatePosition();
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen, onClose]);

  return (
    <div className="relative inline-block">
      <div ref={triggerRef}>
        {trigger}
      </div>
      {isOpen && (
        <div
          ref={popoverRef}
          className={cn(
            'fixed bg-white rounded-lg shadow-lg border border-gray-200 z-[10000]',
            'animate-in slide-in-from-top-2 fade-in duration-200',
            className
          )}
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};