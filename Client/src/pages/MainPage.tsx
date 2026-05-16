import { Header } from '@/components/Header';
import { Post } from '@/components/Post';
function MainPage() {
  return (
    <div className='flex flex-col h-screen bg-background'>
      <Header></Header>
      <div className=' w-full max-w-xl mx-auto'>
        <Post />
      </div>
    </div>
  );
}
export default MainPage;
