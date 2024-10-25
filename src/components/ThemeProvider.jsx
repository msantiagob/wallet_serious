import { Link } from 'react-router-dom';
import Icon from '../assets/icon.svg';

const ThemeProvider = ({ children }) => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex'>
          <img src={Icon} alt='' />
          <Link>Dashboard</Link>
          <Link>Accounts</Link>
          <Link>Records</Link>
          <Link>Analytics</Link>
          <Link>Investments</Link>
          <Link>Imports</Link>
        </div>

        <div className='flex'>
          <button>+ Record</button>
          <div className=' w-8 h-8 rounded-full bg-green-800'></div>
          <span>Elpepe</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ThemeProvider;
