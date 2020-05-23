// global contacts object
const Contacts = {};
Contacts.cid = "";

// when you press update button it gets id of that update button
function UpdateContact(x) {
    Contacts.cid = "";
    let cid = x.id.replace(/[^0-9]/g, '');
    console.log('cid' + cid);
    Contacts.cid = cid;

    // After Pressing the update button all input values should have values from the contact
    document.getElementById("update-full-name").value = document.getElementById(`contacts-name-id-${Contacts.cid}`).innerHTML;
    document.getElementById("update-contact-email").value = document.getElementById(`contacts-email-id-${Contacts.cid}`).innerHTML;
    document.getElementById("update-contact-number").value = document.getElementById(`contacts-phone-id-${Contacts.cid}`).innerHTML;

}

// when you make change and press submit button it updates contact
function APIUpdateContact() {

    // Take values from update contact from Model
    let nameContactUpdate = document.getElementById("update-full-name").value;
    console.log(nameContactUpdate);
    let emailContactUpdate = document.getElementById("update-contact-email").value;
    console.log(emailContactUpdate);
    let phoneContactUpdate = document.getElementById("update-contact-number").value;
    console.log(phoneContactUpdate);    

    let contactId = Contacts.cid;
    console.log('contactId'+contactId);

    if (nameContactUpdate && emailContactUpdate && phoneContactUpdate && contactId) {
        // make changes in UI
        document.getElementById(`contacts-name-id-${Contacts.cid}`).innerHTML = nameContactUpdate;
        document.getElementById(`contacts-email-id-${Contacts.cid}`).innerHTML = emailContactUpdate;
        document.getElementById(`contacts-phone-id-${Contacts.cid}`).innerHTML = phoneContactUpdate;
        updateFreshdeskContact(nameContactUpdate, emailContactUpdate, phoneContactUpdate, contactId);
    } else {
        alert('danger', 'Ticket Values cannot empty, Fill all values');
    }
}

function updateFreshdeskContact(nameContactUpdate, emailContactUpdate, phoneContactUpdate, contactId, ListContacts) {
    // let api_key = '4MXp8f9YR6TCQhSAPtR';
    fetch("https://" + tickets.yourdomain + ".freshdesk.com/api/v2/contacts/" + contactId, {

        method: "PUT",
        body: JSON.stringify({
            name: `${nameContactUpdate}`,
            email: `${emailContactUpdate}`,
            phone: `${phoneContactUpdate}`
        }),
        headers: {
            // Authorization: "Basic " + btoa("rajvardhank91@gmail.com" + ":Rwebdev@31"),   
            Authorization: "Basic " + btoa(tickets.api_key + ":x"),
            "Content-Type": "application/json;charset=utf-8"
        }
    })
        .then((response) => {
            alert('success', 'Ticket is successfully created');
            clearInputfields();
        })
        .then(function (jsonData) {
            console.log("After Updating contact from API");
            console.log(jsonData);
        })
        .catch((error) => {
            console.error(error);
            alert('danger', 'Unable to create ticket');
        });
}


function clearInputfields() {
    document.getElementById("update-full-name").value = "";
    document.getElementById("update-contact-email").value = "";
    document.getElementById("update-contact-number").value = "";
}
