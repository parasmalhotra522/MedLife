
users = [
    {
        "username": "testUser18@gmail.com",
        "password" : "Test$123"
    },

    {
        "username" : "dummyUser@gmail.com",
        "password" : "Dummy$123"
    }


]

function signIn() {
   let emailId = $('userEmailId').value;
    let password = $('userPassword').value;
    console.log(`User entered emailId : ${emailId}\nPassword : ${password}`);

}




