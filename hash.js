
const INITIAL_OFFSET = 4
class CustomHashTable {
  /**
   * @type Array({ hash: number, key: string, value: any })
   */
  table
  offset
  mask

  constructor() {
    this.offset = INITIAL_OFFSET
    this.table = new Array(1 << INITIAL_OFFSET)
    this.mask = (1 << INITIAL_OFFSET) - 1
  }

  hash(key) {
    let retVal = 0
    let length = Math.min(key.length, 6)
    for (let i = 0; i < length; i++) {
      const byte = key.charCodeAt(i) & 255
      // retVal = retVal ^ byte
      retVal = (retVal << 8) + byte
      // console.log({
      //   byte,
      //   byteBin: byte.toString(2),
      //   retVal: retVal,
      //   binary: retVal.toString(2)
      // })
    }
    return retVal
  }

  insert(key, value) {
    const hashCode = this.hash(key)
    const index = hashCode & this.mask
    this.table[index] = {hashCode, key, value}
  }

  get(key) {
    const hashCode = this.hash(key)
    const index = hashCode & this.mask
    console.log({ key, hashCode, index })
    const entry = this.table[index]
    if (entry.hashCode == hashCode && entry.key == key) {
     return entry.value
    }
    return null
  }

  delete(key) {
    const hashCode = this.hash(key)
    const index = hashCode & this.mask
    delete this.table[index]
  }
  resize() {

  }
}

const obj = new CustomHashTable()
obj.insert("Dmitr", { age: 38 })
obj.insert("Alesya", { age: 18 })
obj.insert("Pasha", { age: 40 })

console.log(obj.table)
console.log(obj.get('Dmitr'))
console.log(obj.get('Alesya'))
console.log(obj.get('Pasha'))

