const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = new Array(promises.length);
    let settledPromises = 0;

    if (promises.length === 0) {
      resolve(results);
      return;
    }

    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i]
      if (!(promise instanceof Promise)) {
        settledPromises++;
        results[i] = promise;
      }
      promise.then((result) => {
          results[i] = result;
          settledPromises++;

          if (settledPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((e) => {
          reject(new Error(e));
        });
    }
  });
};

/* Why it's wrong to use await/async here. The result of execution is the same, and as I undrstand 

let total = [];
const promiseAll = async (promises) => {
  if (promises.length === 0) {
    return Promise.resolve(total);
  }
  try {
    const result = await promises[0];
    total.push(result);
  } catch (error) {
    return Promise.reject("Disaster");
  }

  promises.shift();
  return promiseAll(promises);
};
*/

const promises1 = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

promiseAll(promises1)
  .then((results) => {
    console.log("All promises resolved:", results); // Expected: [1, 2, 3]
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });

const sample1 = async () => {
  a()
  await b() // syntax sugar for .then()
  c()
}

const sample2 = () => {
  // sample1() === sample2()
  a()
  b().then(() => { 
    c()
  })
}

const makeRequest1 = ({promise1, promise2, promise3}) => {
  return promise1()
    .then(value1 => {
      // do something
      return Promise.all([value1, promise2(value1)])
    })
    .then(([value1, value2]) => {
      // do something          
      return promise3(value1, value2)
    })
}

const makeRequest2 = async ({promise1, promise2, promise3}) => {
  const value1 = await promise1()
  const value2 = await promise2(value1)
  return promise3(value1, value2) // 
}

const test = async () => {
  const ps = {
    promise1: async () => 3, promise2: async (a) => a + 10, promise3: async (a, b) => {
      throw new Error('error')
    }}
  // const r1 = await makeRequest1(ps)
  const r2 = await makeRequest2(ps)
  console.log({ r1, r2 })
}
// test()


const top = async () => {
  await intermediate()
}

const intermediate = async () => {
  try {
    return await l2()
  }
  catch (e) {
    console.log('Error in intermediate')
    console.error(e)
  }
}

const l2 = async () => {
  return await l3()
}

const l3 = async () => {
  throw new Error('error')
}
top()
