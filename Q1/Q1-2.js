const inputArray =      
                [
                        {amount: 10000, quantity: 10},
                        {amount: 30000, quantity: 20},
                        {amount: 20000, quantity: 30},
                        {amount: 50000, quantity: 40},
                        {amount: 90000, quantity: 50},
                        {amount: 70000, quantity: 60},
                        {amount: 60000, quantity: 70},
                        {amount: 80000, quantity: 80},
                        {amount: 40000, quantity: 90},
                ];
document.getElementById('initial_array').innerHTML = JSON.stringify(inputArray,null,4)

const sortedArray = orderByTotal(inputArray);
console.log(sortedArray);
document.getElementById('sorted_array').innerHTML = JSON.stringify(sortedArray,null,4)

function orderByTotal(inputArray){
        let newArray = [];
        inputArray.forEach(element => {
                 var newElement = 
                        {
                                amount : element.amount, 
                                quantity : element.quantity, 
                                total : element.amount * element.quantity
                        };
                 newArray.push(newElement);
        });
        newArray.sort((a, b) => a.total - b.total);
        return newArray;
}
