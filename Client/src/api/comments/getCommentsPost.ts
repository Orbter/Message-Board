export const getCommentsPost = async ({ postId }: { postId: String }) => {
  try {
    const response = await fetch(
      `http://localhost:3001/comments/post/${postId}`,
    );

    if (response.ok) {
      const data = await response.json();
      console.log('got data', data);
      return data;
    }

    throw new Error(`Failed to comments for post: ${response.status}`);
  } catch (error) {
    console.error('Failed to comments for post:', error);
    return null;
  }
};
