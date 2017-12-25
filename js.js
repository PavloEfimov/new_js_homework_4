// задача 1
let arr = [];

function addKeyboardLayout(alphabet) {

    let arr1 = arr2 = arr3 = '';
    let x = Math.floor(alphabet.length / 3)
    for (var i = 0; i < x; i++) {
        arr1 += alphabet[i];
    }
    for (var i = x; i < 2 * x; i++) {
        arr2 += alphabet[i];
    }
    for (var i = 2 * x; i < alphabet.length; i++) {
        arr3 += alphabet[i];
    }
    arr.push(arr1, arr2, arr3);

    console.log('arr1', arr1);
    console.log('arr2', arr2);
    console.log('arr3', arr3);
    console.log('arr_main', arr);
}


addKeyboardLayout(prompt('введите массив', ''));


// задача 2

function getRandCharInRow(row) {


    let index = Math.floor(Math.random() * arr[row].length);
    console.log('случайная буква из строки', arr[row][index]);
}

getRandCharInRow(+prompt('введите номер строки,начиная от 0', ''));

// задача 3

function getRandCharInAlph() {

    let row1 = Math.floor(Math.random() * 3);
    let index = Math.floor(Math.random() * arr[row1].length);
    console.log('случайная буква из всего алфавита', arr[row1][index]);

}

getRandCharInAlph();