const cart = [  
    {name: "Apple", price: 1, quantity: 10},  
    {name: "Banana", price: 3, quantity: 5},  
    {name: "Milk", price: 10, quantity: 2}, 
    {name: "Bread", price: 20, quantity: 1}, 
    {name: "Eggs", price: 1, quantity: 10}, 
    {name: "Tea", price: 25, quantity: 2}, 
]

function calculateTotal(cart) {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    if (total > 100) {
        total *= 0.9; 
    }
    
    return total.toFixed(2);
}

console.log(calculateTotal(cart));