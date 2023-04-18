export default function signUpUser(lastName, firstName) {
  return new Promised((resolve) => {
    resolve({
      lastName,
      firstName,
    });
  });
}
