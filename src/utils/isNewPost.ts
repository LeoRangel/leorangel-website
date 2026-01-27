export const isNewPost = (publishDate: string | Date): boolean => {
  const postDate = new Date(publishDate).getTime();
  const today = new Date().getTime();

  const oneMonthInMs = 30 * 24 * 60 * 60 * 1000;

  return today - postDate < oneMonthInMs;
};
