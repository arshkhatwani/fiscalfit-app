function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const parts = new Intl.DateTimeFormat('en-US', options).formatToParts(date);
  const day = parts.find(part => part.type === 'day')?.value ?? '';
  const month = parts.find(part => part.type === 'month')?.value ?? '';
  const year = parts.find(part => part.type === 'year')?.value ?? '';
  return `${day} ${month} ${year}`;
}

export default formatDate;
