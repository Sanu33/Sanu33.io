function getandupdate()
{
   //taking the value of todo name and its description
    lis= document.getElementById("name").value;
       desc=document.getElementById("description").value;
       if(localStorage.getItem('todolist')==null)//if there is nothing in local storage
       {
           itemJsonarray=[];//creating an empty array
           itemJsonarray.push([lis,desc]);//pushing the value of todo in the array
           //setting the value by making it string into the local storage
           localStorage.setItem('todolist',JSON.stringify(itemJsonarray));
       }
       else//if local storage is not empty
       {
       //first convert into object all the values of localstorage
        itemJsonarray=JSON.parse(localStorage.getItem('todolist'));
        //console.log("Entered") ;
           itemJsonarray.push([lis,desc]);//then push the new value into the array
           localStorage.setItem('todolist',JSON.stringify(itemJsonarray));//then again make it string and store
       }

      update(); //call the update function
    
}
 add= document.getElementById("add");//for adding the value 
 add.addEventListener("click",getandupdate);//when clicked call getandupdate
 update();//then again call update

 function update()//this is when there is either delete option or clear list
 {
  if(localStorage.getItem('todolist')==null)//if localstorage is null
       {
           itemJsonarray=[];//create an array
           
           localStorage.setItem('todolist',JSON.stringify(itemJsonarray));//then set the localstorage
       }
       else{
  itemJsonarray=JSON.parse(localStorage.getItem('todolist'));//if there are items in localstorage make them object
  localStorage.setItem('todolist',JSON.stringify(itemJsonarray));//set the value in localstorage after completig the action
 }

  //Adding values to the table
 let tablebody= document.getElementById("table-body");
 let str="";
 itemJsonarray.forEach((element, index) => {
    str +=`
     <tr>
    <th scope="row">${index+1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
   
  </tr>`;
 });
 tablebody.innerHTML= str;

}

 function deleted (itemIndex)//for deleting the items
 {
     itemJsonarray=JSON.parse(localStorage.getItem('todolist'));//make them objects
  
   itemJsonarray.splice(itemIndex,1);//remove one item from the given index
  // localStorage.remove(itemIndex);
    localStorage.setItem('todolist',JSON.stringify(itemJsonarray));//then set the rest
    update();//call the update function
 }



function clearedstorage()//to clear the storage
{
  alert("Do you want to clear the list?");
  let str=prompt("Yes or No?")
  str=str.toUpperCase();//changing the value to uppercase
 if(str==="YES")
 {
  localStorage.clear();//clearing the local storage
 }
 else{
  alert("Your decision is always wise!!!");//alerting the person
 }
  update();//calling the update function


}

/*let ed= document.getElementsByClassName("form-group");
console.log("inside");
ed.style.color= 'black';
*/
