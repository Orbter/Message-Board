import { useState } from 'react';
import { Profile } from './ui/Profile';
import { HeartButton } from './ui/HeartButton';
import { CommentButton } from './ui/CommentButton';
import { useFormatDate } from '@/hooks/formatDate';
import { useNavigate } from 'react-router-dom';
import { handleLikeToggle } from '@/hooks/handleLikeToggle';
import { useProvider } from '@/contexts/UserContext';
interface PeoplePostProps {
  post: {
    id: number;
    content: string;
    created_at: string;
    profiles?: { name: string };
    likes?: { user_id: string }[];
  };
  likesCount: number;
  commentsCount: number;
}

function PeoplePost({ post, likesCount, commentsCount }: PeoplePostProps) {
  const navigate = useNavigate();
  const { id, content, created_at, profiles } = post;
  const authorName = profiles?.name || 'Anonymous';
  const formattedTime = useFormatDate(created_at);

  const { user } = useProvider();
  const [isLiked, setIsLiked] = useState(() => {
    return post.likes
      ? post.likes.some((like) => like.user_id === user?.id)
      : false;
  });
  const [uiLikeCount, setUiLikedCount] = useState(likesCount);
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
        <button
          className='flex cursor-pointer items-center text-grey-light  transition-colors'
          onClick={() =>
            handleLikeToggle({
              isLiked,
              setIsLiked,
              likesCount: uiLikeCount,
              setLikesCount: setUiLikedCount,
              postId: id,
              commentId: null,
              userId: user?.id,
            })
          }
        >
          <HeartButton isLiked={isLiked} className='' />
          <span className='text-xs font-medium'>{uiLikeCount}</span>
        </button>
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
