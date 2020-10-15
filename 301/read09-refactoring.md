# Refactoring JavaScript for Performance and Readability
* Refactoring is cleaning up code after multiple iterations. It makes code readable.
* Handling errors is a basic step in refactoring.
* Return early. If possible to check for error first, do that and return if error. Rather than doing all computations and then checking for error.
* When code is complex, use temporary variables with good names to make it easily readable.

# Concepts of Functional Programming in Javascript
* Filter: It lets us filter out what we need. Example, given an array of numbers, we can filter out only even numbers by applying an "check if even number" filter to the array.
`const even = n => n % 2 == 0;
const listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
listOfNumbers.filter(even); // [0, 2, 4, 6, 8, 10]`

* Map: It lets us convert the form. Example, given an array of positive and negative numbers, we can convert them all into positive by applying an "absolute" map to the array.
`let values = [1, 2, 3, -4, 5];

const updateListMap = (values) => values.map(Math.abs);

updateListMap(values); // [1, 2, 3, 4, 5]`

* Reduce: It lets us combine all the inputs. Example, given an array of numbers, we can find the sum by applying a "sum" reduce function to the array.
`let shoppingCart = [
  { productTitle: "Product 1", amount: 10 },
  { productTitle: "Product 2", amount: 30 },
  { productTitle: "Product 3", amount: 20 },
  { productTitle: "Product 4", amount: 60 }
];

const sumAmount = (currentTotalAmount, order) => currentTotalAmount + order.amount;

const getTotalAmount = (shoppingCart) => shoppingCart.reduce(sumAmount, 0);

getTotalAmount(shoppingCart); // 120`
* We can compose these functions together and mix and match them to achieve different results. Example, given a shopping receipt, we can filter out books (filter), identify their prices (map) and sum them (reduce).
`let shoppingCart = [
  { productTitle: "Functional Programming", type: "books", amount: 10 },
  { productTitle: "Kindle", type: "eletronics", amount: 30 },
  { productTitle: "Shoes", type: "fashion", amount: 20 },
  { productTitle: "Clean Code", type: "books", amount: 60 }
]

const byBooks = (order) => order.type == "books";
const getAmount = (order) => order.amount;
const sumAmount = (acc, amount) => acc + amount;

function getTotalAmount(shoppingCart) {
  return shoppingCart
    .filter(byBooks)
    .map(getAmount)
    .reduce(sumAmount, 0);
}

getTotalAmount(shoppingCart); // 70`