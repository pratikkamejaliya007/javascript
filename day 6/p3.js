     
     let age=document.getElementById("a1").value

     if(age == "")
     {
        document.getElementById("ans").innerHTML=""
     }
     else if(age<=0)
     {
        document.getElementById("ans").innerHTML="please enter valid age"
     }
     else{
        if( age>=1 && age<=12)
        {
            document.getElementById("ans").innerHTML=`child prise:$8`
        }
        else if(age>=13 && age<=64)
        {
            document.getElementById("ans").innerHTML=`adult prise:$15`
        }
        else{
            document.getElementById("ans").innerHTML=`senior prise:$10`
        }
     }