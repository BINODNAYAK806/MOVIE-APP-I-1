
// var form = document.forms	
//    
// document.getElementById("name")
// const element = document.getElementById("form");

// console.log(element)

document.getElementById("submit").addEventListener("click", function(event){
    // event.preventDefault()
    let pname = document.getElementById("name").value;
    let pcontact = document.getElementById("contact").value;
    let pemail = document.getElementById("email").value;
    let ppassword = document.getElementById("password").value;
    // console.log(pname,pcontact,ppassword,pemail)

    localStorage.setItem(pemail,ppassword)
    if(ppassword===""||pemail ===""||pname ===""|pcontact===""){

        alert("please fill all the box")

    }

    window.location.href = "./index.html";






  });


//   console.log(name)