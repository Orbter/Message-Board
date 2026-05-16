interface GetUserDetailsProps {
  userId: string;
}

export const getUserDetails = async ({ userId }: GetUserDetailsProps) => {
  try {
    const response = await fetch(`http://localhost:3001/api/profile/${userId}`);

    if (response.ok) {
      const data = await response.json();
      return data;
    }

    throw new Error(`Failed to fetch user details: ${response.status}`);
  } catch (error) {
    console.error('Failed to restore user state from ID badge:', error);
    return null;
  }
};
