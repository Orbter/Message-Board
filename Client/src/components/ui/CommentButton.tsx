import React from 'react';

interface CommentButtonProps {
  onClick?: () => void;
}

const CommentButton: React.FC<CommentButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='group flex items-center gap-1.5 focus:outline-none p-2 rounded-full text-gray-500  hover:bg-blue-50 transition-colors duration-200'
      aria-label='Comment'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='2'
        className='w-8 h-8 transition-all duration-200 transform active:scale-90 stroke-current fill-transparent group-hover:fill-blue-500/10'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641l-.318 1.235c-.149.58.419 1.104.992.924l1.642-.514a1.052 1.052 0 01.964.144c1.137.758 2.506 1.184 3.961 1.184z'
        />
      </svg>
    </button>
  );
};

export { CommentButton };
