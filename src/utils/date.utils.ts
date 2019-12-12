/*
 * RATP dates follow the format "yyyyMMddHHmm"
 */
export const formatDate = (source: string): string => {
  const year = source.slice(0, 4);
  const month = source.slice(4, 6);
  const day = source.slice(6, 8);
  const hours = source.slice(8, 10);
  const minutes = source.slice(10, 12);

  const date = new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);
  return date.toISOString();
};
