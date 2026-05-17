export const useFormatDate = (isoString: string) => {
  const date = new Date(isoString);

  const datePart = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return datePart;
};
