interface uploadingPostProps {
  userId: string;
  postId: string;
  content: string;
}

export const uploadingComments = async ({
  userId,
  postId,
  content,
}: uploadingPostProps) => {
  try {
    if (!userId) return;
    const response = await fetch(
      'http://localhost:3001/comments/save-comment',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, postId, content }),
      },
    );
    if (response.ok) {
      const data = await response.json();
      return true;
    }
  } catch (error) {
    console.error('Error sending name to server:', error);
  }
};
