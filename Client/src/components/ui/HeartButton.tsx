import { Heart } from 'lucide-react';

interface HeartButtonProps {
  isLiked?: boolean;
  className: string;
  onChange?: (isLiked: boolean) => void;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  isLiked = false,
  className = '',
}) => {
  return (
    <button
      className={`group  rounded-full  transition-colors cursor-pointer ${className || 'p-2'} `}
      aria-label={isLiked ? 'Unlike' : 'Like'}
    >
      <Heart
        size={24}
        strokeWidth={1}
        className={
          isLiked
            ? 'fill-primary stroke-primary scale-110 transition-all'
            : 'fill-transparent stroke-grey-light group-hover:stroke-primary transition-all'
        }
      />
    </button>
  );
};
export { HeartButton };
