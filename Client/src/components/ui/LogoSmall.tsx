import sunIcon from '@/assets/sun.svg';

interface LogoProps {
  icon?: string;
}

const LogoSmall = ({ icon = sunIcon }: LogoProps) => {
  return (
    <div className='bg-primary flex justify-center items-center h-10 w-10 rounded-full'>
      <img src={icon} alt='Sun Icon' className='w-5 h-5' />
    </div>
  );
};

export { LogoSmall };
