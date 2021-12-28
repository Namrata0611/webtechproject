function submitbtn() {
    var firstName = document.getElementById("Fname").value;
    var userName = document.getElementById("Uname").value;
    checkName(firstName);
    checkUserName(userName);

    var email = document.getElementById("email").value;

    checkEmail(email);
    var phoneNo = document.getElementById("pNo").value;
    checkphoneno(phoneNo);

}

function checkName(firstName) {
    document.getElementById("Fname").style.backgroundColor = "white";

    var checking = /^[a-zA-Z\s]+$/

    if ((firstName.match(checking)) && (firstName.length > 3 && firstName.length < 8)) {

    }
    else {
        alert("Wrong entry");
        document.getElementById("Fname").style.backgroundColor = "red";
    }

}

function userNamecheck() {

}

function checkUserName(userName) {
    document.getElementById("Uname").style.backgroundColor = "white";

    var checkingUname = /^[a-zA-Z0-9\s]+$/;


    if ((userName.match(checkingUname)) && (userName.length > 3 && userName.length < 8)) {

    }
    else {
        alert("User Name Should have min 8 characters");
        document.getElementById("Uname").style.backgroundColor = "red";
    }

}

function checkEmail(email) {
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


