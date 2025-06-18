import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginCard from '../components/Login/Card'; // Assuming Card.tsx exports a component named LoginCard or Card

/**
 * LoginPage component
 * 
 * This is the main page for user authentication.
 * It utilizes the MainAppLayout for the overall page structure (e.g., centered content, background color)
 * and renders the LoginCard component, which contains the login form and related elements.
 */
const LoginPage: React.FC = () => {
  // This page component primarily serves as a structural container.
  // Specific login logic, form state, and handling are encapsulated within 
  // the LoginCard and its child LoginForm component.
  // No page-specific data or complex state is managed here for this login screen.

  return (
    <MainAppLayout>
      {/* 
        The LoginCard component is expected to render the login form.
        As per Layout Requirements, the card should have a width of 'w-96'.
        This styling is assumed to be handled within the LoginCard component itself.
      */}
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
