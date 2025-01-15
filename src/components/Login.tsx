import React, { useState } from 'react';
import authService from '../../Appwrite/auth';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router';
const LoginPage = () => {
  const {register,handleSubmit}=useForm();
  const nav=useNavigate();
  const login=async (data)=>{
   try {
    const session=await authService.login(data);
    if(session){
      const user=await authService.getUser();
      // move to home page
     nav('/');
      
    }
    
   } catch (error) {
    console.log("Error in login",error);
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
      minWidth:"100vw"
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
    forgotPassword: {
      fontSize: '14px',
      color: '#818CF8',
      textDecoration: 'none',
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
        <h2 style={styles.title}>Login to your account</h2>
        <p style={styles.subtitle}>
          Or <a href="#" style={styles.link}>start your 14-day free trial</a>
        </p>
        <form style={styles.form} onSubmit={handleSubmit(login)}>
          <input
            type="email"
            placeholder="Email address"
            style={styles.input}
            {...register("email",{
              required:true
            })}
            
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            {...register("password",{
              required:true
            })}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={styles.checkboxContainer}>
              <input type="checkbox" id="remember-me" style={styles.checkbox} />
              <label htmlFor="remember-me" style={styles.checkboxLabel}>Remember me</label>
            </div>
            <a href="#" style={styles.forgotPassword}>Forgot password?</a>
          </div>
          <button type="submit" style={styles.button}>Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

