import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import authService from '../../Appwrite/auth';
const CreateAccountPage= () => {
 const {register,handleSubmit}=useForm();
const createdAcc=async (data)=>{
  try {
    const session=await authService.createAccount(data);
    if(session){
      const user=await authService.getUser();
      
    }
  } catch (error) {
    console.log("Error in createAcc",error)
  }
}
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#111827',
      padding: '20px',
    },
    formContainer: {
      maxWidth: '400px',
      width: '100%',
      padding: '40px',
      backgroundColor: '#1F2937',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'center' as const,
      marginBottom: '16px',
    },
    subtitle: {
      fontSize: '14px',
      color: '#9CA3AF',
      textAlign: 'center' as const,
      marginBottom: '24px',
    },
    link: {
      color: '#818CF8',
      textDecoration: 'none',
    },
    form: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '16px',
    },
    input: {
      width: '100%',
      padding: '8px 12px',
      backgroundColor: '#374151',
      border: '1px solid #4B5563',
      borderRadius: '4px',
      color: '#D1D5DB',
      fontSize: '14px',
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    checkbox: {
      accentColor: '#818CF8',
    },
    checkboxLabel: {
      fontSize: '14px',
      color: '#D1D5DB',
    },
    button: {
      width: '100%',
      padding: '8px 16px',
      backgroundColor: '#4F46E5',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    divider: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center' as const,
      color: '#9CA3AF',
      fontSize: '14px',
      margin: '24px 0',
    },
    dividerLine: {
      flex: '1',
      borderBottom: '1px solid #4B5563',
    },
    socialButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '12px',
    },
    socialButton: {
      flex: '1',
      padding: '8px',
      backgroundColor: '#374151',
      border: '1px solid #4B5563',
      borderRadius: '4px',
      color: '#D1D5DB',
      fontSize: '14px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Create Your Account</h2>
        <p style={styles.subtitle}>
          Already have an account? <a href="#" style={styles.link}>Sign in</a>
        </p>
        <form style={styles.form} onSubmit={handleSubmit(createdAcc)}>
          <input
            type="text"
            placeholder="Username"
            style={styles.input}
            {...register("name",{
              required:true
            })}
            required
          />
          <input
            type="email"
            placeholder="Email address"
            style={styles.input}
            {...register("email",{
              required:true
            })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            {...register("password",{
              required:true
            })}
            required
          />
          <div style={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="agree-terms"
              style={styles.checkbox}
             
              required
            />
            <label htmlFor="agree-terms" style={styles.checkboxLabel}>
              I agree to the <a href="#" style={styles.link}>Terms of Service</a> and <a href="#" style={styles.link}>Privacy Policy</a>
            </label>
          </div>
          <button type="submit" style={styles.button}>Create Account</button>
        </form>
        <div style={styles.divider}>
          <div style={styles.dividerLine}></div>
          <span style={{ padding: '0 10px' }}>Or sign up with</span>
          <div style={styles.dividerLine}></div>
        </div>
        <div style={styles.socialButtons}>
          <button style={styles.socialButton}>Google</button>
          <button style={styles.socialButton}>Facebook</button>
          <button style={styles.socialButton}>GitHub</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;

