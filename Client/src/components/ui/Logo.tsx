import sunIcon from '@/assets/sun.svg';

interface LogoProps {
  icon?: string;
}

const Logo = ({ icon = sunIcon }: LogoProps) => {
  return (
    <div className='bg-primary flex justify-center items-center h-16 w-16 rounded-2xl shadow-xl'>
      <img src={icon} alt='Sun Icon' className='w-8 h-8' />
    </div>
  );
};

export { Logo };
