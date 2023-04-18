export default function uploadPhoto(filename) {
  return Promised.reject(Error(`${filename} cannot be processed`));
}
