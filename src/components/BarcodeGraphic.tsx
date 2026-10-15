import React from 'react';

export const BarcodeGraphic: React.FC<{ className?: string }> = ({ className = "h-3" }) => {
  return (
    <div className={`inline-flex items-center gap-[2px] ${className}`} aria-hidden="true">
      <span className="w-[1px] h-full bg-current"></span>
      <span className="w-[2px] h-full bg-current"></span>
      <span className="w-[1px] h-full bg-current"></span>
      <span className="w-[3px] h-full bg-current"></span>
      <span className="w-[1px] h-full bg-current"></span>
      <span className="w-[2px] h-full bg-current"></span>
      <span className="w-[4px] h-full bg-current"></span>
      <span className="w-[1px] h-full bg-current"></span>
      <span className="w-[2px] h-full bg-current"></span>
      <span className="w-[1px] h-full bg-current"></span>
      <span className="w-[3px] h-full bg-current"></span>
      <span className="w-[2px] h-full bg-current"></span>
      <span className="w-[1px] h-full bg-current"></span>
      <span className="w-[3px] h-full bg-current"></span>
      <span className="w-[1px] h-full bg-current"></span>
    </div>
  );
};
