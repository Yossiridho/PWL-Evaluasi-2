'use client';

import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();
  const [isHovered, setIsHovered] = useState(false);

  // gabungkan style logoutButton dengan efek hover saat isHovered true
  const logoutButtonStyle: React.CSSProperties = {
    ...styles.logoutButton,
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
    boxShadow: isHovered ? '0 5px 15px rgb(255, 255, 255)' : 'none',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  };

  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <span style={styles.welcome}>
          Selamat datang, <strong>{session?.user?.name}</strong>
        </span>
      </div>
      <div style={styles.right}>
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          style={logoutButtonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    backgroundColor: '#020426',
    borderBottom: '1px solid #ddd',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  left: {
    fontSize: '16px',
  },
  right: {},
  welcome: {
    color: 'white',
    fontSize: '25px',
    fontWeight: 600,
  },
  logoutButton: {
    padding: '8px 16px',
    backgroundColor: '#db4437',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};
