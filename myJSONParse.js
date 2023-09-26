
const myJSONParse = (jsonString) => {
  const parsed = jsonString.matchAll(/"(?<name>[^"]+)"\s*:\s*(?<value>[^,]+)\s*[,}\s]/g)
  const retVal = {}
  for (const match of parsed) {
    // console.log(match)
    // console.log(match.index)
    // console.log(match.groups)
    const value = match.groups.value
    const name = match.groups.name
    if (value.startsWith('"')) {
      retVal[name] = value.substr(1, value.length-2)
    } else {
      retVal[name] = Number(value)
    }
  }
  return retVal
}


const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = myJSONParse(jsonString);

console.log(jsonObject);