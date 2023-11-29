
    let a=document.getElementById("a1").value 


    let discount 

    let final
    // document.getElementById("ans").innerHTML="your salary"+ +final


    if(a => 0 && a<=10000)
    {

         discount= (a*5)/100

         final= +a - +discount

        document.getElementById("ans").innerHTML=`your salary ${+final}`
    }
    else if(a>=10001 && a<=20000)
    {
        
        discount= (a*10)/100

        final=+a - +discount

        document.getElementById("ans").innerHTML=`your salary ${+final}`
    }
    else if(a>=20001 && a<=30000)
    {
        
        
        discount= (a*15)/100

        final=+a - +discount

        document.getElementById("ans").innerHTML=`your salary ${+final}`
    }
    else if(a>=30001 && a<=40000)
    {
        
        
        discount= (a*20)/100

        final=+a - +discount

        document.getElementById("ans").innerHTML=`your salary ${+final}`
    }
    else{
        
        
        discount= (a*25)/100

        final=+a - +discount

        document.getElementById("ans").innerHTML=`your salary ${+final}`
    }


