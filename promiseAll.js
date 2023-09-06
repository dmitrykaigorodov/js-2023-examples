const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const total = [];
    let settledPromises = 0;

    if (promises.length === 0) {
      resolve(total);
      return;
    }

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((result) => {
          total[i] = result;
          settledPromises++;

          if (settledPromises === promises.length) {
            resolve(total);
          }
        })
        .catch(() => {
          reject(new Error("Disaster"));
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

  