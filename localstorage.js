const person = {
    name: 'Jabbar',
    age: 24,
    district: 'Tangail',
    salary: '40000'
};
//Now converts object to JSON format
const data = JSON.stringify(person);   //It converts object to string type in JSON format
const dataParse = JSON.parse(data);    //It is parsing the data for output. We can get output before the parsing data
console.log(dataParse.name);   //This is the output after parsing the data


//===Local Storage===
// localStorage.setItem('userId', 1200);   //We can set item using this method. It can only take the value of string type
const userId =  localStorage.getItem('userId'); //We can get item using this method.
console.log(userId);


//another example
localStorage.setItem('Person', JSON.stringify(person)); //It can only take the value of string type. //Thats why, we will convert data in string type using JSON stringify
const storedPerson = localStorage.getItem('Person');//We can get item using this method. 
const parsePerson = JSON.parse(storedPerson);
console.log(parsePerson.age);


//find keys [ Key means object properties]
const keys = Object.keys(parsePerson);
console.log(keys);

//find values [value means object properties values]
const values = Object.values(parsePerson);
console.log(values);