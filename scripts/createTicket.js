// document.getElementById("createTicket-btn").addEventListener("click", () => {
    
//     var title = document.getElementById("title").value;

//     var description = document.getElementById("desc").value;

//     var email = document.getElementById("email").value;

//     var name =document.getElementById("name-ticket").value;

//     if (title && desc && email) {
//         createFreshdeskTicket(title, description, email,name);
//     } else {
//         alert('Please Fill all the details');
//     }
// });

function createTicket(){
    var title = document.getElementById("title").value;

    var description = document.getElementById("desc").value;

    var email = document.getElementById("email").value;

    var name =document.getElementById("name-ticket").value;

    if (title && description && email && name) {
        createFreshdeskTicket(title, description, email,name);
    } else {
        alert('Please Fill all the details');
    }
}

function createFreshdeskTicket(title, description, email,name) {
    // let api_key = '4MXp8f9YR6TCQhSAPtR';
    fetch("https://"+tickets.yourdomain+".freshdesk.com/api/v2/tickets", {

        method: "POST",
        body: JSON.stringify({
            description: `${description}`,
            email: `${email}`,
            priority: 1,
            status: 2,
            subject: `${title}`,
            name: `${name}`
        }),
        headers: {
            // Authorization: "Basic " + btoa("rajvardhank91@gmail.com" + ":Rwebdev@31"),
            Authorization: "Basic " + btoa(tickets.api_key + ":x"),
            "Content-Type": "application/json;charset=utf-8"
        }
    })
        .then((response) => {
            console.log("near clear input fields");

            document.getElementById("name-ticket").value = "";
            document.getElementById("desc").value = "";
            document.getElementById("title").value = "";
            document.getElementById("email").value = "";
            
            return response.json();
        })
        .then(function (jsonData) {
            console.log(jsonData);
        })
        .catch((error) => {
            console.error(error);
            alert('Please try after some time. Unable to create ticket at the moment');
        });
}


// function clearInputfields() {
//     document.getElementById("name-ticket").value = "";
//     document.getElementById("desc").value = "";
//     document.getElementById("title").value = "";
//     document.getElementById("email").value = "";
// }



















