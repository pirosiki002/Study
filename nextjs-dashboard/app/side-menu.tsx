'use client';

import { useState } from 'react';

// `children`に`<UserInfo>`などのServer Componentsを渡すことが可能！
export function SideMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {children}
      <div>
        <button type="button" onClick={() => setOpen(prev => !prev)}>
          toggle
        </button>
        <div>...</div>
      </div>
    </>
  );
}
