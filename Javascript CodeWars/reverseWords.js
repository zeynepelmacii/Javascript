function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }
  
  console.log(reverseWords('Welcome to Stack overflow'));