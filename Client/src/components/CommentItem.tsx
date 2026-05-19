import { useState } from 'react';
import { Profile } from './ui/Profile';
import { HeartButton } from './ui/HeartButton';
import { useFormatDate } from '@/hooks/formatDate';
import { useProvider } from '@/contexts/UserContext';
import { handleLikeToggle } from '@/hooks/handleLikeToggle';
interface Comment {
  id?: string;
  postId?: string;
  profiles?: { name: string };
  created_at: string;
  content: string;
  likes?: { user_id: string }[];
}

interface CommentItemProps {
  comment: Comment;
  initialLikes?: number;
}

function CommentItem({ comment }: CommentItemProps) {
  const formattedTime = useFormatDate(comment.created_at);
  console.log(JSON.stringify(comment, null, 2) + 'test');
  const { user } = useProvider();
  const [isLiked, setIsLiked] = useState(() => {
    return comment.likes
      ? comment.likes.some((like) => like.user_id == user?.id)
      : false;
  });
  const [uiLikeCount, setUiLikedCount] = useState(
    comment.likes ? comment.likes.length : 0,
  );
  const commentId = comment.id;

  return (
    <div className='flex items-start gap-4 px-4 py-5 border-b border-grey-border-main  hover:bg-gray-50/60 transition-colors duration-150'>
      <div className='shrink-0 mt-0.5'>
        <Profile
          name={comment.profiles?.name}
          className='w-9 h-9 text-xs font-bold rounded-full ring-2 ring-white shadow-sm'
        />
      </div>

      <div className='flex-1 min-w-0 flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <span className='text-sm font-semibold text-gray-900 truncate'>
            {comment.profiles?.name || 'Anonymous'}
          </span>
          <span className='text-xs text-gray-400 shrink-0'>
            {formattedTime}
          </span>
        </div>

        <p className='text-sm text-gray-700 leading-relaxed break-words'>
          {comment.content}
        </p>

        <button
          className='flex items-center gap-1.5 mt-0.5'
          onClick={() =>
            handleLikeToggle({
              isLiked,
              setIsLiked,
              likesCount: uiLikeCount,
              setLikesCount: setUiLikedCount,
              postId: null,
              commentId,
              userId: user?.id,
            })
          }
        >
          <HeartButton isLiked={isLiked} className='p-0' />
          <span className='text-xs font-medium text-gray-500 tabular-nums'>
            {uiLikeCount}
          </span>
        </button>
      </div>
    </div>
  );
}

export { CommentItem };
