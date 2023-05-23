export default function chooseRandom(messages) {
  const randIdx = Math.floor(Math.random() * messages.length);
  return messages[randIdx];
}
