import { Profile } from './ui/Profile';
import { LogoSmall } from './ui/LogoSmall';
import { useProvider } from '@/contexts/UserContext';
function Header() {
  const { user, isLoading, logout } = useProvider();

  if (isLoading) return <div>Loading your profile...</div>;
  if (!user) return <div>Please log in to view this page.</div>;
  return (
    <div className='flex justify-between p-4 bg-white border-b-grey-border-main border-b w-full h-14'>
      <div className='flex gap-3 items-center'>
        <LogoSmall />
        <span className='font-medium'>Lumino</span>
      </div>
      <div className='flex gap-3 items-center'>
        <Profile name={user.name}></Profile>
        <h4 className='font-semibold '>{user.name}</h4>
      </div>
    </div>
  );
}

export { Header };
