import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { useProvider } from '@/contexts/UserContext';
import { PeoplePost } from '@/components/PeoplePost';

function PostPage() {
  const [opendPost, setOpendPost] = useState<any[]>([]);

  const [fetchingData, setFetchingData] = useState(true);

  return (
    <div className='flex flex-col h-screen bg-background'>
      <Header />
      <div></div>
    </div>
  );
}
export default PostPage;
