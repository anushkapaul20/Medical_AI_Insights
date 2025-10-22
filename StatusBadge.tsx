import React from 'react';

interface StatusBadgeProps {
  type: 'success' | 'critical' | 'warning';
  children: React.ReactNode;
}

export function StatusBadge({ type, children }: StatusBadgeProps) {
  const variants = {
    success: 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md shadow-emerald-500/30',
    critical: 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-md shadow-red-500/30',
    warning: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/30'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full ${variants[type]} transition-all hover:scale-105`}>
      <span className="text-xs">{children}</span>
    </span>
  );
}
