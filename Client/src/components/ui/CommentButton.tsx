import { MessageCircle } from 'lucide-react'; // ← replaces your SVG

interface CommentButtonProps {
  onClick?: () => void;
}

const CommentButton: React.FC<CommentButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='group p-2 rounded-full group-hover:stroke-primary cursor-pointer transition-colors'
      aria-label='Comment'
    >
      <MessageCircle
        size={24}
        strokeWidth={1}
        className='transition-all active:scale-90 group-hover:stroke-blue-500 '
      />
    </button>
  );
};
export { CommentButton };
