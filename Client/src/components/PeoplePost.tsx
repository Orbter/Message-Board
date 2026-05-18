import { Profile } from './ui/Profile';
import { HeartButton } from './ui/HeartButton';
import { CommentButton } from './ui/CommentButton';
import { useFormatDate } from '@/hooks/formatDate';
import { useNavigate } from 'react-router-dom';

interface PeoplePostProps {
  post: {
    id: number;
    content: string;
    created_at: string;
    profiles?: { name: string };
  };
  likesCount: number;
  commentsCount: number;
}

function PeoplePost({ post, likesCount, commentsCount }: PeoplePostProps) {
  const navigate = useNavigate();
  const { id, content, created_at, profiles } = post;
  const authorName = profiles?.name || 'Anonymous';
  const formattedTime = useFormatDate(created_at);

  const handleButtonClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className='flex flex-col rounded-2xl p-5 flex-1 bg-white border border-grey-border-main hover:shadow-md gap-4'>
      <div className='flex gap-5'>
        <Profile name={authorName} />
        <div className='flex flex-col justify-center'>
          <span className='font-medium text-sm text-black'>{authorName}</span>
          <span className='text-xs text-gray-400'>{formattedTime}</span>
        </div>
      </div>

      <p className='w-full text-sm text-gray-700'>{content}</p>

      <div className='flex gap-4 border-t border-grey-border-main pt-3 mt-1'>
        <div className='flex cursor-pointer items-center text-grey-light  transition-colors'>
          <HeartButton />
          <span className='text-xs font-medium'>{likesCount}</span>
        </div>
        <div
          className='flex cursor-pointer items-center text-grey-light  transition-colors'
          onClick={handleButtonClick}
        >
          <CommentButton />
          <span className='text-xs font-medium'>{commentsCount}</span>
        </div>
      </div>
    </div>
  );
}

export { PeoplePost };
