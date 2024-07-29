function addData() {

    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let date = document.getElementById('date').value;

    let table = document.getElementById('tableOutput');
    let newRow = table.insertRow(table.rows.length);

    newRow.insertCell(0).innerHTML = id;
    newRow.insertCell(1).innerHTML = name;
    newRow.insertCell(2).innerHTML = email;
    newRow.insertCell(3).innerHTML = phone;
    newRow.insertCell(4).innerHTML = date;
    newRow.insertCell(5).innerHTML = 
    '<button class="edit-button" onclick="editData(this)">Edit</button>' + 
    '<button class="delete-button" onclick="deleteData(this)">Delete</button>';
    
    clearInputs();
}

function editData(button) {

    let row = button.parentNode.parentNode;

    let idCell = row.cells[0];
    let nameCell = row.cells[1];
    let emailCell = row.cells[2];
    let phoneCell = row.cells[3];
    let dateCell = row.cells[4];

    let nameInput = prompt('Enter the updated name: ', nameCell.innerHTML);
    let emailInput = prompt('Enter the updated email: ', emailCell.innerHTML);
    let phoneInput = prompt('Enter the updated phone: ', phoneCell.innerHTML);
    let dateInput = prompt('Enter the updated date: ', dateCell.innerHTML);

    nameCell.innerHTML = nameInput;
    emailCell.innerHTML = emailInput;
    phoneCell.innerHTML = phoneInput;
    dateCell.innerHTML = dateInput;
}

function deleteData(button) {

    let row = button.parentNode.parentNode;

    row.parentNode.removeChild(row);
}

function clearInputs() {
    document.getElementById('id').value = "";
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('date').value = "";

};