'use client';

import { useTheme } from 'next-themes';
import * as React from 'react';

export const ModelToggle = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex gap-2">
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('system')}>System</button>
    </div>
  );
};
