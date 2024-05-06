import React from 'react';

const ForgotPassword = () => {
  const handleResetPassword = () => {
    // Add your logic for resetting the password here
    console.log('Reset Password button clicked');
  };

  return (
    <div style={styles.container}>
      <div style={styles.forgotPasswordCard}>
        <h2 style={styles.heading}>Forgot Password</h2>
        <input
          type="email"
          placeholder="rths_hrm@outlook.com"
          style={styles.input}
          defaultValue="rths_hrm@outlook.com"
        />
        <button style={styles.resetButton} onClick={handleResetPassword}>
          Reset Password
        </button>
        <a href="#" style={styles.backToLogin}>
          Back to Login
        </a>
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
    backgroundColor: '#f0f0f0',
  },
  forgotPasswordCard: {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '16px',
  },
  input: {
    width: '300px',
    padding: '8px 12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '16px',
  },
  resetButton: {
    backgroundColor: '#0077b6',
    color: '#ffffff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '8px',
  },
  backToLogin: {
    color: '#0077b6',
    textDecoration: 'none',
    fontSize: '14px',
  },
};

export default ForgotPassword;