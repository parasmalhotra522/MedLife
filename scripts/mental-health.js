// fetching and parsing the user data from the local storage 
// console.log("In ent ...");
allUsers = JSON.parse(localStorage.getItem('users'));
// console.log("all the users", allUsers);

// functon to be executed to check if the user is already signed in...
window.onload =  () => {
    activeUser = JSON.parse(localStorage.getItem('activeUser'));
    console.log("Check active user", activeUser);
    document.getElementById('userProfile').hidden = true;
    //    document.getElementById("alreadyLogged").hidden = true;

    jQuery('.spinner').hide();
    // it means user is logged in
    // we have to hide the 
    if (activeUser) {
        document.getElementById('signInBtn').hidden = true;
        document.getElementById('userProfile').hidden = false;
        jQuery("#userProfile").html(activeUser.userName);
        jQuery("#userNameProfile").html(activeUser.userName);
      
        }
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
}


// function to logout and clear the local storage for any kind of data stored and route back to home
function logOut() {
    console.log("Function getting called");
    localStorage.setItem('activeUser', JSON.stringify(JSON.parse(localStorage.getItem("activeUser")).isLoggedIn = false));
    window.location.href = "./index.html";

}


// ----------- making and filtering the medicines for Mental-health -----

fetch("./data.json")
    .then((response) => response.json())
    .then((data) => returndiabetesMedicine([...data]));

    let diabetesMedicine;
// method which will filter out the medicines specifically for ENT and display it to user
function returndiabetesMedicine(allMedicines) {
   diabetesMedicine = allMedicines.filter((item) => item.category == "mentalHealth");
  console.log("mental medicines", diabetesMedicine);
   showMedicines(diabetesMedicine);
}


function decrementQuantity(index) {
    if(activeUser) {
        
       if(diabetesMedicine[index].netQuantity > 0) {
        diabetesMedicine[index].netQuantity -= 1;
        document.getElementById(diabetesMedicine[index].productId).value=(diabetesMedicine[index].netQuantity);
    }
} else {
    alert("Please login before you can buy anything!!!");
    
}
}
function addQuantity(index) {
   if(activeUser) {

    
    diabetesMedicine[index].netQuantity += 1;
    document.getElementById(diabetesMedicine[index].productId).value=(diabetesMedicine[index].netQuantity);
   } else {
    alert("Please login before you can buy anything!!!");
   }
}



// --------- to handle the cases of updating products properly on user's screen -------

function updateCartBtn() {
   let user =  JSON.parse(localStorage.getItem('activeUser'));
   cartLength = user.userCart.length;
   jQuery(".cart-length").html(cartLength);
            
}
function hideSpinner() {
        jQuery('.spinner').hide();
        jQuery('.category-container').show();
        alert("Item added to cart successfully ");
        location.reload();
}

function showSpinner() {
    jQuery('.spinner').show();
    jQuery('.category-container').hide();
    // hideSpinner();
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


let cart =[];
function addToCart(index) {
    if(activeUser) {
        console.log("item to be added to cart", diabetesMedicine[index]);
        cart.push(diabetesMedicine[index]);
        setToUserCart(cart);
    } 
    else {
        alert("Please login before you can buy anything!!!");
    }
    
}


// method to plot the items on the screen for the products
function showMedicines(products) {
    for(let i =0;i<products.length;i++) {


        jQuery('.card-btn').prop('diabled', true);
        jQuery('.medicines-section').append(`
        <div class="col-md-6">
            <div class="card" style="height:35rem;margin:1.2rem;
            padding:2rem;">
                <div style="margin:1.3rem;">
                    <img src="${products[i].imageUrl}" 
                    style="width: -webkit-fill-available;"
                    alt="${products.name}">
                </div>
                <div class="card-body">
                    <h4 >${products[i].name}</h4>
                    <h3> $ ${products[i].price}</h3>
                    <br>

                    <button id="add_remove addbtn" type="button"
                    style="border: none;
                    border-radius: 1500px;
                    font-size: 1.2em;
                    padding-left: 0.3em;
                    padding-right: 0.3em;"
    
                    onclick="decrementQuantity(${i})"
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
                
                onclick="addQuantity(${i})"
                
                >+</button>

               
                </p>
                <button id="add_to_cart" 
                class="card-btn"
                type="button"
                onclick="addToCart(${i})"
             >Add To Cart</button>


                </div>
            </div>
        </div>
        `);
    }   
}



