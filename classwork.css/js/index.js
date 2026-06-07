let marks = 90;
if (marks>=90) {
    console.log("A")
}
else if (marks>=70){
    console.log("B")
}
else{
    console.log("C")
}

let day ="friday";
switch (day) {
    case "sunday":
        console.log("Sunday");
        break;
}
    let day = "Friday";

switch (day) {
    case "sunday":
        console.log("Sunday");
        break;

    case "monday":
        console.log("Monday");
        break;

    case "Friday":
        console.log("Friday");
        break;

    default:
        console.log("Invalid day");
}

let test_day = 3;

switch (test_day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log ("Invalid day");
}

for(let i=0; i<=4; i++){
    console.log(i+1);
}
