export const checkForError = (status: number, message: string) => {
  const errorResponses = [400, 401, 403, 404, 500];

  if (errorResponses.includes(status)) throw new Error(message);
};
