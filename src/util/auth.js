export const userTokenKey = "userToken";
export const userKey = "user";

export const getToken = () => {
  return localStorage.getItem(userTokenKey);
};

export const getUser = () => {
  try {
    const user = localStorage.getItem(userKey);
    return JSON.parse(user);
  } catch (error) {
    return null;
  }
};

export const setUserData = (userToken, userObject) => {
  localStorage.setItem(userTokenKey, userToken);
  localStorage.setItem(userKey, JSON.stringify(userObject));
};
