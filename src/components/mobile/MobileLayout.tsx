
import React, { ReactNode } from "react";
import MobileNavigation from "./MobileNavigation";

interface MobileLayoutProps {
  children: ReactNode;
  title: string;
  showNavigation?: boolean;
  showBackButton?: boolean;
  onBack?: () => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({
  children,
  title,
  showNavigation = true,
  showBackButton = false,
  onBack
}) => {
  return (
    <div className="mobile-layout">
      <header className="mobile-header">
        <div className="flex items-center">
          {showBackButton && (
            <button onClick={onBack} className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
          )}
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <div className="flex items-center">
          <button className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
            </svg>
            <span className="absolute -top-1 -right-1 bg-app-orange text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </header>
      
      <main className="mobile-content">
        {children}
      </main>
      
      {showNavigation && <MobileNavigation />}
    </div>
  );
};

export default MobileLayout;
