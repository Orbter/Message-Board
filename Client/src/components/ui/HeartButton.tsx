import { useState } from 'react';
import Heart from '@/assets/heart.svg';

interface HeartButtonProps {
  initialLiked?: boolean;
  onChange?: (isLiked: boolean) => void;
}
const HeartButton: React.FC<HeartButtonProps> = ({
  initialLiked = false,
  onChange,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(initialLiked);
  const toggleLike = () => {
    const nextState = !isLiked;
    setIsLiked(nextState);
    if (onChange) {
      onChange(nextState);
    }
  };

  return (
    <button
      onClick={toggleLike}
      className='group focus:outline-none p-2 rounded-full hover:bg-red-50 transition-colors duration-200'
      aria-label={isLiked ? 'Unlike' : 'Like'}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        strokeWidth='2'
        className={`w-8 h-8 transition-all duration-300 transform active:scale-90 ${
          isLiked
            ? 'fill-primary stroke-primary scale-110'
            : 'fill-transparent stroke-grey-light group-hover:stroke-primary/50'
        }`}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
        />
      </svg>
    </button>
  );
};

export { HeartButton };
