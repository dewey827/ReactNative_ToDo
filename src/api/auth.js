const USER_EMAIL = 'asd';
const USER_PASSWORD = '123';

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === USER_EMAIL && password === USER_PASSWORD) {
        resolve(email);
      } else {
        reject('이메일 혹은 비밀번호가 올바르지 않습니다.');
      }
    }, 1000);
  });
};
