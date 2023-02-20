/*
    Take 2 strings s1 and s2 including only letters 
    from a to z. Return a new sorted string, 
    the longest possible, containing distinct letters
    - each taken only once - coming from s1 or s2.

    a = "xyaabbbccccdefww"
    b = "xxxxyyyyabklmopq"
    longest(a, b) -> "abcdefklmopqwxy"
*/

function longest(s1, s2) {
    console.log((s1 + s2).split('').filter(onlyUnique).sort().join(''))
  }
  
  function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
  }

  longest("loopingisfunbutdangerous", "lessdangerousthancoding");