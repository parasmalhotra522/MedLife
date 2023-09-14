
// hide the spinner and show the information after 1200 milli-seconds
setTimeout(()=>{
    jQuery('.spinner').hide();
    jQuery('.shopping-cart').show();
}, 1200);

eligibilityInstallment = (price) => price >= 100;

monthlyInstallments = (item) =>  {
    if(checkPrice(item.price)) {
        return item.price/6;
    } else {
        return 0;
    }
}

let userCarts = [];
removeElement = (itemId) => {
    // console.log("item to be removed", itemId);
    userCarts = userCarts.filter((item)=>item.productId!=itemId);
    
    activeUser.userCart = userCarts;
    // console.log("Check updated", activeUser);
    localStorage.setItem('activeUser',JSON.stringify(activeUser));
    location.reload();
    // console.log(userCarts);
    
    
}


function paymentPage() {
    alert("Have to perform the payment here");
}
function createUserCart(userCarts) {
    
    let amtBefTax = 0, tax=0.13;
    let addr='';
    userCarts.forEach((item) => {
        eligibilityInstallment(item.price) ? jQuery(".installmentSection").show(): jQuery(".installmentSection").hide();
        // console.log('it', item);    


        jQuery(".shopping-cart").append(`
        <div class="row">

            <div class="col-md-1" id="item-checked">
            <input type="checkbox" checked></>
            </div>
       
       
       <div class="col-md-3" id="product-image">
       <img id='${item.productId}' class='checkout-images'
                src='${item.imageUrl}'
                alt=${item.name}></img>
       </div>
       
       <div class="col-md-6" id="product-description">
        ${item.description}
        <br>
        <p>
            <span style="color:green;">In stock</span>
        </p>
        <p>
            <span class="in-stock">Ships from and sold by <a href="#" >MedLife.ca</a></span>

        </p>
        
        <p>
        <b>netQuantity:</b> ${item.netQuantity}
        <br>
            <input type="checkbox"> This will be a gift.
           
            
            </p>
            

       </div>

       <div class="col-md-1" id="product-price">
        <p> $${item.price} </p>
       </div>
     
       <div class="col-md-1" 
       onclick="removeElement(${item.productId})"
      style="cursor:pointer;"><i class="fa fa-trash" style="color:#FF0000"></i>
       
       </div>
  
    </div>



       ` 
      );
        amtBefTax += item.price * item.netQuantity;
       
    });

   
     jQuery(".shopping-cart").append(`
    <div class="row">
        <strong>Total amount before Tax : $ ${amtBefTax} </strong>
        <strong>Tax : $ ${(amtBefTax * tax).toFixed(2)} </strong>
        <strong>Amount after Tax : ${(amtBefTax + (amtBefTax * tax)).toFixed(2)}</strong>
        
    </div>
    <h3> <strong>Select a Shipping Address</strong></h3>
    <input type="radio" name="addr">&ensp;115 West Mall Eva Road, Ottawa, M9C 4W4, Ontario
    <br><br><br>
    <input type="radio" name="addr">&ensp;${activeUser?.savedAddress}

    <br><br><br>
    <button type="submit" id="shipto" name="shipto" class="shipto-btn"
        onclick="paymentPage()"
    >Deliver to this
        Address</button>


    `);

}

jQuery(document).ready(()=>{
    // console.log("I am using jquery code");
    // hide the section body and show it only after the loader is off after 1200 ms

    jQuery('.shopping-cart').hide();

    
    let activeUser = JSON.parse(localStorage.getItem('activeUser'));
    if (activeUser) {
        userCarts = [...activeUser.userCart];
        // console.log("User cart is  : ", userCarts);
        createUserCart(userCarts);      
    
    }

    else {
        // console.log("No active user!! Please login to access cart for the user");
        jQuery('.section-body').html("No active user!! Please login to access cart for the user");
    }    

});
