const create=document.querySelector(".create")
create.addEventListener("click" ,function () {
    const name=document.querySelector(".name").value ;  
    const about=document.querySelector(".about").value ;

    let obj ={
name:name,
about:about
    }
 fetch("http://localhost:3000/imtahan",{

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
       .then(response => response.json())
       .then(data =>{
        console.log(data)
       } )

 })

