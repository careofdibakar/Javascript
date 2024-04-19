const alphabetPrint = (c1, c2) => {
    c1Asci = c1.charCodeAt();
    c2Asci = c2.charCodeAt();

  let alphaString = "";

    for (let i = c1Asci; i <= c2Asci; i++) {
      alphaString += String.fromCharCode(i) + " ";
    }

  console.log(alphaString);
};

alphabetPrint("h", "u");
