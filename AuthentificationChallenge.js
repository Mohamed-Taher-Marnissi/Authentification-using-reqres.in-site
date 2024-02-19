
document.querySelector(".submit").addEventListener("click" , function() {

    let email = document.getElementById("email-input").value;
    let password = document.getElementById("password-input").value;

    axios.post("https://reqres.in/api/login" , {
        "email": email,
        "password": password
    })
    .then(function(response) {
        let token = response.data.token;

        localStorage.setItem("token", token);
        window.location = "LoginSuccess.html";

        console.log("token received ", token);
    }).catch(error => {
        alert(error.response.data.error);
    })

})