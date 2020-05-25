function DeleteTicket(x){
    let id = x.id.replace(/[^0-9]/g,'');        // extract number from id of the button
    DeleteUIElement(id);
    APIDelete(id);
}

function DeleteUIElement(id){
    let ticketCard = document.getElementById(`card-ticket-id-${id}`);
    ticketCard.parentNode.removeChild(ticketCard);
}

function APIDelete(id){
    fetch("https://"+tickets.yourdomain+".freshdesk.com/api/v2/tickets/"+id,{

        method: "DELETE",
        headers: {
            // Authorization: "Basic " + btoa("rajvardhank91@gmail.com" + ":Rwebdev@31"),
            Authorization: "Basic " + btoa(tickets.api_key + ":x"),
            "Content-Type": "application/json;charset=utf-8"
        }
    })
    .then((response)=>{

    })
    .catch((error) => {
        console.error(error);
        alert('Please try after some time');
    });
}