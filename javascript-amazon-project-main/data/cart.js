
 export const cart=[];
 export function addToCart (productId){
    let matchItem = '';

      cart.forEach((item)=>{
        if(productId === item.productId){

          matchItem = item;

        }
      });
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
      const quantity =Number( quantitySelector.value);
      //console.log(quantity);
      if(matchItem){
        matchItem.quantity += quantity;
      }else{
        cart.push({
          // productId:productId,
          // quantity:quantity
          productId,
          quantity

        });

      };

  }