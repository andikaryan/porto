'use client';
 
import { createContext, useContext, useEffect, useState, useMemo } from 'react';

type ThemeContextProviderProps = Readonly<{
  children: React.ReactNode;
}>;

type ThemeContextType = {
  theme: 'dark';
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [mounted, setMounted] = useState(false);

  // Force dark theme always
  useEffect(() => {
    // Remove any existing theme classes
    document.documentElement.classList.remove('light', 'dark');
    // Force dark theme
    document.documentElement.classList.add('dark');
    setMounted(true);
  }, []);

  // Always return dark theme
  const contextValue = useMemo(() => ({
    theme: 'dark' as const,
  }), []);

  return (
    <ThemeContext.Provider value={contextValue}>
      {!mounted ? (
        <div style={{ visibility: 'hidden' }}>{children}</div>
      ) : (
        children
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
}

