import React from 'react';

export const AppleColorPrism: React.FC<{ className?: string; height?: string }> = ({
  className = '',
  height = 'h-5'
}) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 ${className}`}
      title="Apple Pro RGB Signature"
      aria-hidden="true"
    >
      <span className={`w-1.5 ${height} rounded-full bg-[#ff3b30] shadow-[0_0_8px_rgba(255,59,48,0.5)]`} />
      <span className={`w-1.5 ${height} rounded-full bg-[#34c759] shadow-[0_0_8px_rgba(52,199,89,0.5)]`} />
      <span className={`w-1.5 ${height} rounded-full bg-[#007aff] shadow-[0_0_8px_rgba(0,122,255,0.5)]`} />
    </div>
  );
};
