arr1 = [
    {
        name: "Landon",
        age: 23
    },
    {
        name: 'Pamela',
        age: 31
    }
]

arr2 = [
    {
        name: "Michael",
        age: 26
    },
    {
        name: 'Jeff',
        age: 41
    }
]

arr3 = [19, 5, 90]

function multiply (array) {
    var sum = 1;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
