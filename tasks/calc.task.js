// Задача: вычислить результат примера: "2+3" или любого другого.


// Some staff for learn after
function isNumber(elementName) {
    const parsedValue = parseInt(elementName);
    return parsedValue === parsedValue;
}


const taskString = "2+3"; // ["2", "-", "3"]

// Найти элемент над которым производятся действия
// Найти элемент эквивалента/количества действия
// Найти тип действия
// Произвести действие в зависимости от типа

let baseElelement;
let equivalentElement;
let actionType;

for (const elementName of taskString) {
    if (isNumber(elementName)) {
        if (typeof baseElelement === 'undefined') {
            baseElelement = Number(elementName);
        } else {
            equivalentElement = Number(elementName);
        }
    } else {
        actionType = elementName;
    }
}

let result;
switch (actionType) {
    case '+': result = baseElelement + equivalentElement; break;
    case '-': result = baseElelement - equivalentElement; break;
    case '/': result = baseElelement / equivalentElement; break;
    case '*': result = baseElelement * equivalentElement; break;
};
console.log(taskString + '=' + result);