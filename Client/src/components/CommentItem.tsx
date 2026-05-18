import { useState, useEffect } from 'react';
import { Profile } from './ui/Profile';
import { HeartButton } from './ui/HeartButton';
import { useFormatDate } from '@/hooks/formatDate';

interface Comment {
  profiles?: { name: string };
  created_at: string;
  content: string;
  likesCount: number;
}

interface CommentItemProps {
  comment: Comment;
  initialLikes?: number;
}

function CommentItem({ comment }: CommentItemProps) {
  const formattedTime = useFormatDate(comment.created_at);
  // ✅ Fix: default to 0 if likesCount is undefined/null
  const [numberOfLikes, setNumberOfLikes] = useState(comment.likesCount ?? 0);

  useEffect(() => {
    // ✅ Fix: only update if we actually have a value
    if (comment.likesCount !== undefined) {
      setNumberOfLikes(comment.likesCount);
    }
  }, [comment.likesCount]);

  return (
    <div className='flex items-start gap-4 px-4 py-5 border-b border-grey-border-main  hover:bg-gray-50/60 transition-colors duration-150'>
      {/* Avatar */}
      <div className='shrink-0 mt-0.5'>
        <Profile
          name={comment.profiles?.name}
          className='w-9 h-9 text-xs font-bold rounded-full ring-2 ring-white shadow-sm'
        />
      </div>

      {/* Body */}
      <div className='flex-1 min-w-0 flex flex-col gap-2'>
        {/* Header: name + time on same row */}
        <div className='flex items-center gap-2'>
          <span className='text-sm font-semibold text-gray-900 truncate'>
            {comment.profiles?.name || 'Anonymous'}
          </span>
          <span className='text-xs text-gray-400 shrink-0'>
            {formattedTime}
          </span>
        </div>

        {/* Comment text */}
        <p className='text-sm text-gray-700 leading-relaxed break-words'>
          {comment.content}
        </p>

        {/* Like button row */}
        <div className='flex items-center gap-1.5 mt-0.5'>
          <HeartButton className='p-0' />
          <span className='text-xs font-medium text-gray-500 tabular-nums'>
            {numberOfLikes}
          </span>
        </div>
      </div>
    </div>
  );
}

export { CommentItem };
