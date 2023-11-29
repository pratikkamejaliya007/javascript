

    let a=document.getElementById("a1").value

    let b=document.getElementById("a2").value

    let c=document.getElementById("a3").value

    let result=(+a + +b + +c)/3

    if(result == "")
    {
        document.getElementById("result").innerHTML=""
    }
    else{
        if(result >= 90 && result <=100)
        {
            document.getElementById("result").innerHTML=`A`
        }
        else if(result >= 80 && result <90)
        {
            document.getElementById("result").innerHTML=`B`
        }
        else if(result >=70 && result<80)
        {
            document.getElementById("result").innerHTML=`C`
        }
        else if(result >= 60 && result <70)
        {
            document.getElementById("result").innerHTML=`D`
        }
        else 
        {
            document.getElementById("result").innerHTML=`F`
        }
    }

