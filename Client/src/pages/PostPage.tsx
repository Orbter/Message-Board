import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { PeoplePost } from '@/components/PeoplePost';
import { getCommentsPost } from '@/api/comments/getCommentsPost';
import { CommentUser } from '@/components/CommentUser';
import { CommentItem } from '@/components/CommentItem';

function PostPage() {
  const [openPost, setOpenPost] = useState<any>(null);
  const { postId } = useParams<{ postId: string }>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      if (!postId) return;
      const data = await getCommentsPost({ postId });
      if (data) {
        setOpenPost(data);
      }
      setIsLoading(false);
    }
    fetchComments();
  }, [postId]);

  if (isLoading || !openPost) {
    return (
      <div className='flex flex-col h-screen bg-background'>
        <Header />
        <div className='flex items-center justify-center flex-1 text-gray-500 font-medium'>
          Loading post and comments...
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col h-screen bg-background'>
      <Header />
      <div className='flex flex-col gap-10 w-full max-w-xl mx-auto mt-4'>
        <PeoplePost
          post={openPost}
          likesCount={openPost.likes ? openPost.likes.length : 0}
          commentsCount={openPost.comments ? openPost.comments.length : 0}
        />
        <CommentUser />
      </div>

      <div className='flex flex-col gap-4 w-full max-w-xl mx-auto mt-6'>
        {openPost.comments?.map((comment: any, index: number) => (
          <div key={index}>
            <CommentItem comment={comment} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostPage;
