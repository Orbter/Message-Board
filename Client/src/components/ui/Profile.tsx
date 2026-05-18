interface ProfileProps {
  name?: string;
  className?: string;
}

function Profile({ name: userName, className = '' }: ProfileProps) {
  const capitalizeFirstLetter = (name?: string) => {
    if (!name) return name;
    return name.charAt(0).toUpperCase();
  };
  const firstLetter = capitalizeFirstLetter(userName);
  return (
    <div
      className={`flex rounded-full bg-primary justify-center items-center font-medium ${className || 'h-10 w-10 text-lg'} `}
    >
      <span className='font-semibold '>{firstLetter}</span>
    </div>
  );
}

export { Profile };
