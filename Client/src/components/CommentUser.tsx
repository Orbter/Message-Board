import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProvider } from '@/contexts/UserContext';
import { Profile } from './ui/Profile';
import { Send } from 'lucide-react';
import { uploadingComments } from '@/api/comments/uploadingComments';
interface CommentUserProps {
  onCommentAdded: () => Promise<void>;
}
function CommentUser({ onCommentAdded }: CommentUserProps) {
  const { user, isLoading } = useProvider();
  const [userComment, setUserComment] = useState(''); // Fixed casing
  const { postId } = useParams<{ postId: string }>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user?.id || !postId || userComment.trim().length === 0) return;

    const backResponse = await uploadingComments({
      userId: user.id,
      postId,
      content: userComment,
    });

    if (backResponse) {
      setUserComment('');
      await onCommentAdded();
    }
  };

  return (
    <div className='flex gap-4 bg-white rounded-2xl p-4 flex-1  border border-grey-border-main '>
      <div className='flex '>
        <Profile name={user?.name} className='w-9 h-9 text-base' />
      </div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-1 gap-4 d items-center'
      >
        <textarea
          className='placeholder-grey-light w-full focus:outline-none overflow-y-auto border-b border-grey-border-main'
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
          maxLength={500}
          rows={2}
          placeholder='Write a comment...'
        />
        <button
          className={`flex rounded-full justify-center items-center font-medium h-9 w-9 bg-primary transition-opacity ${
            userComment.trim().length === 0 || isLoading
              ? 'opacity-50 '
              : 'opacity-100 cursor-pointer'
          }`}
          type='submit'
          disabled={userComment.trim().length === 0 || isLoading}
        >
          <Send size={14} />
        </button>
      </form>
    </div>
  );
}

export { CommentUser };
