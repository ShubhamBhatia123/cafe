//-------------------------------------------------//
//loops//
// let i = 1;
// while(i<= 1000) {
//     console.log("Shubham Bhatia");
//     i++;
// }

//do while loop//-------------------------------------/

// let i = 1;

// do{
//     console.log("Apna College");
// } while (i <= 10);

//for-of loop//-----------------------------------------/

// let str = "Bhatia Shubh";

// let length = 0;
// for(let i of str) {
//     console.log("i = ", i);
//     length++;
// }

// console.log("string length = ", length);

// for(let count=1; count<= 10; count++){
//   console.log("Shubham Bhatia");
// };

// let num = prompt("Enter a Number");

// if(num % 3 === 0){
//     console.log(num," is a multiple of 3");
// } else {
//     console.log(num,"is Not a multiple of 3");
// }

// let mode = "dark";
// let color;

// if (mode === 'dark') {
//     color = "darkgreen";
// } else if (mode === 'light') {
//     color = "pink";
// } else if (mode === 'gray') {
//     color = "yellow";
// } else {
//     color = "white";
// }

// console.log(color);

// let a = 5;
// let c = 3;

// console.log("a + c = ", a + c);
// console.log("a - c = ", a - c);
// console.log("a * c = ", a * c);
// console.log("a / c = ", a / c);
// console.log("a % c = ", a % c);
// console.log("a ** c = ", a ** c);
//
// console.log("++a =",++a,);
// console.log("a=",a);

// console.log("a-- =",a--,);
//
// console.log("--a =",--a,);

// let a = 8;
// let b = 10;

// a += 4; // a = a + 4
// console.log("a =", a);

// a += 5; // a = a + 5
// console.log("a =", a);

// let a = 6;
// a **= 6;
// a = a ** 6
// console.log("a =", a);

// for our comparison operators;-----------//

// console.log("a === b", a === b);

//  console.log("a !== b", a !== b);

// console.log("b >= a", b >= a);

// logical operators

//  a = 5;
//  b = 8;

// let cond1 = a > b;
// let cond2 = b === 8;

// console.log("cond2 is", cond2);

// a = 8
// b = 5

// let cond1 = a === 10;
// let cond2 = a > b;
// console.log("cond1 || cond2", cond1 || cond2);

// a = 5
// c = 8

// console.log("!(8<5)", !(a<c));

// Conditional statement-------------------------//

// let age = 12;

// let result = age >= 18 ? "adult" : "not adult";

// console.log(result);

// let score = 89;
// let grade = '';

// if (score >= 90 && score <= 100) {
//     grade = "A+";
// } else if (score >= 70 && score <= 89) {
//     grade = "B";
// } else if (score >= 60 && score <= 69) {
//     grade = "C";
// } else if (score >= 50 && score <= 59) {
//     grade = "D";
// } else if(score >= 0 && score <= 49) {
//     grade = "F";
// }

// console.log("According to Your Score , Your Grade was : ",grade);

// if else //

// let age = 20;
// let Gender = 'girl';

// if (age <= 9){
//     console.Log("YOU are a Child");
// } else if (age <= 18 && age >= 10){
//     console.log("YOU CANNOT APPLY");
//     if(Gender === "boy"){
//         console.log("Gender",'Boy');
//     } else{
//         console.log("Gender", 'Third party')
//     }
// } else if (age > 18 && age < 30){
//     console.log("YOU ARE ELLIGIBLE AND CAN APPLY");
//     if (Gender === "girl") {
//         console.log("Gender",'Girl');
//     }
// } else {
//     console.log("YOU CANNOT APPLY");
// };

// leader if else---------------------------//

// let marks=85;

// if(marks >= 80 && marks <= 100)
//     console.log('GRADE A+');
// else if(marks >= 70 && marks <= 80)
//     console.log('GRADE B');
// else if (marks >= 60 && marks <= 70)
//     console.log('GRADE C');
// else
//     console.log('GRADE D');

// create an object-------------------------//

// let person = {
//     FirstName : "Shubham",
//     LastName : "Bhatia",
//     Age : 24,
//     Eyecolor : "black",
// };

// let score = 40;
// let grade = '';

// if (score >= 90 && score <= 100){
//     console.log('Grade A');
// } else if (score >= 80 && score <= 89){
//     console.log('Grade B');
// } else if (score >= 70 && score <= 79){
//     console.log('Grade C');
// } else if (score >= 60 && score <= 69){
//     console.log('Grade D');
// } else if (score >= 0 && score <= 59){
//     console.log('Grade F');
// } else
//     console.log('Grade E');

//----------------------prompt---------------//

// let num = prompt("Enter a Number");

// if(num % 2 === 0){
//     console.log(num," This is a even");
// } else {
//     console.log(num,"This is Not even");
// };

//-------------------------------------------//

//  discount = (bill * discount / 100)
// TotalAmount = total - discount

// let price = function () {
//     let a = 100(document.write("10%").value);
//     let b = 200(document.write("5%").value) / 100;
//     let TotalAmount = a - (a * b)
//     document.write("").value = TotalAmount.
// }

// const amount = 160

// console.log(totalAmountWithDiscount(amount, 20))

//------------------------------------------------------//

// This is a way how to find a percentages----------------------------//

// let listingprice = 100;
// let sellingprice = 150;

// let discountpercent = ((listingprice - sellingprice) / listingprice) * 100;

// function totalAmountWithDiscount (amount, discount){
//     if (!discount) return amount
//     return (amount - ((amount / 100) * discount))
// }

// console.log(totalAmountWithDiscount(1000, 20))

//------------------------------------------------------------------//

// function myfunction(msg, n) {
//    // parameter -> input
//     console.log(msg * n);

// }

// myfunction("store of Fruits", 100);

// function -> 2 numbers, sub

// functions of calculator working type----------//

// function sub(x, y) {
//     console.log(x-y);
// }

// function sum(d,e){
//    console.log(d+e);
// }

// function multi(a,b){
//   console.log(a+b);
// }

// function divd(a,b){
//   console.log(a/b);
// }

// function remindr(a,b){
//   console.log(a%b);
// }

//-----------------------------------------------//

// function sum (a, b){
//   s = a + b;
//     console.log("before return")
//     return s;
// }

// let value = sum (2055, 89);
//  console.log(value);

// // Modren function------------------------------------------//

// const arrowsum = (d,e) => {
//     console.log(d + e);
// };

//------------------------------------------------------------//

// const arrowmulti = (a,b) => {
//    console.log(a * b);
// };

//  function countVowels(str) {
//     let count = 0;
//     for (const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//         {
//             count++;
//         }
//     }
//     return count;
// }
// console.log("countVowels", countVowels('Bhatia Sahib'));

//-------------------------------------------------------------------------//

// const countvow = (str) => {
//     let count = 0;
//         for (const char of str){
//             if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//             {
//                 count++;
//             }
//         }
//         return count;
// }
// console.log("countvow", countvow("Bhatia Sahab"));

//foreach loop in arrays-----------------------------------------------------//

//arr.foreach(callBackfunction)----------------------------------------------//

// let arr = [15,100,39,85,96,61];
// arr.forEach(function printval1(val1){
//     console.log(val1 * val1);
// });
// console.log("Loop has ended");

//foreach  with  arrow// and aslo called higher order functions------------//

// let arr = ["India","New York","America","Canada"];
//   arr.forEach((val,idx,arr) => {
//     console.log(val,idx,arr);
//   });

//--------------------------------------------------------------------------//

// let arr = ["950","Vijay","Rajesh","Shubham","Jatin","Pragati"];

// arr.forEach((val2,arr,idx) => {
//     console.log(val2.toLocaleUpperCase(),arr,idx);
// });

//-------------------------------------------------------------------------//

// const arr = ["India", "pakistan", "America", "kajakistan","Ajarbhaijaan","Har,Har,Mahadev Ji"];

// arr.forEach((val,idx) => {
//   console.log(val,idx);
// });

//forEach loop used in for squaring of nums--------------------------------//

// let nums = [50,4,6,8,950];

// nums.forEach((nums) => {
//     console.log(nums + 9);
// });

//2nd way of finding squaring with forEach---------------------------------//

// let numbers = [200,145,162,182,190];

// let calcSquare = (numbers) => {
//     console.log(numbers * 20);
// };
// numbers.forEach(calcSquare);

//--------------------------------------------------------------------------//

// let nums = [2,4,6,8,10];

// // let newArr = nums.map((val) => {
// //     return val * 10;
// // });
// //  console.log(newArr);

// let calcSquare = (num) => {
//     console.log(num * num);
// };

// nums.forEach(calcSquare);

//----------- This is a system of array.filter ---------------------//

// let arr = [8,9,15,41,97,45,88,71];

// let evenArr = arr.filter((val) => {
//     return val % 2 !== 0;
// });
//  console.log(evenArr);

//------------------------reduce method-----------------------------//

// let arr = [32,64,128,256,512,1000,2000,1500];

// let output = arr.reduce((res,curr) => {
//     return res * curr;
// });
// console.log(output);

//----------------------------reduce method--------------------------//

// let arr = [2,6,103,408,500,60,145,800];

// let output = arr.reduce((prev,curr) => {
//     return  prev + curr;
// });
// console.log(output);

// arrays-----------------------------------//

// => map method
// => forEach method
// => find method
// => filter method
// => reduce method
// sort method

// new Set() method

// objects--------------------------------------//
// convert object to Array-----------------------//

// let marks = [5,6,90,85,120,340];

// let lowers = marks.filter((val) => {
//     return val <= 90;
// });
// console.log(lowers);

//find method-------------------------------------------------//

// let result = num.find(function (item) {
//     return item>145;
// });

// console.log(result);

//---------------------------------------------------------//

// const students = [
//     {
//         id: 1,
//         name: "John Doe",
//         age: 20,
//         grade: "A",
//         subjects: ["Math", "Science", "English"],
//         address: {
//             street: "123 Main St",
//             city: "Anytown",
//             country: "USA"
//         }
//     },
//     {
//         id: 2,
//         name: "Jane Smith",
//         age: 19,
//         grade: "B",
//         subjects: ["History", "Geography", "French"],
//         address: {
//             street: "456 Elm St",
//             city: "Othertown",
//             country: "USA"
//         }
//     },
//     {
//         id: 3,
//         name: "Alice Johnson",
//         age: 21,
//         grade: "C",
//         subjects: ["Physics", "Chemistry", "Biology"],
//         address: {
//             street: "789 Oak St",
//             city: "Somewhere",
//             country: "USA"
//         }
//     }
// ];

// // let result = students.find((num)=>num.name === "Jane Smith")

// const dummyData = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: {
//       street: "Douglas Extension",
//       suite: "Suite 847",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//       geo: {
//         lat: "-68.6102",
//         lng: "-47.0653",
//       },
//     },
//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//     company: {
//       name: "Romaguera-Jacobson",
//       catchPhrase: "Face to face bifurcated interface",
//       bs: "e-enable strategic applications",
//     },
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//       street: "Hoeger Mall",
//       suite: "Apt. 692",
//       city: "South Elvis",
//       zipcode: "53919-4257",
//       geo: {
//         lat: "29.4572",
//         lng: "-164.2990",
//       },
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//       catchPhrase: "Multi-tiered zero tolerance productivity",
//       bs: "transition cutting-edge web services",
//     },
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     address: {
//       street: "Norberto Crossing",
//       suite: "Suite 351",
//       city: "Roscoeview",
//       zipcode: "33263",
//       geo: {
//         lat: "-31.8129",
//         lng: "62.5342",
//       },
//     },
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//       name: "Keebler LLC",
//       catchPhrase: "User-centric fault-tolerant solution",
//       bs: "revolutionize end-to-end systems",
//     },
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     address: {
//       street: "Norberto Crossing",
//       suite: "Apt. 950",
//       city: "South Christy",
//       zipcode: "23505-1337",
//       geo: {
//         lat: "-71.4197",
//         lng: "71.7478",
//       },
//     },
//     phone: "1-477-935-8478 x6430",
//     website: "ola.org",
//     company: {
//       name: "Considine-Lockman",
//       catchPhrase: "Synchronised bottom-line interface",
//       bs: "e-enable innovative applications",
//     },
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
//     address: {
//       street: "Rex Trail",
//       suite: "Suite 280",
//       city: "Howemouth",
//       zipcode: "58804-1099",
//       geo: {
//         lat: "24.8918",
//         lng: "21.8984",
//       },
//     },
//     phone: "210.067.6132",
//     website: "elvis.io",
//     company: {
//       name: "Johns Group",
//       catchPhrase: "Configurable multimedia task-force",
//       bs: "generate enterprise e-tailers",
//     },
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
//     address: {
//       street: "Ellsworth Summit",
//       suite: "Suite 729",
//       city: "Aliyaview",
//       zipcode: "451 69",
//       geo: {
//         lat: "-14.3990",
//         lng: "-120.7677",
//       },
//     },
//     phone: "586.493.6943 x140",
//     website: "jacynthe.com",
//     company: {
//       name: "Abernathy Group",
//       catchPhrase: "Implemented secondary concept",
//       bs: "e-enable extensible e-tailers",
//     },
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
//     address: {
//       street: "Dayna Park",
//       suite: "Suite 449",
//       city: "Bartholomebury",
//       zipcode: "76495-3109",
//       geo: {
//         lat: "24.6463",
//         lng: "-168.8889",
//       },
//     },
//     phone: "(775)976-6794 x41206",
//     website: "conrad.com",
//     company: {
//       name: "Yost and Sons",
//       catchPhrase: "Switchable contextually-based project",
//       bs: "aggregate real-time technologies",
//     },
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque", //
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz", //
//     address: {
//       street: "Kattie Turnpike", //
//       suite: "Suite 198",
//       city: "Lebsackbury", //
//       zipcode: "31428-2261", //
//       geo: {
//         lat: "-38.2386", //
//         lng: "57.2232", //
//       },
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models",
//     },
//   },
// ];

//  userIds = dummyData.filter((data) => {
//   return data.address.geo.lat >= 20;
// })
// console.log(userIds);

//--------------------------------------------------//

//This is a way how can we change anything inside the object with the help of map and using spread method//

// const information = dummyData.map( (item) => {
//     if(item.id === 5){
//         return  {
//           ...item,
//           id: 48,
//           name: "Shubham Bhatia",
//           username:"korean guy",
//         }
//     }
//     return item;
//     });

// console.log(information);

//---------include method----------------------------------------------//

// const employeeName = ["Mrs. Dennis Schulist","Leanne Graham"]

// const greatresult = (name,list) => {
//     return list.filter((info) => name.includes(info.name))
// }

// console.log("list", greatresult(employeeName,dummyData));

//-----------------------------------------------------------------------//

// let usernames = dummyData.map((data) => {
//    return{ name: data.name,
//     usernames: data.username,
//     address: {
//     street:data.address.street,
//     city:data.address.city,
//     zipcode:data.address.zipcode
// },
//     geo: {
//     lat: data.address.geo.lat,
//     lng: data.address.geo.lng,}

//     }
// });
//   console.log(usernames);

//------------------------------------------------------------//

// const result = {
//     id: data.id,
//     name: data.name,
//     username: data.username,
//     email: data.email,
//     address: data.address.street,
//     city: data.address.city,
//     zipcode: data.address.zipcode,
//     geo: data.address.geo,
// };

// console.log(Object.keys(data));

//----------------------------------------------//

// const data =dummyData[7];
// const result = {
//     id: data.id,
//     name: data.name,
//     username: data.username,
//     email: data.email,
//     address: data.address.street,
//     city: data.address.city,
//     zipcode: data.address.zipcode,
//     geo: data.address.geo,
// };

// console.log(result);

//---------------------------------------------------//

// console.log(dummyData[2]);
// console.log(dummyData[5]);

// const dummyData1 = dummyData.filter ((data) => data.id === 3 || data.id === 6);

// console.log(dummyData1);

//-------------------------------------------------//

// const array1 =[]
// const information = dummyData.map((item) => {
//     if(item.id === 6,8){
//         array1.push(item);
//     }
//     });

// console.log("list",array1);

//---------------------------------------------------//

// const id = [1,8]

// const result = (id,dummyData) => {
//     return dummyData.filter((item) => id.includes(item.id))
// };

// console.log(result(id,dummyData));

//------------------------------------------------------//

// const languages = {
//     js : 'Javascript',
//     CPP : 'C++',
//     rb : 'Rubby',
//     swift : "Swift by apple",
// }

// for (const key in languages) {
//     // console.log(languages[key]);
//  console.log(`${key} shortcut is for ${languages[key]}`)
// }

// const programming = ['js','python','google','Department']

// for (const key in programming) {
//     console.log(programming);
// };

//-----------------------------------------------//

// const id = [5,8,10]

// const idresult = (id,dummyData) => {
//        return dummyData.filter((list) => id.includes(list.id))
// }

// console.log(idresult(id,dummyData));

//------------------------------------------------//

// const studentsid = [4,8]

// const newArr = dummyData.map((item) =>
// {if(studentsid.includes(item.id)){
//     return item
// }})

// console.log(newArr.filter(item=>item));

//----------------------------------------------------//

// let arr = [5,5,5,5,5,55]

// let multi = arr.reduce ((accum,curr)=> {
//     return accum * curr + 1500;
// });

// console.log(multi);

//----------------------------------------------------------//

// const id = [4,5,9,10]

// const result = (id,dummyData1) => {
//       return dummyData1.filter ((item) => id.includes(item.id))

// };

// console.log(result(id,dummyData))

//----------------------------------------------------------//

// const id = [2,4,6]

// const newArr = dummyData.map((list) =>
// {if (id.includes(list.id)){
//         return list;
// }});

// console.log(newArr.filter(list=>list));

//-----------------------------------------------------------//

// const dummyArray = [
//     {
//       id: 1,
//       ticketName: "General Admission",
//       price: 20,
//       currency: "USD",
//       description: "Access to the event for one person."
//     },
//     {
//       id: 2,
//       ticketName: "VIP Pass",
//       price: 50,
//       currency: "USD",
//       description: "Exclusive access to VIP areas and amenities."
//     },
//     {
//       id: 3,
//       ticketName: "Family Package",
//       price: 100,
//       currency: "USD",
//       description: "Admission for two adults and two children."
//     },

//   ];

//   const newObject =    {
//     id: 4,
//     ticketName: "Student Discount",
//     price: 15,
//     currency: "USD",
//     description: "Special discounted rate for students with valid ID."
//   }

//spread oopreator--------------------------------------------//

// const newUsers =[
//     ...dummyArray,
//     newObject,
// ];

// console.log(newUsers);

//Rest oopreator--------------------------------------------//

// function sum(num1,num2,...numbers){
//      console.log(numbers);
//      for (let sum of numbers){
//         return numbers;
//      }
// }

// console.log(sum(8,9,101,15))

// const names = ["General Admission", "VIP Pass", "Family Package"]

// const newArr = dummyArray.map((list) =>
// {if(names.includes(list.dummyArray)){
//     return names;
// }})

// console.log(dummyArray)

//---------------------task of Manoj sir --------------------------------//

// let purchasedItemAmount = 250;
// let isVIPMember = ""

// if(purchasedItemAmount >= 100 && isVIPMember === 'vip') {
//   console.log("You are eligible for a 10% discount.");
// } else if(purchasedItemAmount >= 200 && isVIPMember === 'nonvip'){
//   console.log("You are eligible for a 5% discount.");
// } else
// console.log("You are not eligible for any discount.");

//--------------------Misssion passed------------------------------------//

//---------------------------------------------------------//

// let purchaseditemamount = 500;
// let user = 'vip';

// if(purchaseditemamount>=100 && user === 'vip'){
//   console.log("you are eligible for 10% discount");
// }else if(purchaseditemamount>=200 && user === 'nonvip'){
//   console.log("you are eligible for 5% discount");
// } else
//   console.log("you are not eligible for any discount");

//------------------------------------------------------------//

// let isVIPMember = true
// let totalPurchaseAmount= 120

// let discountPercentage = 0;

// if (isVIPMember && totalPurchaseAmount >= 100) {
//     discountPercentage = 10;
// } else if (!isVIPMember && totalPurchaseAmount >= 200) {
//     discountPercentage = 5;
// }

// if (discountPercentage > 0) {
//     console.log(`You are eligible for a ${discountPercentage}% discount.`);
// } else {
//     console.log("You are not eligible for any discount.");
// }

//-------------------------------------------------------------//

// const cuisines = [
//   "Italian",
//   "Mexican",
//   "Chinese",
//   "Indian",
//   "Japanese",
//   "French",
//   "Thai",
//   "Greek",
//   "Italian",
//   "Mexican",
//   "Indian",
//   "Italian",
// ];

// let newUniquearr = [...new Set(cuisines)]

// console.log(newUniquearr);

// function removeDuplicates(cuisines,list){
//     return list.filter((cuisines.list) = array.Indexof(list.cuisines)=== Index);
// }

// console.log(removeDuplicates(cuisines.list));

// const arr1 = [
//   "Italian",
//   "Mexican",
//   "Chinese",
//   "Indian",
//   "Japanese",
//   "French",
//   "Thai",
//   "Greek",
//   "Italian",
//   "Mexican",
//   "Indian",
//   "Italian",
// ];

//---------------ARRAY------------------------//

// function removeRepeatItems(array){
// let newArr = []

// for (let index= 0; index<array.length; index++){
//    if(!newArr.includes(array[index])){
//     newArr.push(array[index]);
//    }
//   }
//   return newArr;
// }
// const newArr = removeRepeatItems(cuisines)
// console.log(newArr);

//----------------ARRAY--------------------------//

// function removeArrDuplicates(array){
//     const uniqueArr = [];

//     for (let i = 0; i < array.length; i++){
//       if (uniqueArr.indexOf(array[i]) === -1){
//         uniqueArr.push(array[i]);
//       }
//     }
//     return uniqueArr;
//   }
// const uniqueArr = removeArrDuplicates(cuisines)
// console.log(uniqueArr);

//--------------------ARRAY-----------------------//

// function removeArrDuplicates(array) {
//     const uniqueArr= []

//     for (let i = 0; i < array.length; i++) {
//       if(!uniqueArr.includes(array[i])) {
//         uniqueArr.push(array[i]);
//       }
//     }
//     return uniqueArr;
//   }
//   const uniqueArr = removeArrDuplicates(arr1)

//   console.log(uniqueArr);

//===================ARRAY=========================//

//   function removeDuplicates(arr) {
//     return arr.filter((item,index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(arr1));

//----------------------pop----------------------//

// const sample = [1,2,3,950,5]

// const test = sample.pop()
// console.log(sample);

//----------------remove end of the elements----//

//---------------------push------------------//

// const sampleex = ['f','c','u']

// const exp = sampleex.push('k')
// document.write(sampleex);

//--------------addd end of the elements-----//
//-------------shift-----------------//

// const Numerical = ['1','5','10','22']

// const exampler = Numerical.shift()
// console.log(Numerical);

//-----------remove first element--------------------//

//----------------un shift ----------------------//

// const GoodExamples = ['c','U','K']

// const sample = GoodExamples.unshift('F')
// console.log(GoodExamples);

//---------------add front element in the array--------//

//----------------split----------------//

// const sampleGreek = "SUPPORT";

// const result = sampleGreek.split("")
// console.log(result);

// let studentName = "split"

// const data = studentName.split("")
// console.log(data);

//--------------------------------------//

//------------slice method-------------//

// const FabulousAns = ['Banana','Apple','Orange','Mango']

//  result = FabulousAns.slice(1,4)
// console.log(result);

//------------removve first and print other element----------------//

//--------------splice------------------//

//-------Here 2 program powered by Bhatia G----//

// const nums = ['8','9','7','6','5']

//  result = nums.splice(0,2)
// console.log(nums);

// let names = ["shubham","rajesh","jatin","vijay","pragati","jatin"]

//  result = names.splice(1,3)
// console.log(names);

//----1 means starting point and 3 means no of elements for removing------//

// let StudentName = 'Sahilkumar';

// const result = StudentName.split('')
// console.log(result);

//-------------------------------sort method-------------------------//

// let a = ["Remove","harman","omange","Daman","Shubham"]

// let result = a.sort()
// console.log(result);

//---------this help for making the order of alphabetical--------------//

//--------------reverse-------------//

// let B = ["Remove","harman","orange","Daman","Shubham"]
// let natija = B.reverse()
// console.log(natija);

//---------this helps for making start for print to back side in the array------------//

//------------concat method----------//

// let a = ["sanjay","aman","rehman"]
// let b = ["rahul","karan"]
// let c = a.concat(b)
// console.log(c);

//-----------spread method----------//

// let arr1 = ["Sanjay","Aman","Rehman"]
// let arr2 = ["Rahul","Karan","Shubham"]
// let arr3 = [...arr1,...arr2]
// document.write(arr3);

//--this is a main pattern for making remove reputations --//

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [3, 4, 5, 7];
// let arr = [...arr1, ...arr2];
// let mergedArr = [...new Set(arr)]
// console.log(mergedArr);

//-----------------------------------//

//----------join----method--------//

// let a = ["Sanjay", "Aman", "Rehman"]

// let result = a.join("$"+"<br>");
// document.write(result);

// let myShopping = new Array("Milk", "Eggs", "Cereal", "Banana", "Tomatoes");
// let myShoppingList = myShopping.join("<br/>");
// document.write("My shopping list:", "<br>");
// document.write(myShoppingList);

//-------------making calculator----------//

// const calculator = (num1,operator,num2) => {
//   if(operator === '+'){
//     return num1 + num2;
//   }else if (operator === '-'){
//     return num1 - num2;
//   }else if (operator === '*'){
//     return num1 * num2;
//   } else if(operator === '/'){
//     return num1 / num2;
//   }  else
//     return "undefined operator";
// }
// console.log(1825*990);

//------------------------------------------------//
// setTimeout
// setInterval
// clearTimeout
// clearInterval
//------------------fetch apis---------------------------//
// let list;
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     // console.log(data);json format //
//     return data.json(); //converted to object
//   })
//   .then((objectData) => {
//     console.log(objectData[0]);
//     list = objectData;
//     DOMTable(list);
//   }); 

// const tableEl = document.querySelector("table");

// const DOMTable = (list) => {
//   console.log("");
//   let tabledata = "";
//   list.map((values) => {
//     tabledata += `<tr id="dlete" id="usrname">
//     <td id="name" name='${values.name}'>${values.name}</td>
//     <td>${values.username}</td>
//     <td>${values.email}</td>
//     <td>${values.address.city}</td>
//     <td><button onclick="dleteBtn('${values.name}')" style="background-color: black;
//     color: white;
//     width: 45%; border-radius: 20px;">Delete</button>
//     <button onclick="Edit('${values.name}')" style="background-color: red; color: white; border-radius: 20px; width:80px;
//     height:1.8rem; margin-top:1.5px;" class="Edit">Edit</button>
//    </tr>`;
//   });
//   document.getElementById("table-body").innerHTML = tabledata;
// };


// const dleteBtn = (name) => {
//   const data = list.filter((item) => item.name !== name);
//   list = data;
//   DOMTable(list);
//   console.log("data", data);
// };

// function saveTable() {
//   const name = document.getElementById("unique-name").value;
//   const username = document.getElementById("usrname").value;
//   const email = document.getElementById("emailId").value;
//   const address = document.getElementById("approprite-address").value;
//   if(!name || !username || !email || !address){
//     alert('Please, Fill the Information')
//   }
//   else{
//     const newList = { name, username, email, address: { city: address } };
//     const updatedList = [...list, newList];
//     list = updatedList;
//     DOMTable(list);
//     ResetForm();
//   }
// };

// function addTable() {
//   const name = document.getElementById("unique-name").value;
//   const username = document.getElementById("usrname").value;
//   const email = document.getElementById("emailId").value;
//   const address = document.getElementById("approprite-address").value;
//   if(!name || !username || !email || !address){
//     alert('Information is required')
//   }
//   else{
//     const newList = { name, username, email, address: { city: address } };
//     const updatedList = [...list, newList];
//     list = updatedList;
//     DOMTable(list);
//     ResetForm();
//   }
// };

// function fun() {
//   document.getElementById("myForm").reset();
// };

// function ResetForm() {
//   document.getElementById("myForm").reset();
// };

// const Edit = (id)=> {
//     const data = list.find((item) => item.name === id);
//     const name = document.getElementById("unique-name").value = data.name;
//     const username = document.getElementById("usrname").value = data.username
//     const email = document.getElementById("emailId").value = data.email
//     const address = document.getElementById("approprite-address").value = data.address.city;
// };

// function validate (){
//   isValid = true;
//   if(document.getElementById("name").value == ""){
//     isValid = false;
//     document.getElementById("nameValidationError").classList.remove("hide");
//   }else {
//     if(!document.getElementById("nameValidationError").classList.contains("hide"))
//       document.getElementById("nameValidationError").classList.add("hide")
//   }
//   return isValid;
// };

// const information = tabledata.map( (list) => {
//   if(list.name === 5){
//       return  {
//         ...item,
//         name: "",
//       }
//   }
//   return item;
//   });

// console.log(information);


// function Reset(){
//   location.reload();
// };

// function runCheck(){
//   let data = document.getElementById("unique-name").value;
//   let data1 = document.getElementById("usrname").value;
//   let data2 = document.getElementById("emailId").value;
//   let data3 = document.getElementById("approprite-address").value;
//   if(data,data1,data2,data3 == ""){
//     alert("Input is Empty");
//   }else{
//     alert("Input is not Empty, "+data);
//   }
// };


// function onDleteRow(e) {
//   const text = e.target.innerText
//   console.log("text",text)
//   if (!e.target("dleteBtn")) {
//     return;
//   }
//   const btn = e.target;
//   btn.remove("td");
// }

// tableEl.addEventListener("click", onDleteRow);

// function remove(){
// const  element = document.getElementById("dlete");
//  element.remove()
// };

//-----------------------------------------------------//

// const getFacts = async () => {
//   console.log("getting data .....");
//   let response = await fetch(URLData);
//   let jsonResponse = await response.json();
//   console.log(jsonResponse);
// };

// getFacts();

// const getFacts = async () => {
//   let response = await fetch(URLData);
//   console.log(response);//JSON FORMAT
//   let data = await response.json();
//  console.log(data);
// };
// getFacts();

// const ticket = new Promise(function (resolve, reject) {
//   const isBoarded = true;
//   if(isBoarded){
//     resolve('you are not in the flight')
//   } else {
//     reject('your flight has been cancelled')
//   }
// });

// ticket
// .then((data) => {
//   console.log('Great',data);
// })
// .catch((data) => {
//   console.log('oh No',data);
// })
// .finally( () => {
//   console.log("I WILL ALWAYS BE EXECUTED");
// });

// function getCheese () {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       const cheese = '🧀';
//      resolve (cheese);
//     },5000)

//   })
// }
// function makeDough (cheese) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       const Dough = cheese +'🫓';
//       resolve (Dough);
//     },4000)

//   })
// }
// function BakePizza (dough) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       const pizza = dough +'🍕';
//       resolve (pizza);
//     },3000)

//   })
// };

//  // 1000 milisecond = 1s

// getCheese()
// .then((cheese) => {
//   console.log('Here is the cheese',cheese);
//   return makeDough(cheese);
// })
// .then((Dough) => {
//   console.log('Here is the dough',Dough);
//   return BakePizza(Dough);
// })
// .then((pizza) => {
//   console.log('Here is the pizza',pizza);
// })
// .finally(() => {
//   console.log("Proccess ended");
// });

// let id = setTimeout(Anim,5000)
// 1000ms = ('1Second');
// 2000ms = ('2Second');
// 3000ms = ('3Second');
// 4000ms = ('4Second');
// 5000ms = ('5Second');

// function stopanimation(){
//   clearTimeout(id);
// }

// let a = 0;
// setInterval (Anim,1000);

// function Anim (){
//   a = a + 10;
//   let target = console.log();
//   target.style.margin-left = a + 'px';
// }

//------how to work buttons with action--------------//

// function takevalue(e){
//   e.preventDefault();

// let EmailAddress = document.getElementById('email').value;
// console.log(EmailAddress);
// let password = document.getElementById('password').value;
// console.log(password);
// // debugger;
// };

//----------------making ascending ordr and desending ordr---//

// let num = [99,111,55,500,22,191,2]

// num.sort(compareFunction)
// console.log(num);

// function compareFunction (a,b){
//   return a - b;
// };

//  let name =["jhon","deo","amit","sourabh","cat"]

//  let AscendingOrdr = name.sort();
// //  console.log(AscendingOrdr);

// let decendingOrdr = name.reverse();
// console.log(decendingOrdr);

//-------------------------------------------------//

// function takevalue(e){
//   e.preventDefault();

// let EmailAddress = document.getElementById('email').value;
// console.log(EmailAddress);
// let password = document.getElementById('password').value;
// console.log(password);
// // debugger;
// };

//----------------watch----------------------//

// let milli = 0;
// let sec = 0;
// let min = 0;
// let hr = 0;

// let timer = false;

// function Start(){
//   timer = true;
//   myfun();
// }

// function Stop(){
//   timer = false;
//   myfun();
// }
// function Reset(){
//   location.reload();
// }

// function myfun(){
//   if(timer == true){
//     milli = milli + 1;
//     if(milli == 100){
//       sec = sec + 1
//       milli = 0
//     }
//     if(sec == 60){
//       min = min + 1
//       sec = 0
//     }
//     if(min == 60){
//       hr = hr + 1
//       min = 0
//     }
//     if(hr == 60){
//       hr = hr + 1
//     };

//   let getsec = sec;
//   let getmin = min;
//   let gethr = hr;

//   if(milli < 10){
//     getmilli ="0"+milli;
//   }
//   if(sec < 10){
//     getsec = "0"+sec;
//   }
//   if(min < 10){
//     getmin = "0"+min;
//   }
//   if(hr<10){
//     gethr = "0"+hr;
//   }

//   setTimeout("myfun()",10)
//   document.getElementById('milli').innerHTML=milli;
//   document.getElementById('sec').innerHTML=getsec;
//   document.getElementById('min').innerHTML=getmin;
//   document.getElementById('hr').innerHTML=gethr;
//   };
// };

//-------------------------------------------------//







