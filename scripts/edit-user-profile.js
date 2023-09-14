allUsers = JSON.parse(localStorage.getItem('users'));
// functon to be executed to check if the user is already signed in...
window.onload =  () => {
    activeUser = JSON.parse(localStorage.getItem('activeUser'));
    console.log("Check active user", activeUser);
    document.getElementById('userProfile').hidden = true;
    //    document.getElementById("alreadyLogged").hidden = true;

    jQuery('.spinner').hide();
    
    if (activeUser) {
        document.getElementById('signInBtn').hidden = true;
        document.getElementById('userProfile').hidden = false;
        jQuery("#userProfile").html(activeUser.userName);
        jQuery("#userNameProfile").html(activeUser.userName);
      
        }

 
jQuery(".user-edit-profile").append(`
<form class="userForm" id="user-edit-form">
<h2 class="form-heading">Update Profile</h2>

<div class="form-field">
   
    <i class="fa fa-user icon"></i>
    
    <input type="text" name="name" id="userName" 
    class="uName form"
    value=${activeUser.userName}
    required  placeholder="Name" />
    <br>
    
</div>
<div><small id="error-user-name"></small></div>
<div class="form-field">
    <i class="fa fa-envelope icon"></i>
    <input type="email" name="mail" id="emailId" 
    value=${activeUser.emailId}
    required class="form emailId" placeholder="Email" />
    <br>
    
</div>
<div><small id="error-email"></small></div>


<div class="form-field">
    <i class="fa fa-address-card icon"></i>
    <input type="text" name="address"
    class="form addr" 
    value=${(activeUser.savedAddress[0]).toString()}
    id="address" required class="address" placeholder="Address" />
    <br>
</div>





 <div class="form-field">
    <i class="fa fa-lock icon"></i>
    <input type="password" name="pass" id="password"
        required class="form pass" placeholder="Enter Password" />
    <br>       
</div>
<div> <small id="error-password"></small></div>

<div class="form-field">
    <i class="fa fa-lock icon"></i>
    <input type="password" name="pass" id="confirmpassword" required class="form" placeholder="Confirm Password" />
    <br>
</div>
<span>
    <small id="error-confirm-password"></small>
</span>

<button type="button" 
    onclick="updateUser()"
    style="margin:2rem; margin-top:4rem;
    width:20%
    "
    
    id="registerBtn"
    class=" btn btn-success"
    
    >Update
</button>


</form>

`);




    // ------ error messages code blocks -------

    const showSuccess = (element,elementId, message) => {
        // console.log("check success" , element, elementId);
        document.getElementById(elementId).innerHTML= '';
        document.getElementById(elementId).classList.remove('error-message');
    }
    const showError=(element,elementId, message) => {
        // console.log(`${element} message ${elementId} ${message}`);
        document.getElementById(elementId).innerHTML= '&#x26A0' + ' ' + message;
        document.getElementById(elementId).classList.add('error-message');
    }
    
    let isRequired = (value) =>  value ? true : false; 
    const isBetween = (length, min, max) => length < min || length > max ? false : true;

    // ------ email checking using regex expression -------
    const isEmailValid = (email) => {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    };

    const isMobileNumberValid = (mobileNo) => {
        let reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        return reg.test(mobileNo);
    }
  
    const isPasswordValid = (password) => {
        let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        return reg.test(password);
    }

    const isPasswordSame = (confirmPassword) => {
        // console.log(document.getElementById(password).value);
        return $('password') === confirmPassword;
    }
        // ---- validation for each field ----
    const checkUsername = (userName) => {
            let valid = false;
            const min = 3,max = 25;
            const username = userName.length > 0 ? userName.trim() : null;
            if (!isRequired(username)) {
                showError(userName,'error-user-name', 'Username cannot be blank.');
             } 
             else if (!isBetween(username.length, min, max)) {
                showError(userName, 'error-user-name', `Username must be between ${min} and ${max} characters.`)
            }
             else { 
                showSuccess(username,'error-user-name','' );
                valid = true;
            }
            return valid;
        }
    
    const checkEmailValidation = (emailId) => {      
            let valid = false;
            // console.log("Check email", emailId, typeof(emailId));
            if (!isRequired(emailId)) {
                showError(emailId, 'error-email', 'Email Id cannot be blank.');
             } 
             else if (!isEmailValid(emailId)) {
                showError(emailId, 'error-email', 'Email Id is not valid');
            }
             else { 
                showSuccess(emailId,'error-email');
                valid = true;
            }
            return valid;
    }
    const checkPassword = (password) => {
        let valid = false;
        if (!isRequired(password)) {
                showError(password, 'error-password', 'Password cannot be blank.');
             } else if(!isPasswordValid(password)) {
                showError(password, 'error-password', 'Password should be between (Should contain atleast 1 number & 1 special character )');
             }
             else { 
                showSuccess(password,'error-password');
                valid = true;
            }
            return valid;
    }

    const reconfirmPassword = (confirmpassword) => {
        let valid = false;
        if (!isRequired(confirmpassword)) {
                showError(confirmpassword, 'error-confirm-password', 'Confirm Password is Mandatory.');
            } 
            else if(!isPasswordSame(confirmpassword)) {
                showError(confirmpassword, 'error-confirm-password', 'Password and Confirm Password should be same');
            
            }
            else { 
                showSuccess(confirmpassword,'error-confirm-password');
                valid = true;
            }
            return valid;

    }
    
   
   document.querySelector('#userName').addEventListener('input', () => checkUsername(getId('userName')));
   document.querySelector('#emailId').addEventListener('input',()=>checkEmailValidation(getId('emailId')));
   document.querySelector('#password').addEventListener('input',()=>checkPassword(getId('password')));
   document.querySelector('#confirmpassword').addEventListener('input',()=>reconfirmPassword(getId('confirmpassword')));
    

   if (checkUsername && checkEmailValidation && checkPassword && reconfirmPassword) {
    document.getElementById('registerBtn').disabled = false;
   } else {
    document.getElementById('registerBtn').disabled = true;
  
   }
    }

    let getId = (id) => document.getElementById(id).value;
   
    function hideSpinner() {
        jQuery('.spinner').hide();
        jQuery('.user-edit-profile').show();
        alert("User Profile Updated successfully!!");
        location.href="./index.html";
}

    function showSpinner() {
        jQuery('.spinner').show();
        jQuery('.user-edit-profile').hide();
        // hideSpinner();
        setTimeout(()=>hideSpinner(), 1200);
    }

    


    function updateUser() {
        console.log("check ",jQuery('.uname').val())

        let ans = {
            "userName" : jQuery('.uname').val(),
            "emailId" : jQuery('.emailId').val(),
            "savedAddress" : [jQuery('.addr').val()],
            "userPassword" : jQuery('.pass').val(),
            "isAdmin" : false,
            "isLoggedIn" : activeUser.isLoggedIn,
            "userCart" : activeUser.userCart,      
        };

        if (localStorage.getItem('activeUser')) {
            localStorage.setItem('activeUser', JSON.stringify(ans));
        }
        
        showSpinner();

        console.log("I am updating ", ans);

    }