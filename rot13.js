function rot13(str) {
    let words = str.split("");
    let translate = words.map(a => {
      const myRegex = /[A-Za-z]/;
      if(myRegex.test(a) == false){
        return a.charCodeAt(0);
      } return (a.charCodeAt(0) + 13 - 65) % 26 + 65
    });
    let result = translate.map(a => String.fromCharCode(a)).join("");
    return result;
  
  }
  
  rot13("SERR CVMMN!");
  