export const getLikePost = async ({ postId: Number }) => {
  try {
    const response = await fetch(`http://localhost:3001/post/${postId}/likes`);

    if (response.ok) {
      const data = await response.json();
      console.log('got data', data);
      return data;
    }

    throw new Error(`Failed to fetch like post: ${response.status}`);
  } catch (error) {
    console.error('Failed to get like:', error);
    return null;
  }
};
