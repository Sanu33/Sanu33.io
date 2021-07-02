
/*onButtonClick=()=> {
    document.getElementById('textInput').className = "show";
}
onButtonClick1=()=> {
    document.getElementById('textInput1').className = "show";

}

*/

browse=()=>
{ 
    let value=JSON.stringify(document.getElementById("date").value);  
    const d = new Date(value);
   // console.log(d);
    let str="";
    str=prompt("Do you want to find after or before value").toUpperCase;
    
  if(str=="AFTER")
  {
       after(d);  
  }
  else 
  {
        before(d);
  }

}

after=(d)=>
{
   let aft=parseInt(prompt("Enter the value you in days"));
   // console.log(aft);
   const newdate= alert(new Date(d.setDate(d.getDate()+aft)));
  // console.log("Outcasted");
   
}

before=(e)=>
{
    bfr=parseInt(prompt("Enter the value you in days"));
    //console.log(bfr);
   const newdate= alert(new Date(e.setDate(e.getDate()-bfr)));
  // console.log("entered");
}

