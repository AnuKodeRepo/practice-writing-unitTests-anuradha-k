function addItem(cart,item,quantity){
    if(quantity <= 0){
        return cart;
    }
    if(cart[item]){
        cart[item] += quantity;
    }
    else{
        cart[item] = quantity;
    }
   return cart;
}
function removeItem(cart,item){
     if(cart[item]){
       delete cart[item];
   }
   return cart;
}
function getTotalItems(cart){
  let total = 0;
   for(let item in cart){
        total += cart[item];
    }
  return total;
}

module.exports = {addItem,removeItem,getTotalItems};