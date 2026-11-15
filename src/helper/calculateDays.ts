export function calculateDays(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const difference = end.getTime() - start.getTime();

  return Math.ceil(difference / (1000 * 60 * 60 * 24));
}
