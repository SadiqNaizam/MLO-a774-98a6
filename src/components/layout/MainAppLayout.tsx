import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex flex-col items-center justify-center min-h-screen bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
