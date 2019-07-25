function typePrint(val) {
    console.log(typeof val);
}
function valuePrint(val) {
    console.log(val);
}

const typesExampleArray = [ // Создаем массив разнотипных значений
    1,
    "Строка",
    true,
    undefined,
    function() {},
    {},
    Symbol(1)
];

for (const tempVal of typesExampleArray) {
    console.log('-------------------------------');
    console.log('VALUE:')
    valuePrint(tempVal);
    console.log('TYPE:')
    typePrint(tempVal);
    console.log('-------------------------------');
}