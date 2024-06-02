const dancer = document.getElementById("dancer");
const ballerinaArray = [
  "../Images/ballerina9.png",
  "../Images/ballerina8.png",
  "../Images/ballerina7.png",
  "../Images/ballerina3.png",
  "../Images/ballerina2.png",
  "../Images/ballerina4.png",
  "../Images/ballerina6.png",
  "../Images/ballerina5.png",
  "../Images/ballerina1.png",
  "../Images/ballerina11.png",
];
const bigArray = ballerinaArray
  .concat(ballerinaArray)
  .concat(ballerinaArray)
  .concat(ballerinaArray);

setTimeout(() => {
  printBallerina(bigArray, dancer);
}, 1000);

function printBallerina(array, dancer) {
  array.map((item, index) => {
    setTimeout(() => {
      dancer.src = item;
    }, 1000 * index);
  });
}
