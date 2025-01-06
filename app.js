// Initialize the database
const dbManager = new IndexedDBManager("MyDatabase", "MyStore");
dbManager.init().then(() => console.log("Database initialized"));

// Button actions
function addData() {
    const title = document.getElementById("addTitle").value;
    const set1 = parseInt(document.getElementById("addSet1").value, 10);
    dbManager.add({ title, set1 }).then((id) => {
        console.log(`Data added with ID: ${id}`);
    });
}

function getData() {
    const id = parseInt(document.getElementById("getId").value, 10);
    dbManager.get(id).then((data) => {
        console.log("Retrieved data:", data);
    });
}

function updateData() {
    const id = parseInt(document.getElementById("updateId").value, 10);
    const name = document.getElementById("updateName").value;
    const age = parseInt(document.getElementById("updateAge").value, 10);
    dbManager.update({ id, name, age }).then(() => {
        console.log(`Data with ID ${id} updated`);
    });
}

function deleteData() {
    const id = parseInt(document.getElementById("deleteId").value, 10);
    dbManager.delete(id).then(() => {
        console.log(`Data with ID ${id} deleted`);
    });
}

function getAllData() {
    dbManager.getAll().then((data) => {
        console.log("All data:", data);
        const dataList = document.getElementById("dataList");

        // Clear existing content
        dataList.innerHTML = '';

        // Create and append user elements
        data.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user-item'); // Optional: for styling
            userDiv.innerHTML = `
                <hr>
                <h3>${user.title}</h3>
                <p>Set 1: ${user.set1}</p>
                <p>ID: ${user.id}</p>
            `;
            dataList.appendChild(userDiv);
        });
    });
}
