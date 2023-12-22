// Sample customer array
let customerArray = [
    { customerId: "C1001", customerName: "John Doe", customerPhone: "123-456-7890" },
    { customerId: "C1002", customerName: "Jane Smith", customerPhone: "987-654-3210" },
    { customerId: "C1003", customerName: "Alice Johnson", customerPhone: "555-555-5555" },
    { customerId: "C1004", customerName: "Bob Anderson", customerPhone: "999-888-7777" },
    { customerId: "C1005", customerName: "Eva Williams", customerPhone: "111-222-3333" },
    { customerId: "C1006", customerName: "David Davis", customerPhone: "444-333-2222" },
    { customerId: "C1007", customerName: "Sophie Brown", customerPhone: "777-888-9999" },
    { customerId: "C1008", customerName: "Michael Miller", customerPhone: "666-555-4444" },
    { customerId: "C1009", customerName: "Olivia Taylor", customerPhone: "222-333-4444" },
    { customerId: "C1010", customerName: "William Wilson", customerPhone: "888-777-6666" },
    { customerId: "C1011", customerName: "Liam Martinez", customerPhone: "123-987-6543" },
    { customerId: "C1012", customerName: "Emma Garcia", customerPhone: "876-543-2109" },
    { customerId: "C1013", customerName: "Aiden Rodriguez", customerPhone: "333-222-1111" },
    { customerId: "C1014", customerName: "Oliver Smith", customerPhone: "555-444-3333" },
    { customerId: "C1015", customerName: "Isabella Johnson", customerPhone: "111-999-8888" },
    { customerId: "C1016", customerName: "Sophia Brown", customerPhone: "777-666-5555" },
    { customerId: "C1017", customerName: "Jackson Davis", customerPhone: "444-333-5555" },
    { customerId: "C1018", customerName: "Lucas Taylor", customerPhone: "222-444-6666" },
    { customerId: "C1019", customerName: "Lily Wilson", customerPhone: "888-777-3333" },
    { customerId: "C1020", customerName: "Henry Moore", customerPhone: "666-555-1111" },

];


document.addEventListener("DOMContentLoaded", function () {
    displayCustomers();
});

function displayCustomers() {
    const customerContainer = document.getElementById("customerContainer");
    customerContainer.innerHTML = "";

    customerArray.forEach(customer => {
        const card = createCustomerCard(customer);
        customerContainer.appendChild(card);
    });
}

function createCustomerCard(customer) {
    const card = document.createElement("div");
    card.classList.add("col-lg-3", "mb-4");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card");

    const cardContent = `
        <div class="card-body">
            <h5 class="card-title">${customer.customerName}</h5>
            <p class="card-text">Customer ID: ${customer.customerId}</p>
            <p class="card-text">Phone: ${customer.customerPhone}</p>
            <button class="btn btn-danger" onclick="deleteCustomer('${customer.customerId}')">Delete</button>
            <button class="btn btn-primary ml-2" data-toggle="modal" data-target="#editCustomerModal"
                    onclick="openEditCustomerModal('${customer.customerId}')">Edit
            </button>
        </div>
    `;

    card.innerHTML = cardContent;
    return card;
}

function deleteCustomer(customerId) {
    const index = customerArray.findIndex(customer => customer.customerId === customerId);
    if (index !== -1) {
        customerArray.splice(index, 1);
        displayCustomers();
    }
}

function openEditCustomerModal(customerId) {
    // Implement logic to open the edit modal with customer details
    const selectedCustomer = customerArray.find(customer => customer.customerId === customerId);

    // Populate the modal fields with the selected customer details
    document.getElementById("editCustomerId").value = selectedCustomer.customerId;
    document.getElementById("editCustomerName").value = selectedCustomer.customerName;
    document.getElementById("editCustomerPhone").value = selectedCustomer.customerPhone;
}

function saveCustomerChanges() {
    // Implement logic to save changes to the customerArray
    const customerId = document.getElementById("editCustomerId").value;
    const selectedCustomer = customerArray.find(customer => customer.customerId === customerId);

    if (selectedCustomer) {
        selectedCustomer.customerName = document.getElementById("editCustomerName").value;
        selectedCustomer.customerPhone = document.getElementById("editCustomerPhone").value;

        // Close the modal
        $("#editCustomerModal").modal("hide");

        // Refresh the displayed customers
        displayCustomers();
    }
}

function addCustomer() {
    // Implement logic to add a new customer to the customerArray
    const newCustomerId = "C" + (customerArray.length + 1001);
    const newCustomerName = document.getElementById("customerName").value;
    const newCustomerPhone = document.getElementById("customerPhone").value;

    const newCustomer = {
        customerId: newCustomerId,
        customerName: newCustomerName,
        customerPhone: newCustomerPhone,
    };

    customerArray.push(newCustomer);

    // Close the modal
    $("#addCustomerModal").modal("hide");

    // Refresh the displayed customers
    displayCustomers();
}

function filterCustomers() {
    const searchBox = document.getElementById('searchBox');
    const searchTerm = searchBox.value.toLowerCase();

    const filteredCustomers = customerArray.filter(customer =>
        customer.customerName.toLowerCase().includes(searchTerm) || customer.customerPhone.includes(searchTerm)
    );

    displayCustomers(filteredCustomers);
}
