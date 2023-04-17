// Define a function that returns a string
function taskOne() {
  const sentence = 'I tend to use const whenever possible.';
  return sentence;
}

// Define another function that returns a string
function getEnd() {
  return ' is also acceptable.';
}

// Define a third function that concatenates two strings and returns the result
function taskTwo() {
  let phrase = 'However, there are times when ';
  phrase += getEnd();
  return phrase;
}
