const students = [
    {id:21, name:"manna"},
    {id:32, name: "sunny"},
    {id:41, name: "salman-shah"}
];
// let nameP = [];
// for(let i = 0; i < students.length; i++){
//     const std = students[i];
//     let Sname = std.name;
//     nameP.push(Sname)
// }
// console.log(nameP);
// const names = students.map(x => x.name);
// const ids = students.filter(x => x.id > 30);
const studentOne = students.find(x => x.id > 30);
console.log(studentOne);