import { Profile } from './ui/Profile';
import { useProvider } from '@/contexts/UserContext';
import { useState } from 'react';
import { uploadingPost } from '@/api/post/uploadingPost';
interface PostProps {
  onPostCreated: () => Promise<void>;
}
function Post({ onPostCreated }: PostProps) {
  const { user, isLoading, logout } = useProvider();
  const [userPost, setUserPost] = useState('');
  const characterLimit = 500;
  const handleButtonClick = async (userId: string, content: string) => {
    const backResponse = await uploadingPost({ userId, content });
    if (backResponse) {
      console.log('uploded nice');
      setUserPost('');
      await onPostCreated();
    }
  };
  return (
    <div className='flex gap-4 bg-white rounded-2xl p-5 flex-1 border border-grey-border-main'>
      <div>
        <Profile name={user?.name}></Profile>
      </div>

      <div className='flex flex-col w-full'>
        <form className='w-full'>
          <textarea
            className='placeholder-grey-light w-full focus:outline-none overflow-y-auto border-b border-grey-border-main'
            value={userPost}
            onChange={(e) => setUserPost(e.target.value)}
            maxLength={characterLimit}
            rows={4}
            placeholder='what on your mind today'
          />
          <div className='flex justify-between items-center'>
            <div
              className={`text-sm text-right flex items-center justify-center h-full ${
                userPost.length === characterLimit
                  ? 'text-red-500'
                  : userPost.length > 0
                    ? 'text-blue-500'
                    : 'text-gray-500'
              }`}
            >
              {userPost.length}/{characterLimit}
            </div>
            <button
              className={`bg-primary font-semibold flex justify-center items-center w-20 px-9 py-2 rounded-xl ${userPost.trim().length === 0 ? 'opacity-50' : 'cursor-pointer'}`}
              type='submit'
              disabled={userPost.trim().length === 0}
              onClick={(e) => {
                e.preventDefault();
                handleButtonClick(user.id, userPost);
              }}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { Post };
