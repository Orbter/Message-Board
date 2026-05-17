import { Profile } from './ui/Profile';
import { useState } from 'react';
import { HeartButton } from './ui/HeartButton';
import { CommentButton } from './ui/CommentButton';
interface PeoplePostProps {
  name: string;
  publishTime: string;
  content: string;
  likes: number;
  commentsCount: number;
}

function PeoplePost({ post, likesCount, commentsCount }: PeoplePostProps) {
  const [name, publishTime, content] = post;
  return (
    <div className='flex flex-col rounded-2xl p-5 flex-1 bg-white border border-grey-border-main hover-shadow-md'>
      <div className='flex gap-5'>
        <Profile name={name} />
        <div className='flex flex-col gap-4'>
          <span className='font-medium'>{name}</span>
          <span className='text-grey-light'>{publishTime}</span>
        </div>
      </div>
      <p className='w-full'>{content}</p>
      <div className='flex justify-between'>
        <div className='flex cursor-pointer gap-5'>
          <HeartButton />
          <span className='text-grey-light'>{likesCount}</span>
        </div>
        <div className='hover:text-blue-500 cursor-pointer flex gap-5'>
          <CommentButton />
          <span className='text-grey-light'>{commentsCount}</span>
        </div>
      </div>
    </div>
  );
}
export { PeoplePost };
