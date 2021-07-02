//js
console.log("Connected");

check=()=>
{
	let info={
     	email:document.getElementById("email").value,
     	password:document.getElementById("password").value
     };

    
     //let checkarr=[];
     //let checkarr1=[];
     //console.log(JSON.stringify(localStorage.getItem("information")))
     let checkarr=JSON.parse(localStorage.getItem("information"));
     //console.log(checkarr);
     console.log(localStorage.key[0]);
      let j=0
      let z=1
      let check=0;
      temp=0;
     for(i=0;i<checkarr.length;i++)
     {
          
         //console.log(checkarr[i]);
     	if(checkarr[i][j]==info.email && checkarr[i][z]==info.password)
     	{
     		temp=i;
     		check=1;
     		break;
     		
     	}
     }

     if(check==1)
     {
     	//console.log("Successful")
     	 window.location.replace("sidebar.html");

     }
     else
     {
     	console.log("Unsuccessful");
     }
     	
     }

  

