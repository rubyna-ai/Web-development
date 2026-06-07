// let i = 0;
//while (i<5){
// // console.log(i);
// // i++;
//}

//array = ["apple", "banana", "mango", "orange"]

let greet = (name, callback) => {
    console.log(callback, "callbackcallback");
    console.log(name,"namenamename")
    console.log("Hello" + name);
    callback();
};

let afterGreet = () => {
    console.log("have a nice day");
}

greet("Rubina", afterGreet);

//call back function
function processNumber(number, callback) {
  callback(number);
}
function printSquare(number) {
  console.log(number * number);
}
processNumber(5, printSquare); 
processNumber(9, printSquare);  