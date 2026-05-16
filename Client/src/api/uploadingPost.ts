interface uploadingPostProps {
  userId: string;
  content: string;
}

export const uploadingPost = async ({
  userId,
  content,
}: uploadingPostProps) => {
  try {
    if (!userId) return;
    const response = await fetch('http://localhost:3001/post/save-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, content }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return true;
    }
  } catch (error) {
    console.error('Error sending name to server:', error);
  }
};
