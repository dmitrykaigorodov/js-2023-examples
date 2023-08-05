
const arrayUtils = {
  blaBlaSort: (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = i+1; j < array.length; j++) {
        if (array[i] > array[j]) {
          const temp = array[j - 1];
          array[j - 1] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  },
  basicSort: (array) => {
    return array.sort();
  }
};

const stats = {

}

const proxy2 = new Proxy(arrayUtils, {
  
  get(target, prop, receiver) {
    prop = prop.toString();
    return function () {
      const startTime = Date.now();
      try {
        const result = target[prop].apply(this, arguments);
        // const result = target[prop](arguments);
        return result;
      } finally {
        const endTime = Date.now();
        // console.log(`Execution time: ${prop} ${endTime - startTime} ms`);
        stats[prop] = (stats[prop] || 0) + (endTime - startTime);
      }    
    }
  }
})

const generateArray = (length) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 1000));
  }
  return array;
}
for (let i = 0; i < 10; i++) {
  const array = generateArray(30000)
  const blaBlaSorted = proxy2.blaBlaSort(array);
  const basicSorted = proxy2.basicSort(array);
}
console.log(stats);

// console.log({ blaBlaSorted, basicSorted });