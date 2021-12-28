function submitbtn() {


    var email = document.getElementById("email").value;

    checkEmail(email);
    var password = document.getElementById("pwd").value;
    checkpassword(password);

}



function checkpassword(email) {
    document.getElementById("email").style.backgroundColor = "white";

    var checkingEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if (email.match(checkingEmail)) { }

    else {
        alert("User Name Should be Alpha Numeric and min 16characters");
        document.getElementById("email").style.backgroundColor = "red";

    }
}
function checkphoneno(password) {
    document.getElementById("pwd").style.backgroundColor = "white";

    var checkingpassword = /^[A-Za-z]\w{7,14}$/;

    if (password.match(checkingpassword)) { }

    else {
        alert("Phone No Should be 10 characters");
        document.getElementById("pwd").style.backgroundColor = "red";
    }

}


