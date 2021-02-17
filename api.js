//===JSON - JavaScript Object Notation===//
//===Converts object to JSON format. It called JSON===//

//Normal javascript object but its not JSON
const person = {
    name: 'Abdul',
    age: 24
};
console.log(person);

//Now converts object to JSON format
console.log(JSON.stringify(person));
const data = JSON.stringify(person);   //It converts object to string type in JSOn format
const dataParse = JSON.parse(data);    //It is parsing the data for output. We can get output before the parsing data
console.log(dataParse.age); //This is the output after parsing the data

