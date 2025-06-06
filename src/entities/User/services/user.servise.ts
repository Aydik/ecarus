import Cookies from 'js-cookie';

export const getUser = async () => {
  try {
    // const res = await axiosInstance.get('users/current');
    // Убрать
    const userCookie = Cookies.get('user');
    if (userCookie) {
      console.log(JSON.parse(userCookie));
      return JSON.parse(userCookie);
    }
    throw new Error('Could not find user');
    //
    // return res.data;
  } catch (err) {
    throw err;
  }
};
