### Arrat.map()
- The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

### Array.reduce()
- The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

### Superagent()
* Using Standard Promise `.then` syntax:

```
function getCharacters() {
  superagent.get('https://swapi.dev/api/people/')
  .then(charactersData => {
    for(let i = 0; i < charactersData.body.results.length; i++){
      const characterObject = {
        name: charactersData.body.results[i].name,
        url: charactersData.body.results[i].url
      }
      console.log(characterObject);
    }
  })
}

getCharacters();
```


* Using asynce/await

```
async function findCity(cityName) {
  try {
    let results = await superagent.get("https://geocode.xyz/" + cityName + "?json=1&auth=789302545052785643492x123031");
    console.log(cityName + " Longitude: " + results.body.longt);
    console.log(cityName + " Latitude: " + results.body.latt);
  } catch(error){
    console.error(error);
  }
}

findCity("seattle");
findCity("Portland");
findCity("NewYork");
```

### Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### Callback Functions:
Not all callback functions are asynchronous. Asynchronous function needs to perform an asynchronous operation.