export default function signUpUser(firstName, lastName) {
  return new Promised((resolve) => {
    resolve({
      firstName,
      lastName,
    });
  });
}
