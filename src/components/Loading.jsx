import logo from '../assets/images/brand-logo-wings-only.png';
import './Loading.scss';

const Loading = () => {
  return (
    <div className='Loading'>
      <div className='content'>
        <img src={logo} className="brand-logo" alt="Angello logo" />
        <div className="prompt">loading data... please wait!</div>
      </div>
    </div>
  );
};

export default Loading;