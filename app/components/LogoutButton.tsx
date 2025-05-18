'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <button onClick={() => signOut({ callbackUrl: '/login' })} style={buttonStyle}>
      Logout
    </button>
  );
}

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#d32f2f',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};
