export default function getFullResponseFromAPI(successful) {
  return new Promise((resolve, reject) => {
    if (successful) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
