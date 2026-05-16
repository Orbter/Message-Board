interface ProfileProps {
  name?: string;
}

function Profile({ name: userName }: ProfileProps) {
  const capitalizeFirstLetter = (name?: string) => {
    if (!name) return name;
    return name.charAt(0).toUpperCase();
  };
  const firstLetter = capitalizeFirstLetter(userName);
  return (
    <div className='flex rounded-full bg-primary justify-center items-center font-medium h-10 w-10'>
      <span className='font-semibold text-lg'>{firstLetter}</span>
    </div>
  );
}

export { Profile };
