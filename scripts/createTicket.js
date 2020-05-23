document.getElementById("createTicket-btn").addEventListener("click", () => {
    
    var title = document.getElementById("title").value;
    console.log(title);
    var description = document.getElementById("desc").value;
    console.log(description);
    var email = document.getElementById("email").value;
    console.log(email);
    var name =document.getElementById("name-ticket").value;

    if (title && desc && email) {
        createFreshdeskTicket(title, description, email,name);
    } else {
        alert('danger', 'Ticket Values cannot empty, Fill all values');
    }
});

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
            Authorization: "Basic " + btoa(ticket.api_key + ":x"),
            "Content-Type": "application/json;charset=utf-8"
        }
    })
        .then((response) => {
            alert('success', 'Ticket is successfully created');
            clearInputfields();
            return response.json();
        })
        .then(function (jsonData) {
            console.log(jsonData);
        })
        .catch((error) => {
            console.error(error);
            alert('danger', 'Unable to create ticket');
        });
}


function clearInputfields() {
    document.getElementById("desc").value = "";
    document.getElementById("title").value = "";
    document.getElementById("email").value = "";
}



















