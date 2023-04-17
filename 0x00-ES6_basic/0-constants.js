export function taskFirst() {
  const sentence = 'I prefer const when I can.';
  return sentence;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
