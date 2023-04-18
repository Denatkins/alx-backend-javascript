/* eslint-disable no-console */
export default function handleResponseFromAPI(promised) {
  return promised
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Reject())
    .finally(() => { console.log('Got a response from the API'); });
}
