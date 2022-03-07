// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
   product = products.find((obj => obj.id == id));
  // console.log(product);
   cartList.push(product);
   console.log(cartList);
   //comprovat
    /*if (obj[id] == id){
        let product = {product[id], product[name],  }
        cartList.push()}
  /*  products.forEach(product => {
        if(products.id === buy(id)){
            console.log(id);
            let product = products.filter(products.id, products.name, products.price, products.type);
        cartList.push(product); }  })
console.log(cartList);
    /*cartList.push([{id, name, price, type}]);*/
  /*  if(id==products.id){
        let product = products.filter(products.id, products.name, products.price, products.type);
        cartList.push(product); }
   // if(id == products.find[{id}]){
   // var product = products.this.id;
    //for (id == products.find[{id}]) {
console.log(cartList);
   /*  if(id == products.find[{id}]){//funciona products.find
         console.log({id});
         //cartList.push({id});
      //  (products.map(product => 
        //    cartList.push([product.id, product.name, product.price, product.type])
        //({id: this.id, name: this.name, price: this.price, type: this.type})
      //  ))
    //cartList.push(product);  };*/
   /* if (id == products.find[{id}]) {
        console.log(this.id);
        //const result = words.filter(word => word.length > 6);
        cartList.push(products.filter(id => {id: this.id}));
        //cartList.push([{id: this.id, name: this.name, price: this.price, type: this.type}]);
        console.log(cartList);  }
    //HTMLElement.click(buy(id))
   /* document.getElementById(id).onClick = 
    cartList.push[(products.map(       {id}    ))];
    alert('you add to card this product');
    console.log(cartList);*/
   // console.log(products.id);
}

// Exercise 2
function cleanCart() {
    //cartList = cartList.clear();
 cartList =[];
 //comprovat
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
   total = cartList.map(i=> i.price).reduce((a,b)=>a+b);
   //comprovat
   // total = cartList.Sum({price});
  //const totalPrice =  products.reduce( ( total, products ) => total + ( products.price * products.quantity), 0 );
  return total;

}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
   // cartList 
   // definir nou valor de quantity a arr cart
  // let quantity = 1;
  //cartList.splice(3, 0, {quantity: 1})
  // cartList.push([{quantity: 1}]);
  //for (var i = 0, max = cartList.length; i < max; i += 1) {
   // cart.push(cartList[i].name);}
  // buscar = cartList.reduce((acc, product) => {  acc[product.id] = ++acc[product.id]; return acc; }, {});
  //filtrar el producte, si el troba, afegir la quantitat a 1 ++ i el subtotal++, si no, afegir objecte
  //la nova arr cart NO té ID!! ++BORRAR ID++
 /* for (let i = 0; i < cartList.length; i++) {
    let index = cart.findIndex(product => {
        product.name === cartList[i].name; });
    if (index > -1) {
        cart[index].quantity += 1;
        cart[index].subtotal += cart[index].price;
    } else {
        let newItem = {
            name: cartList[i].name,
            price: cartList[i].price,
            type: cartList[i].type,
            quantity: 1,}
        cart.push(newItem); }}*/

 for(let product in cartList){
      if(cart.includes(cartList[product])){ 
          cartList[product].quantity ++;
          cartList[product].subtotal = cartList[product].price * cartList[product].quantity;
     }else{
             cart.push(cartList[product]);
             cart[cart.length-1].quantity = 1;
             cart[cart.length-1].subtotal = cart[cart.length-1].price;
             cart[cart.length-1].subtotalWithDiscount = 0;
  }};
  //comprovat
  //product = cartList.find((obj => obj.id == id));
  //cart.push(product ? ({quantity: +1}) : (Object()));
  // cart = cartList.filter((id => {return Object.hasOwnProperty(id) ? cart.push({quantity: 1}) + 1 : cart.push(Object())}));
 // cart = cartList.find((id => {return Object.hasOwnProperty(id) ? cart.push({quantity: 1}) + 1 : cart.push(Object())}));
  //const itemid = new Set(cartlist.map(({id})=> id))
 // cart.push(cartlist.filter(id => cartlist[{id}]) )
   console.log(cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == 1) {
            if (cart[i].quantity >= 3) {
                cart[i].price = 10;
                cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;
            } else {
                cart[i].price = 10.5;
            }  }
        if (cart[i].id == 3) {
            if (cart[i].quantity >= 10) {
                cart[i].price = (cart[i].price * 2)/3;
                cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;
            } else {
                cart[i].price = 5;
            } }
    }
    console.log(cart);
    //comprovat
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
   // product = products.find((obj => obj.id == id));

        if(products.find((obj => obj.id == id))){
        if(cart.includes(products[id])){ 
            cart[products].quantity ++;
            cart[products].subtotal = cart[products].price * cart[products].quantity;
       }else{
               cart.push(products[id]);
               cart[cart.length-1].quantity = 1;
               cart[cart.length-1].subtotal = cart[cart.length-1].price;
               cart[cart.length-1].subtotalWithDiscount = 0;
    }};
    console.log(cart);
    
};

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    if(products.find((obj => obj.id == id))){
        if(cart.includes(products[id])){ 
            cart.splice(products[id], products[id]+1);
            cartList.push(products[id]-1);
        }
        else {alert("This product isn't in your cart")}};
        console.log(cart);
        console.log(cartList);
    }
// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    alert(cart);
}
