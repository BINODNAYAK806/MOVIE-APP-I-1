
// var form = document.forms	
//    
// document.getElementById("name")
// const element = document.getElementById("form");

// console.log(element)

document.getElementById("submit").addEventListener("click", function(event){
    // event.preventDefault()
    let pemail = document.getElementById("email").value;
    let ppassword = document.getElementById("password").value;
    // console.log(pname,pcontact,ppassword,pemail)
    var pass = localStorage.getItem(pemail)
    // localStorage.setItem(pemail,ppassword)
    if(ppassword===""||pemail ===""){

        alert("please fill all the box")

    }else{

        if(ppassword==pass){

            window.location.href = "./index.html";
            alert("login sucess")

        }
        else{

            alert("wrong password")
            window.location.href ="./signup.html"
            // window.location.href="E:\unit-5 assinment\1-How JS Works\Async-Prog-Assignment-Template\signup.html"

        }



    }
    

    






  });


//   console.log(name)