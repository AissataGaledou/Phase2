function showMessage(){
    var fullname= document.getElementById("fName").value;
    var Username= document.getElementById("lName").value;
    var Email= document.getElementById("mail").value;
    var Password= document.getElementById("pwd").value;
    

    var message = "Full name: " + fullname + "\nUsername: " + Username + "\nEmail: " + Email + "\nPassword: " +Password ;
            alert(message);
    
}