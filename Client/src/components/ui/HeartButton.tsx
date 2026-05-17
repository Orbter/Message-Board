import { useState } from 'react';
import { Heart } from 'lucide-react'; // ← replaces your SVG

interface HeartButtonProps {
  initialLiked?: boolean;
  onChange?: (isLiked: boolean) => void;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  initialLiked = false,
  onChange,
}) => {
  const [isLiked, setIsLiked] = useState(initialLiked);

  const toggle = () => {
    const next = !isLiked;
    setIsLiked(next);
    onChange?.(next);
  };

  return (
    <button
      onClick={toggle}
      className='group p-2 rounded-full  transition-colors cursor-pointer'
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
