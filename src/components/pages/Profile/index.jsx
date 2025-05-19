/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  // TODO: Replace these with functionality from Auth0
  //const isLoading = false;
  //const user = true;

  const {user, isLoading, isAuthenticated, logout} = useAuth0();
  

  if (isLoading || !isAuthenticated) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  return (
    <div className="bg-white p-8 rounded shadow max-w-sm mx-auto text-center mt-10">
      <img src={user.picture}  className="rounded-full w-24 mb-4 mx-auto"/>
      <p className="text-2xl font-extrabold" >{user.name}</p>
      <p className="text-gray-700">{user.email}</p>

      <button
      onClick={() => logout({returnTo: window.location.origin})}
       className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;
