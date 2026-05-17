import { Header } from '@/components/Header';
import { Post } from '@/components/Post';
import { useProvider } from '@/contexts/UserContext';
import { PeoplePost } from '@/components/PeoplePost';
import { getAllPosts } from '@/api/post/getAllPosts';
import { getLikePost } from '@/api/post/getLikePost';
import { getCommentCount } from '@/api/comments/getCommentCount';
async function MainPage() {
  const allPost = await getAllPosts();

  const { isLoading } = useProvider();
  if (isLoading) return <div>Loading your profile...</div>;

  return (
    <div className='flex flex-col h-screen bg-background'>
      <Header></Header>
      <div className=' w-full max-w-xl mx-auto'>
        <Post />
      </div>
      <div className=' flex flex-col gap-4 w-full max-w-xl'>
        {allPost.map((post) => {
          return (
            <div key={post.id}>
              <PeoplePost
                post={post}
                likesCount={() => getLikePost(post.id)}
                commentsCount={() => getCommentCount(post.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MainPage;
