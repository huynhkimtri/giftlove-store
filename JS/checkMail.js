// JavaScript Document
function validate() {
		// Check email
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
		var s=document.myForm.email.value;
   		
		if(!s.match(mailformat))  
		{
			alert("You have entered an invalid email address!");  
			return false;  
		}  
   		
		
// check password
		var newPassword = document.myForm.password.value;
    	var regularExpression  =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/;
    	
		if(newPassword.length < 6 || newPassword.length > 12){
			alert("password  has length from 6 to 12 characters");
			return false;
		}
		
		if(!newPassword.match(regularExpression)) {
			alert("password contain at least one numeric digit, one uppercase, and one lowercase letter");
			return false;
		}
   	
   
    return true ;
}
