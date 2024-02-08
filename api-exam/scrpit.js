
fetch("https://fakestoreapi.com/products")

.then(res=>res.json())
.then(json=>display(json))

function display(json){
    json.map((el)=>{

        let div=document.createElement("div")

        div.setAttribute("class","sub-main")

        let image=document.createElement("img")

        image.setAttribute("src",el.image)

        let h5=document.createElement("h5")

        h5.innerText=el.title

        let category=document.createElement("p")

        category.innerText=el.category

        let div_1=document.createElement("div")

        div_1.setAttribute("class","reat")

        let reating=document.createElement("p")

        reating.innerText=`Reating: ${el.rating.rate}`

        let count=document.createElement("p")

        count.innerText=`count: ${el.rating.count}`

        div_1.append(reating,count)

        div.append(image,h5,category,div_1)

        document.querySelector(".main").append(div)

    })
}
