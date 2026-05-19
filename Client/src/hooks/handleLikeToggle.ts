interface LikeToggleProps {
  isLiked: boolean;
  setIsLiked: (liked: boolean) => void;
  likesCount: number;
  setLikesCount: (count: number) => void;
  postId: number | string | null;
  commentId: number | string | null;
  userId: string | undefined;
}
async function handleLikeToggle({
  isLiked,
  setIsLiked,
  likesCount,
  setLikesCount,
  postId,
  commentId,
  userId,
}: LikeToggleProps) {
  if (!userId) {
    return;
  }
  const previousIsLiked = isLiked;
  const previousLikesCount = likesCount;
  setIsLiked(!previousIsLiked);
  setLikesCount(
    previousIsLiked ? previousLikesCount - 1 : previousLikesCount + 1,
  );
  try {
    const response = await fetch('http://localhost:3001/post/like', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        postId,
        commentId,
        userId,
        action: !previousIsLiked ? 'true' : 'false',
      }),
    });

    if (!response.ok) {
      throw new Error('Server rejected the like');
    }
  } catch (error) {
    setIsLiked(previousIsLiked);
    setLikesCount(previousLikesCount);
    console.error('Rolling back optimistic like update:', error);
  }
}

export { handleLikeToggle };
