const data = {
  cs3001: "False",
  cs3002: "False",
  cs3003: "False",
  cs3004: "False",
  cs3005: "False",
  cs3006: "True",
  cs3007: "False",
  cs3008: "False",
  cs3009: "False",
};

const objLent = Object.keys(data).length;

console.log(objLent);

// for(let i =1;i<=objLent;i++){
// console.log(Object.keys(data[o].status));

// }

// console.log(data)
const demo = Object.assign(data);

// const alpha = data.map(
//     console.log(first)
// )
Object.assign()
console.log(
  demo.filter((elem) => {
    if (elem == "True") return elem;
  })
);
