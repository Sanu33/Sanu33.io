
find=()=>{

    named = document.getElementById("name").value
    dob = document.getElementById("dob").value
    // console.log(dob);
     month = "";
    for (i = 5; i < dob.length; i++) {


        if (i == 7) {
            month = month + ".";

        }
        else {
            month = month + dob[i];
        }
    }
   check(month);
  
}

display=(y)=> {
 
   // alert(named.concat(" ") + "born in:" + dob.concat(" ") + "your zodiac sign is: " + x);
   document.getElementById("demo").innerHTML = named.concat(" ")+"born in "+dob.concat(" ") + "your zodiac sign is:"+y;
}


check=(month)=>{
    let dob1 = parseFloat(month);

    // dob1 = JSON.stringify(month);
    console.log(dob1);
    if (dob1 >= 1.20 && dob1 < 2.19) {
        let zodiac = "Aquarius"
        display(zodiac);
    }

    else if (dob1 >= 3.21 && dob1 < 4.20) {
        let zodiac = "Aries"
        display(zodiac);
    }
    else if (dob1 >= 2.19 && dob1 < 3.20) {
        let zodiac = "Pisces"
        display(zodiac);
    }
    else if (dob1 >= 4.20 && dob1 < 5.21) {
        let zodiac = "Taurus"
        display(zodiac);
    }
    else if (dob1 >= 5.21 && dob1 < 6.21) {
        let zodiac = "Gemini"
        display(zodiac);
    }
    else if (dob1 >= 6.21 && dob1 < 7.23) {
        let zodiac = "Cancer"
        display(zodiac);
    }
    else if (dob1 >= 7.23 && dob1 < 8.23) {
        let zodiac = "Leo"
        display(zodiac);
    }
    else if (dob1 >= 8.23 && dob1 < 9.23) {
        let zodiac = "Virgo"
        display(zodiac);
    }
    else if (dob1 >= 9.23 && dob1 < 10.23) {
        let zodiac = "Libra"
        display(zodiac);
    }
    else if (dob1 >= 10.23 && dob1 < 11.21) {
        let zodiac = "Scorpio"
        display(zodiac);
    }
    else if (dob1 >= 11.21 && dob1 < 12.22) {
        let zodiac = "Sagittarius"
        display(zodiac);
    }
    else {
        let zodiac = "Capricon"
        display(zodiac);
    }
}
