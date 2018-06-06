// (string) => object

function countLetters(str) {
  var noSpaces = str.split(" ").join("").toLowerCase();
  var characterObj = {};

  for (var i = 0; i < noSpaces.length; i++) {
    if(!characterObj.hasOwnProperty(noSpaces[i])){
      characterObj[noSpaces[i]] = [i]
    } else {
    characterObj[noSpaces[i]].push(i);
    }
  }
  console.log(characterObj)
}

countLetters('lighthouse in the house')