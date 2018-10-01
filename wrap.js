const word =
  'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.';

const wrap = (line, maxLen) => {
  let result = '';
  let str = '';

  if (line.length < maxLen) return line;

  const arr = line.split(' ');

  arr.forEach(item => {
    // less 20 add to line
    if (str.length + item.length + 1 <= maxLen) {
      str += `${item} `;
    } else if (str.length + item.length === maxLen) {
      str += item;
    } else {
      result += str + '\n';
      str = `${item} `;
    }
  });

  return result + str;
};
module.exports = wrap;

console.log(wrap(word, 20));
