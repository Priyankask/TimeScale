const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  let marvelCharacters =[]
  for(let i =0;i<heroes.length;i++){
    if(heroes[i].publisher === 'Marvel Comics'){
      marvelCharacters.push(heroes[i].characters);
    }
  }
  console.log(marvelCharacters);
  return marvelCharacters;
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {

  for(let i =0;i<heroes.length;i++){
    let temp = heroes[i].characters;
    heroes[i].characters = [temp];
  }
  return heroes;
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  let array1 =[];let array2 =[];
  for(let i =0;i<heroes.length;i++){
    if(heroes[i].publisher === 'DC Comics'){
      array1.push(heroes[i].characters)
    }
    else {
      array2.push(heroes[i].characters)
    }
  }
  let obj = {"DC Comics":array1,"Marvel Comics":array2}
  return obj;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  let array =[];
  for(let i =0;i<heroes.length;i++){
    if(heroes[i].publisher === 'DC Comics'){
      let [str] = heroes[i].characters;
      if(str.includes(',')){
        array.push(heroes[i].characters);
      }
    }
  }
  //console.log(array);
  return array;
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
