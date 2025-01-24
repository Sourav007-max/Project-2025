// Data Types: Object, String, Number, Boolean, Null, Undefined
// Objects:
// 1. JSON Objects {Key:values pairs},
// 2. Array Object [el1, el2, el3....]
// 3. Functions

const s1 = {
    Name : 'Sourav',
    Age : 22,
    Fees_paid : 27000.59,
    Work_Experience : {
        ABC : '3 Months',
        XYZ : '10 Months'
    },
    Marks : {
        Maths : 45,
        Science : 60,
    },
    Percentage: ['Sem-I: 84', 'Sem-II: 86', 'Sem-III: 88'],
    Performance: () => console.log('Good'),
}
console.log(s1, typeof s1);
console.log(s1.Name, s1.Age, s1.Work_Experience);

console.log("Marks of Science:", s1.Marks.Science);

console.log(s1.Percentage);