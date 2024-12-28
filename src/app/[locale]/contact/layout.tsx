import React from 'react';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#2D3748]">
      {children}
    </div>
  );
} 