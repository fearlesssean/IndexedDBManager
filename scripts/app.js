// Initialize the database and then get data
const dbManager = new IndexedDBManager("MyDatabase", "MyStore");

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

        // Create and append log elements
        data.forEach(log => {
            const logDiv = document.createElement('div');
            logDiv.classList.add('user-item'); // Optional: for styling
            logDiv.innerHTML = `
            <p>Log ID: ${log.id}</p>
            <h3>${log.title}</h3>
            <p>Set 1: ${log.set1}.lbs</p>
            <hr>
            `;
            dataList.appendChild(logDiv);
        });
    });
}