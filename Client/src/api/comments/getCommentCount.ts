export const getCommentCount = async ({ postId: Number }) => {
  try {
    const response = await fetch(
      `http://localhost:3001/comments/${postId}/count`,
    );

    if (response.ok) {
      const data = await response.json();
      console.log('got data', data);
      return data;
    }

    throw new Error(`Failed to fetch comment count: ${response.status}`);
  } catch (error) {
    console.error('Failed to get comment count:', error);
    return null;
  }
};
