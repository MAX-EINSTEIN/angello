import { Github } from '../components/Icons'

const Login = ({ loginWithGoogle, signInAnon }) => {
  return (
    <>
      <div className="wrapper flex flex-col justify-between bg-gradient-to-r from-indigo-50 via-blue-50 to-red-50 h-screen ">
        <nav className='flex self-center justify-between py-4 px-4 bg-transparent w-full'>
          <div className="brand flex align-middle gap-2 px-2 py-1">
            <img className="w-8 h-8 bg-gradient-to-b from-primary to-secondary px-0.5 py-0.5 mt-1 rounded-sm" src={require('../assets/brand_logo.png').default} alt="Brand Logo" />
            <span className="brand__name font-bold text-4xl text-tertiary">Angello</span>
          </div>
          <div className="menu flex items-center gap-4 px-2 py-2">
            <div className='flex gap-1 items-center px-2 py-1 text-tertiary hover:bg-tertiary hover:text-blue-50 bg-transparent rounded-sm transform hover:shadow-md transition-transform duration-300'>
              <Github />
              <a href='https://github.com/MAX-EINSTEIN/angello/' target='_blank' rel='noreferrer'>Github</a>
            </div>
            <button className='bg-gradient-to-b from-primary to-secondary px-2 py-0.5 text-gray-100 rounded-sm font-mono transform hover:shadow-md transition-transform duration-300' onClick={signInAnon}> Try Now </button>
          </div>
        </nav>

        <div className='flex flex-col-reverse md:flex-row md:justify-between px-5 md:px-20 py-6 md:py-16'>
          <div className='w-full md:w-7/12 md:pr-12 pt-4'>
            <h1 className='text-3xl md:text-5xl text-tertiary font-semibold'>Angello gives you wings to reach your goals</h1>
            <p className='mt-3 md:mt-6 text-base md:text-xl text-gray-600 leading-normal'>Angello is a simplified Kanban planner for personal use that helps you organise your life and work. From meeting deadlines to better collaboration - Angello can do it all.</p>
            <div className="flex md:mt-12 text-sm md:text-base">
              <button className='flex self-center bg-gradient-to-b from-primary to-secondary border border-black px-2 py-1 mr-4 text-gray-100 rounded-sm font-medium transform hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-md transition-transform duration-300' onClick={loginWithGoogle}>
                Give me Wings
                <img className='ml-2 w-6 h-6 rounded-sm' src={require("../assets/brand_logo.png").default} alt="Sign in with Google" />
              </button>
            </div>
          </div>
          <div className='w-full md:w-5/12'>
            <img src={require('../assets/hero.svg').default} alt="plan" />
          </div>
        </div>

        <footer className='footer flex flex-row justify-between w-full bg-transparent px-6 py-4 text-tertiary'>
          <span className='copyright'>© Copyright 2021. All rights reserved.</span>
          <span>Developed by <a className='developer text-primary hover:underline' href='https://github.com/MAX-EINSTEIN/' target='_blank' rel='author noreferrer'>MAX-EINSTEIN</a></span>
        </footer>
      </div>
    </>
  )
}

export default Login