function DeleteContact(x){
    let id = x.id.replace(/[^0-9]/g,'');        // extract number from id of the button
    DeleteContactUIElement(id);
    APIContactDelete(id);
}

function DeleteContactUIElement(id){
    let contactsRowDelete = document.getElementById(`contacts-list-row-id-${id}`);
    contactsRowDelete.parentNode.removeChild(contactsRowDelete);
}


function APIContactDelete(deleteContactId) {
    fetch("https://"+tickets.yourdomain+".freshdesk.com/api/v2/contacts/"+ deleteContactId, {

        method: "DELETE",
        headers: {
            // Authorization: "Basic " + btoa("rajvardhank91@gmail.com" + ":Rwebdev@31"),   
            Authorization: "Basic " + btoa(tickets.api_key + ":x"),
            "Content-Type": "application/json;charset=utf-8"
        }
    })
        .then(() => {
            clearInputfields();
        })
        .catch((error) => {
            console.error(error);
            alert('danger', 'Unable to delete ticket');
        });
}