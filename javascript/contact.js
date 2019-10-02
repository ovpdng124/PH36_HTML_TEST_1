  function check_Form()
  {
    var mail = document.getElementById("femail").value;
    var pass = document.getElementById("fpassword").value;
   if(mail == "" || mail == null){
      alert("Email can not empty!!!");
   }
   else if(pass == "" || pass == null)
      alert("Password can not empty!!!");
   else{ 
    alert("Login success!")
    alert("Your email: "+ mail);}
  }
