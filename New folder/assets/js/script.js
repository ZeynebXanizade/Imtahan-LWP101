const cards=document.querySelector(".cards")
fetch("http://localhost:3000/imtahan")
.then((res)=>res.json())
.then((data)=>{
data.forEach((item,i) => {
    if (i<3) {
      const card=document.createElement("div") 
      card.classList.add("card")
      const img=document.createElement("img") 
      const name=document.createElement("p") 
      const about=document.createElement("p") 
   
      img.src=item.img;
      name.innerText=item.name;
      about.innerText=item.about;
     
       card.append(img,name,about) 
       cards.append(card)
    }

});
})
//CRUD
//post start
const create=document.querySelector(".create");
const post =document.createElement("a");
post.innerText="CREATE";
post.href="post.html";
post.target="_blank";
create.append(post)
//post end;

//update start

const update=document.querySelector(".update");
update.addEventListener("click" ,function () {
 
 fetch("http://localhost:3000/imtahan/6",{

        method: 'PUT',
        body: JSON.stringify({
name:"Turkiye",
about:"loremloremloremloremlorem"

        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
       
    })
       .then(response => response.json())
       .then(data => console.log(data))

 })

//update end



//delete start

const del=document.querySelector(".delete")
update.addEventListener("click" ,function () {
 
 fetch("http://localhost:3000/imtahan/6",{

        method:"DELETE" ,     
    })
       .then(response => response.json())
       .then(data => console.log(data))

 })


//search

// const inpt =document.querySelector(".inpt")
// const card =document.querySelector(".card")
// inpt.addEventListener("keyup",function () {
//     data.forEach((element)=> {
//     if(element)


//     });

    
// } )



