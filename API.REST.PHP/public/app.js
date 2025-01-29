const clientForm = document.getElementById('client-form');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const cityInput = document.getElementById('city');
const telephoneInput = document.getElementById('telephone');
const clientList = document.getElementById('client-list');

function clearForm() {
    emailInput.value = '';
    nameInput.value = '';
    cityInput.value = '';
    telephoneInput.value = '';
}


function getClients() {
    fetch('http://localhost:8080/api-rest/get_all_client.php')
        .then(response => response.json())
        .then(data => {
            
            clientList.innerHTML = '';

            data.forEach(client => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${client.email}</td>
                    <td>${client.name}</td>
                    <td>${client.city}</td>
                    <td>${client.telephone}</td>
                    <td>
                        <button class="edit-btn" data-id="${client.id}">Edit</button>
                        <button class="delete-btn" data-id="${client.id}">Delete</button>
                    </td>
                `;
                clientList.appendChild(row);
            });

            const editButtons = document.querySelectorAll('.edit-btn');
            const deleteButtons = document.querySelectorAll('.delete-btn');

            editButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const clientId = this.getAttribute('data-id');
                    editClient(clientId);
                });
            });

            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const clientId = this.getAttribute('data-id');
                    deleteClient(clientId);
                });
            });
        })
        .catch(error => console.error('Error:', error));
}


function editClient(clientId) {
    fetch(`http://localhost:8080/api-rest/get_client_by_id.php?id=${clientId}`)
        .then(response => response.json())
        .then(client => {
            emailInput.value = client.email;
            nameInput.value = client.name;
            cityInput.value = client.city;
            telephoneInput.value = client.telephone;

            const submitButton = clientForm.querySelector('button');
            submitButton.textContent = 'Actualizar Cliente';

            clientForm.removeEventListener('submit', handleSubmit);
            clientForm.addEventListener('submit', function(e) {
                e.preventDefault();
                updateClient(clientId);
            });
        })
        .catch(error => console.error('Error:', error));
}

function updateClient(clientId) {
    const email = emailInput.value;
    const name = nameInput.value;
    const city = cityInput.value;
    const telephone = telephoneInput.value;

    const url = `http://localhost:8080/api-rest/update_client.php?id=${clientId}&email=${email}&name=${name}&city=${city}&telephone=${telephone}`;

    fetch(url, {
        method: 'PUT',
    })
    .then(response => {
        if (response.ok) {
            alert('Updated Successfully');
            getClients();
            clearForm()

            const submitButton = clientForm.querySelector('button');
            submitButton.textContent = 'Add Client';
            clientForm.removeEventListener('submit', updateClient);
            clientForm.addEventListener('submit', handleSubmit);
        } else {
            alert('Error updating client');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error');
    });
}


function deleteClient(clientId) {
    const url = `http://localhost:8080/api-rest/delete_client.php?id=${clientId}`;

    fetch(url, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            alert('Deleted Successfully');
            getClients();
        } else {
            alert('Error deleting a client');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error');
    });
}

function handleSubmit(e) {
    e.preventDefault();

    const email = emailInput.value;
    const name = nameInput.value;
    const city = cityInput.value;
    const telephone = telephoneInput.value;

    const url = `http://localhost:8080/api-rest/create_client.php?email=${email}&name=${name}&city=${city}&telephone=${telephone}`;

    fetch(url, {
        method: 'POST',
    })
    .then(response => {
        if (response.ok) {
            alert('Added Successfully');
            getClients();
            clearForm()
        } else {
            alert('Error adding client');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error');
    });
}

clientForm.addEventListener('submit', handleSubmit);

getClients();
