import Cookies from 'js-cookie';

/**
 * Checks if a cookie with the given key exists and returns a boolean.
 * @param key - The key of the cookie to check.
 * @returns boolean - true if the cookie exists, false otherwise.
 */

export const doesCookieExist = (key: string): boolean => {
  const value = Cookies.get(key);
  return value !== undefined;
};
