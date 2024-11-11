import { Link } from 'react-router-dom';
import Icon from '../assets/icon.svg';

const ThemeProvider = ({ children }) => {
  return (
    <div className='border-b border-gray-200 h-20'>
      <div className='h-20 flex justify-between items-center max-w-[1366px] m-auto'>
        <div className='flex ml-8'>
          <img src={Icon} alt='' className='w-10 mr-5' />
          <div className='flex gap-8 mt-2 text-gray-500'>
            <Link to="/dashboard">Dashboard</Link>
            <Link>Accounts</Link>
            <Link>Records</Link>
            <Link>Analytics</Link>
            <Link>Investments</Link>
            <Link>Imports</Link>
          </div>
        </div>

        <div className='flex items-center gap-4 mr-10'>
          <button className='bg-blue-600 rounded-full p-1 text-white text-xs pl-3 pr-3 mr-1'>+ Record</button>
          <div className='flex gap-2'>
            <div className=' w-8 h-8 rounded-full bg-green-800'></div>
            <span className='mt-1'>User</span>
          </div>

        </div>
      </div>
      {children}
    </div>
  );
};

export default ThemeProvider;
