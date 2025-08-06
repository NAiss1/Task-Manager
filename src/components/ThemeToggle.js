import React from 'react';
import Switch from 'react-switch';

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <Switch
      onChange={checked=>setTheme(checked ? 'dark':'light')}
      checked={theme==='dark'}
      offColor="#ddd"
      onColor="#333"
      uncheckedIcon={<div className="text-sm ml-2">🌞</div>}
      checkedIcon={<div className="text-sm ml-2">🌜</div>}
      height={24}
      width={48}
    />
  );
}
