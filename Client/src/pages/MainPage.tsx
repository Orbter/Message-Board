import { useState, useEffect, useCallback } from 'react';
import { Header } from '@/components/Header';
import { Post } from '@/components/Post';
import { useProvider } from '@/contexts/UserContext';
import { PeoplePost } from '@/components/PeoplePost';
import { getAllPosts } from '@/api/post/getAllPosts';

function MainPage() {
  const { isLoading } = useProvider();
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [fetchingData, setFetchingData] = useState(true);
  const fetchFeed = useCallback(async () => {
    const data = await getAllPosts();
    if (data) {
      setAllPosts(data);
    }
    setFetchingData(false);
  }, []);

  useEffect(() => {
    async function init() {
      await fetchFeed();
      setFetchingData(false);
    }
    init();
  }, [fetchFeed]);

  if (isLoading || fetchingData) return <div>Loading your feed...</div>;

  return (
    <div className='flex flex-col h-screen bg-background'>
      <Header />
      <div className='w-full max-w-xl mx-auto mt-4 p-1.5'>
        <Post onPostCreated={fetchFeed} />
      </div>
      <div className='flex flex-col gap-4 w-full max-w-xl mx-auto mt-6 p-1.5'>
        {allPosts.map((post) => (
          <div key={post.id}>
            <PeoplePost
              post={post}
              likesCount={post.likes ? post.likes.length : 0}
              commentsCount={post.comments ? post.comments.length : 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
