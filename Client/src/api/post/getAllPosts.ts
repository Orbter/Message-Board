export const getAllPosts = async () => {
  try {
    const response = await fetch('http://localhost:3001/post/all-posts');

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    throw new Error(`Failed to fetch all the posts: ${response.status}`);
  } catch (error) {
    console.error('Failed to get all posts:', error);
    return null;
  }
};
