"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginPage = () => {
  // State untuk form login (username dan password)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Fungsi handle untuk login form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleLoginWithGoogle = () => {
    signIn("google", { callbackUrl: '/' });
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Login</h1>

        {/* Form login dengan username dan password */}
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <label htmlFor="username" style={styles.label}>Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputContainer}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.submitButton}>Login</button>
        </form>

        {/* Atau masuk dengan Google */}
        <div style={styles.orContainer}>
          <span>atau masuk dengan</span>
        </div>

        {/* Tombol Login dengan Google */}
        <button onClick={handleLoginWithGoogle} style={styles.googleButton}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(/images/background1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  formContainer: {
    padding: '30px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '420px',
    textAlign: 'center' as 'center',
    backdropFilter: 'blur(10px)',  // Efek blur di belakang container
    WebkitBackdropFilter: 'blur(10px)',  // Agar bekerja di browser Webkit (seperti Safari)
    outline: '2px solid white',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: 'white',
  },
  inputContainer: {
    marginBottom: '15px',
    textAlign: 'left' as 'left', // Penambahan casting untuk 'left' jika diperlukan
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    marginTop: '5px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  orContainer: {
    margin: '15px 0',
    fontSize: '14px',
    color: 'white',
  },
  googleButton: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#db4437', // Warna merah khas Google
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default LoginPage;
