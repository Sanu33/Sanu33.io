console.log("connected");

LogedIn=()=>{
   
	let info={
		email:document.getElementById("email").value,
		password:document.getElementById("password").value
	};
	
     if(localStorage.getItem("information")==null)
     {

     	infor=[];
     	infor.push([info.email,info.password]);
        localStorage.setItem("information",JSON.stringify(infor));
     }
     else
     {
     	infor=JSON.parse(localStorage.getItem('information'));

     	infor.push([info.email,info.password]);
     	localStorage.setItem("information",JSON.stringify(infor));

     }
     
    update();
   

    }

 


 update=()=>
 {
  if(localStorage.getItem('information')==null)
       {
           infor=[];
           
           localStorage.setItem('information',JSON.stringify(infor));
       }
       else{
  infor=JSON.parse(localStorage.getItem('information'));
  localStorage.setItem('information',JSON.stringify(infor));
   }
}

