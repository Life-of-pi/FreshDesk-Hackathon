document.addEventListener("DOMContentLoaded",ListContacts);

function ListContacts(){
    fetch('https://'+tickets.yourdomain+'.freshdesk.com/api/v2/contacts',{
        method: "GET",
        headers:{
            Authorization: "Basic " + btoa(tickets.api_key + ":x"),
            "Content-Type":"application/json; charset=utf-8"
        }
    })
    .then((response)=>{
        alert("Success");
        return response.json();
    })
    .then(jsonData =>{
        console.log(jsonData);
        document.getElementById("contact-list-body").innerHTML = "";
        for(let i=0; i<jsonData.length; i++){
            createUiContactsList(jsonData[i]);
        }

    })
    .catch(error=>{
        console.log(error);
    })
}

function createUiContactsList(jsonData){
    let x = `<tr id="contacts-list-row-id-${jsonData.id}">
                <th id="contacts-list-id-${jsonData.id}" scope="row">${jsonData.id}</th>
                <td id="contacts-name-id-${jsonData.id}">${jsonData.name}</td>
                <td id="contacts-email-id-${jsonData.id}">${jsonData.email}</td>
                <td id="contacts-phone-id-${jsonData.id}">${jsonData.phone}</td>
                <td id="contacts-list-update-id-${jsonData.id}">
                 <button onclick = "UpdateContact(this);" class="btn btn-success m-1" id="btn-contact-update-id-${jsonData.id}"
                 data-toggle="modal" data-target="#staticBackdrop">
                 Update
                 </button>
                 <button class="btn btn-danger m-1" onclick="DeleteContact(this);" id="btn-contact-delete-id-${jsonData.id}">Delete</button>
                </td>
            </tr>`;
    let tableBody = document.getElementById("contact-list-body");
    tableBody.innerHTML += x;
}