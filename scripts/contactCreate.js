document.getElementById("createContact-btn").addEventListener("click", () => {

    // nameContact, emailContact, phoneContact

    var nameContact = document.getElementById("full-name").value;
    console.log(nameContact);
    var emailContact = document.getElementById("contact-email").value;
    console.log(emailContact);
    var phoneContact = document.getElementById("contact-number").value;
    console.log(phoneContact);

    if (nameContact && emailContact && phoneContact) {
        createFreshdeskContact(nameContact, emailContact, phoneContact);
    } else {
        alert('danger', 'Ticket Values cannot empty, Fill all values');
    }
});

function createFreshdeskContact(nameContact, emailContact, phoneContact){

    fetch("https://"+tickets.yourdomain+".freshdesk.com/api/v2/contacts", {

        method: "POST",
        body: JSON.stringify({
            name: `${nameContact}`,
            email: `${emailContact}`,
            phone: `${phoneContact}`
        }),
        headers: {
            // Authorization: "Basic " + btoa("rajvardhank91@gmail.com" + ":Rwebdev@31"),
            Authorization: "Basic " + btoa(tickets.api_key + ":x"),
            "Content-Type": "application/json;charset=utf-8"
        }
    })
        .then((response) => {
            alert('success : Contact is successfully created');
            clearInputfields();
            return response.json();
        })
        .then(function (jsonData) {
            console.log(jsonData);
        })
        .catch((error) => {
            console.error(error);
            alert('danger Unable to create Contact');
        });
}

function clearInputfields() {
    document.getElementById("full-name").value = "";
    document.getElementById("contact-email").value = "";
    document.getElementById("contact-number").value = "";
}