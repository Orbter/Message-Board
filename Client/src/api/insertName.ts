export const insertName = async (
  name: string,
  login: (userData: any) => void,
) => {
  try {
    if (!name) return;
    const response = await fetch('http://localhost:3001/api/save-name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      login({
        id: data.user.id,
        name: data.user.name,
      });
      return true;
    }
  } catch (error) {
    console.error('Error sending name to server:', error);
  }
};
