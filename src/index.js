// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
const checkNum = (num) => {
  //if last value of num is 5, return "five"
  // if last value of num is 0, return "zero"
  // if num is even and last value is o, return "even"
  //if num is odd and last value is 5, return "odd"
  if (num % 10 === 5) return "five";
  else if (num % 10 === 0) return "zero";
  else if (num % 2 === 0 || num % 10 === 0) return "even";
  else if (num % 2 !== 0 || num % 10 === 5) return "odd";
  else return "Not applicable";
};

console.log(checkNum(10));
console.log(checkNum(55));
console.log(checkNum(96));
console.log(checkNum(99));
console.log(checkNum(22));
