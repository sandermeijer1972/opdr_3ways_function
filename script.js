//manier 1: Function Declarations

function manier1(number11, number12) {
    const kwadraat11 = number11 * number11;
    const kwadraat12 = number12 * number12;
    const optelling1 = kwadraat11 + kwadraat12;
    const uitkomst1 = optelling1 * optelling1;
    return uitkomst1;
}

console.log("op manier 1:");
console.log(manier1(5, 6)); //3721
console.log(manier1(2, 7)); //2809
console.log(manier1(4,10)); //13456



//manier 2: Function Expressions

const manier2 = function (number21, number22) {
    const kwadraat21 = number21 * number21;
    const kwadraat22 = number22 * number22;
    const optelling2 = kwadraat21 + kwadraat22;
    const uitkomst2 = optelling2 * optelling2;
    return uitkomst2;    
};

console.log("op manier 2:");
console.log(manier2(1,1)); //4
console.log(manier2(4,8)); //1600
console.log(manier2(8,11)); //34225



//manier 3: Arrow Functions

const manier3 = (number31, number32) => {
    const uitkomst3 = ((number31 * number31) + (number32 * number32)) * ((number31 * number31) + (number32 * number32));
    return uitkomst3;
};

console.log("op manier 3:");
console.log(manier3(2,2)); //64
console.log(manier3(12, 20)); //295936
console.log(manier3(5,1)); //676

//controle zelfde uitkomsten
console.log("uitkomst met 6 en 3, moet zijn 2025");
console.log(manier1(6,3));
console.log(manier2(6,3));
console.log(manier3(6,3));
console.log("en met 34 en 76 moet het zijn 48052624");
console.log(manier1(34,76));
console.log(manier2(34,76));
console.log(manier3(34,76));

