import './Login.scss';
import brandLogo from '../assets/images/brand-logo.png';

const Login = () => {
  return (
    <div className='Login'>
      <header className='header'>
        <nav className='navbar'>
          <div className='brand'>
            <img className='brand__logo' src={brandLogo} alt="Brand Logo" />
            <span className='brand__name'>Angello</span>
          </div>
          <div className='menu'>
            <a className='link' href='https://github.com/MAX-EINSTEIN/angello/' target='_blank' rel='noreferrer'>Log in</a>
            <button className='btn-trynow btn' onClick={() => console.log('Sign up!')}> Sign up </button>
          </div>
        </nav>
      </header>

      <main className="content">

      </main>

      <footer className='footer'>
        <span className='copyright'>© Copyright 2021. All rights reserved.</span>
        <span>Developed by <a className='link' href='https://github.com/MAX-EINSTEIN/' target='_blank' rel='author noreferrer'>MAX-EINSTEIN</a></span>
      </footer>
    </div>
  );
};

export default Login;
