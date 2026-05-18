import { Profile } from './ui/Profile';
import { LogoSmall } from './ui/LogoSmall';
import { useProvider } from '@/contexts/UserContext';
import { useNavigate } from 'react-router-dom';
function Header() {
  const { user, isLoading, logout } = useProvider();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/home-screen`);
  };
  if (isLoading) return <div>Loading your profile...</div>;
  if (!user) return <div>Please log in to view this page.</div>;
  return (
    <div className='flex justify-between p-4 bg-white border-b-grey-border-main border-b w-full h-14'>
      <button
        className='flex gap-3 items-center cursor-pointer'
        onClick={handleButtonClick}
      >
        <LogoSmall />
        <span className='font-semibold'>Lumino</span>
      </button>
      <div className='flex gap-3 items-center'>
        <Profile name={user.name}></Profile>
        <h4 className='font-semibold '>{user.name}</h4>
      </div>
    </div>
  );
}

export { Header };
