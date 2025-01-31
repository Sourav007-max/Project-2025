// 1. Arguments objects cannot used with arrow function:
// 2. Arguments objects cannot used with filter, map, reduce, forEach:
const add =() => {
    let res = 1;
    for (let i = 0; i < arguments.length; i++) {
        res = res + arguments[i];
    }
    console.log(res);
}

add();
add(10,20);
add(10,20,30);