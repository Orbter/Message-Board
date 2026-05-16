import { getUserDetails } from '@/api/getUserDetails';
interface User {
  id: string;
  name: string;
}
interface FetchFreshUserDataProps {
  setIsLoading: (value: boolean) => void;
  setUser: (value: User | null) => void;
}

export async function fetchFreshUserData({
  setIsLoading,
  setUser,
}: FetchFreshUserDataProps) {
  const storedUserId = localStorage.getItem('user_id');

  if (!storedUserId) {
    setIsLoading(false);
    return;
  }

  const userData = await getUserDetails({ userId: storedUserId });

  if (userData !== null) {
    setUser({ id: storedUserId, name: userData.name });
  } else {
    localStorage.removeItem('user_id');
  }

  setIsLoading(false);
}
