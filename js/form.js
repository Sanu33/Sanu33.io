
console.log("Connected");
  let gender= document.getElementsByClassName("gender");
	 
	 for(i=0;i<gender.length;i++)
	 {
	 	//console.log(gender	 		
	 gender[i].style.color="red";
	 }
	 /*var radios = document.querySelectorAll('input[type="radio"]:checked');
	 console.log(radios);*/
	 

validate=()=>
{
	try{
	 let name= document.getElementById("name").value;
	 let email= document.getElementById("email").value;
	 let textarea= document.getElementById("textarea").value;

    
	if(name==""){

	alert("Please enter the your name");
     return false;
    }

    if(email==""){
    alert("Please enter your email address");  
   	return false;
    }

    if(email!= " ")
    {
      validateEmail(email);
      
    }
    if(textarea==""){

    	alert("Please enter the description");
    	return false;
    }

    
    storing();
}
catch(e)
{
	alert("You have made an error"+e);
}
   
    

  
}

 validateEmail=(email) =>{
 	try{
   console.log("entered");
            let emailID =email;
         console.log(emailID);
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID");
            return false;
         }
     
         return( true );
      
  }
  catch(e)
  {
  	alert("There is an error"+e);
  }
}


storing=()=>{
	try{
     console.log("Entered");
	
	let name= document.getElementById("name").value;
	 let email= document.getElementById("email").value;
	 let textarea= document.getElementById("textarea").value;
	 let image=document.getElementById("img").value;
      
	 localStorage.setItem("name",name);
	 localStorage.setItem("email",email);
	 localStorage.setItem("textarea",textarea);
	 localStorage.setItem("image",image);
	}
	catch(e)
	{
		alert("There is an error"+e);
	}
}



clearStorage=()=>
{
	console.log("entered");
	localStorage.clear();
}

/*function readURL(input) 
{
    document.getElementById("bannerImg").style.display = "block";
    
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('bannerImg').src =  e.target.result;
        }

        reader.readAsD(input.files[0]);
    }
}*/