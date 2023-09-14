


//------------- All login/logout functionality  --------

// fetching and parsing the user data from the local storage 
allUsers = JSON.parse(localStorage.getItem('users'));
console.log("all users", allUsers);

// functon to be executed to check if the user is already signed in...
window.onload = function () {
    activeUser = JSON.parse(localStorage.getItem('activeUser'));
    console.log("Check active user", activeUser);
    document.getElementById('userProfile').hidden = true;
    //    document.getElementById("alreadyLogged").hidden = true;
    
    
    jQuery('.spinner').hide();
    if (activeUser) {
        jQuery('.welcome-back').html('Welcome back ' + activeUser.userName);
    }

    if (activeUser.userCart.length) {
        jQuery('.cart-length').html(activeUser.userCart.length)
    }
    // it means user is logged in
    // we have to hide the 
    if (activeUser) {
        document.getElementById('signInBtn').hidden = true;
        document.getElementById('userProfile').hidden = false;
        document.getElementById('userProfile').innerHTML = activeUser.userName;
        document.getElementById('userNameProfile').innerHTML = activeUser.userName;

        // hide the sign-in form if user is already logged in
        // document.getElementById("sign-in-form").hidden = true;
        // document.getElementById("alreadyLogged").hidden = false;

    }
}


let subMenu = document.getElementById("subMenu");
function toggleMenu() {
    console.log("toggle ");
    subMenu.classList.toggle("open-menu");
    document.querySelector("sub-menu-wrap").classList.add('display:inline');

}


// function called on clicking signIn() button which will filter the particular user
// credentials from the ones already setup ... in the localstorage..
function signIn() {
    let userEmailId = document.getElementById('userEmailId').value;
    let password = document.getElementById('userPassword').value;

    // console.log(`User entered emailId : ${userEmailId}\nPassword : ${password}`);

    // extracting the only user with the given credentials
    let filteredUser = (allUsers.filter((user) => user.emailId === userEmailId)[0]);

    if (filteredUser?.emailId === userEmailId &&
        filteredUser?.userPassword === password
    ) {

        filteredUser.isLoggedIn = true;
        // set an active user to the signed-in user
        localStorage.setItem("activeUser", JSON.stringify(filteredUser));
        localStorage.setItem("users", JSON.stringify(allUsers));

        // route to shop page if the user credential validation is successfull
        window.location.href = "./shop.html";

    } else {
        alert(`Invalid Credentials !! Please retry using some other credentials`);
    }
};


// function to logout and clear the local storage for any kind of data stored and route back to home
function logOut() {
    console.log("Function getting called");
    // changing the flag value of the boolean to false; for the active user
    localStorage.setItem('activeUser', JSON.stringify(JSON.parse(localStorage.getItem("activeUser")).isLoggedIn = false));
    // localStorage.clear();
    // localStorage.setItem('users') = 
    // JSON.stringify(JSON.parse(localStorage.getItem('users')));
    // localStorage.setItem('activeUser', null);
    window.location.href = "./index.html";

}



updatedProduct = [];

function addQuantity(product) {
    if(activeUser) {
    if (product.netQuantity <= 10) {
        product.netQuantity += 1
    }
    // console.log("Incrementing the quantity", product.netQuantity);
    document.getElementById(product.productId).value = product.netQuantity;
    updatedProduct = products.filter((data) => data.productId == product.productId);
    updatedProduct[0].netQuantity = product.netQuantity;

    } 
    else {
        alert("Please login before you can buy anything!!!");
       }
}

function decrementQuantity(product) {
    // console.log(product.netQuantity);
   
    if(activeUser) {
        if (product.netQuantity) {
            product.netQuantity -= 1;
            document.getElementById(product.productId).value = product.netQuantity;

        }
        // document.getElementById('netQuantity').value = quantity;
        updatedProduct = products.filter((data) => data.productId == product.productId)
        updatedProduct[0].netQuantity = product.netQuantity;
    } 
        else {
            alert("Please login before you can buy anything!!!");
           }
    
    // console.log(product);

}


function updateCartBtn() {
    let user =  JSON.parse(localStorage.getItem('activeUser'));
    cartLength = user.userCart.length;
    jQuery(".cart-length").html(cartLength);
             
 }
 function hideSpinner() {
         jQuery('.spinner').hide();
         jQuery('#card-container').show();
         alert("Item added to cart successfully ");
         location.reload();
 }
 
 function showSpinner() {
     jQuery('.spinner').show();
     jQuery('#card-container').hide();
     setTimeout(()=>hideSpinner(), 1200);
 }



function returnItemInCart(arr){
    for(let i of arr) {
      return i;
    }
  }
  
  function returnIndex(arr, itemId) {
     return arr.findIndex(item => item.productId === itemId);
  }

var cart = [];
function setToUserCart(itemCart) {
    if (localStorage.getItem('activeUser')) {
        
        if (JSON.parse(localStorage.getItem('activeUser')).isLoggedIn) {
            
            currentUser = { ...JSON.parse(localStorage.getItem('activeUser')) };
            console.log("Already present items in cart",currentUser.userCart )


            // ---- use case if the item we are trying to add is already in the cart
            console.log(returnItemInCart(itemCart));
            if (currentUser.userCart.length) {
                currentUser.userCart.forEach(item => {

                    
                    if(item.productId === returnItemInCart(itemCart).productId){
                        console.log("item is already there in cart");
                        itemCart[returnIndex(itemCart,item.productId)].netQuantity = returnItemInCart(itemCart).netQuantity + item.netQuantity; 
                    }
                    else {
                        // console.log('Present already before over writing', item);
                        itemCart.push(item);
                    }
                });
            console.log("after updating ....", itemCart);
            }



            currentUser.userCart = [...itemCart];

            console.log("Current User", currentUser);
            
            localStorage.setItem('activeUser',JSON.stringify(currentUser));
            showSpinner();
           
            updateCartBtn();
        }
    }
    else {
        alert("You must login first to buy the products");
    }
}
function addToCart(item) {

    if(activeUser) {

    
    // console.log("cart comment", allproduct);
    console.log("---check products", products);
    cart.push(item);
    console.log('item to cart', cart);
    setToUserCart(cart);
    } else {
        alert("Please login before you can buy anything!!!");
       }
}

// fetching the products data from data.json
fetch("./data.json")
    .then((response) => response.json())
    .then((data) => showContent([...data]));
var products;
function showContent(data) {
    products = data;
    console.log("Check", products);
    // document.addEventListener('DOMContentLoaded', ()=>{

    // console.log("inside the dom");
    console.log("Check all products", products);

    let container = document.getElementById('card-container');

    for (let i = 0; i < products.length; i++) {


        // let productQuantity = 0;
        let cardHtml = `
        <div class="col-md-4">
            <div class="card" style="height:40rem; margin:1.5rem;">
            <div style="margin-bottom:2rem; width:100%;height:50%;padding:1.2rem;">
                <img src="${products[i].imageUrl}" alt="Avatar" style="width:100%;height:auto"/>
            </div>
                  <div class="container card-body" style="height:50%;">
                    <h4 >${products[i].name}</h4>
                    <h3> $ ${products[i].price}</h3>
                    <p>
                    <br>
                    
                    <button id="add_remove addbtn" type="button"
                        style="border: none;
                        border-radius: 1500px;
                        font-size: 1.2em;
                        padding-left: 0.3em;
                        padding-right: 0.3em;"
        
                        onclick="decrementQuantity(products[${i}])"
                     > - </button>
                    <input type="text" name="quantity" 
                        id="${products[i].productId}"
                        
                        value="${products[i].netQuantity}"
        
                    size="1">
                    
                    <button id="add_remove" type="button"
                    style="border: none;
                    border-radius: 1500px;
                    font-size: 1.2em;
                    padding-left: 0.3em;
                    padding-right: 0.3em;"
                    
                    onclick="addQuantity(products[${i}])"
                    
                    >+</button>
                </p>
                <button id="add_to_cart" 
                class="card-btn"
                type="button"
                onclick="addToCart(products[${i}])"
                >Add To Cart</button>
                    <p class="desc">${products[i].description}</p>
                  </div>      
            </div>
        </div>`

        // document.write(cardHtml)
        container.innerHTML += cardHtml;
    }

    // });    
}


