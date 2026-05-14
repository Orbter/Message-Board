import { useState } from 'react';
import { Logo } from '@/components/Logo';
function LoginPage() {
  const [name, setName] = useState('');
  const sendNameToServer = async (name: string) => {
    try {
      if (!name) return;
      const response = await fetch('http://localhost:3001/api/save-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error('Error sending name to server:', error);
    }
  };
  return (
    <div className='flex flex-col gap-10 justify-center items-center h-screen'>
      <div className='flex flex-col justify-center items-center'>
        <Logo />
        <span className='text-2xl font-semibold text-center mt-4'>Lumino</span>
      </div>
      <div className='flex flex-col gap-7'>
        <div className='flex flex-col gap-2'>
          <label className='text-xs font-medium text-black/50 uppercase tracking-widest'>
            Your Name
          </label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`
        border rounded-md p-3 outline-none transition-all duration-300 ease-in-out w-96
        ${name ? ' border-primary ring-2 ring-primary' : 'ring-0 border-grey-border-main'}
      `}
          />
        </div>
        <button
          className={` font-bold p-3 rounded-lg bg-primary w-96  ${name ? 'cursor-pointer' : 'opacity-40 '}`}
          onClick={() => sendNameToServer(name)}
        >
          log in →
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
