import Logo from '../../assets/logo.png';
import { LoggingButtons } from '../../auth/LoggingButtons.jsx';
import { NavLink } from 'react-router-dom';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0
 */
export default function Header() {
  // TODO: Replace me
  const isAuthenticated = false;

  const isLanding = window.location.pathname === '/';

  return (
    <header className='w-full primary-c text-white'>
      {/* NAV BAR */}
      <div className='flex justify-between items-center px-14 py-4'>
        <div className='flex'>
          <NavLink to='https://www.humanrightsfirst.org/'>
            <img className='w-[100px]' src={Logo} alt='HRF logo white' />
          </NavLink>
        </div>

        <div className='flex items-center gap-16'>
          <NavLink to='/' className='nav-btn'>Home</NavLink>
          <NavLink to='/graphs' className='nav-btn'>Graphs</NavLink>
          {isAuthenticated && (
            <NavLink to='/profile' className='nav-btn'>Profile</NavLink>
          )}
          <LoggingButtons />
        </div>
      </div>

      {/* 👇 ONLY shows on Landing Page */}
      {isLanding && (
        <div className='text-center px-6 pb-6'>
          <h1 className='text-5xl'>
            Asylum Office Grant Rate Tracker
          </h1>
          <p className='text-sm max-w-3xl mx-auto opacity-90'>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, 
            policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions.
          </p>
        </div>
      )}
    </header>

  );
}
