import { useAuth0 } from "@auth0/auth0-react";
/**
 * TODO: Ticket 3:
 * Implement authentication and logging functionality using Auth0
 */
export const LoggingButtons = () => {
  // TODO: Replace these with Auth0 functionality
 // const isAuthenticated = false;
// const buttonText = isAuthenticated ? 'Log Out' : 'Log In';

const {loginWithRedirect,logout, isAuthenticated} = useAuth0();
const buttonText = isAuthenticated ? 'Log out' : "Log In"

  const handleLogging = () => {
    if (isAuthenticated) {
      // TODO: Add Logout functionality here:
      logout({logoutParams: {returnTo: window.location.origin}})
    } else {
      // TODO: Add Redirect functionality here:
      loginWithRedirect()
    }
  };

  return (
    <button className='nav-btn  px-4 py-1' onClick={handleLogging}>
      {buttonText}
    </button>
  );
};