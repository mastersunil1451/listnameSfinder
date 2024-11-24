// Get the DOM elements
const nameInput = document.getElementById("nameInput");
const searchInput = document.getElementById("searchInput");
const nameList = document.getElementById("nameList");
const resetButton = document.getElementById("resetButton");

// Initialize an empty array to hold the names
let names = [];

// Event listener for the name input field (to upload the list)
nameInput.addEventListener("change", (event) => {
    const uploadedNames = event.target.value.split("\n").map(name => name.trim()).filter(name => name !== "");
    names = uploadedNames;  // Store the names in the array
    displayNames(names);  // Display the list
});

// Event listener for the search input field
searchInput.addEventListener("keyup", (event) => {
    const query = event.target.value.toLowerCase();
    const filteredNames = names.filter(name => name.toLowerCase().includes(query));  // Filter names based on the query
    displayNames(filteredNames);  // Display filtered names
});

// Function to display the list of names
function displayNames(namesToDisplay) {
    nameList.innerHTML = '';  // Clear the current displayed list

    // Create list items for each name and append them
    namesToDisplay.forEach((name) => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        nameList.appendChild(listItem);
    });
}

// Reset functionality (to clear the input and the displayed list)
resetButton.addEventListener("click", () => {
    nameInput.value = '';  // Clear the name input
    searchInput.value = '';  // Clear the search input
    names = [];  // Clear the stored names
    nameList.innerHTML = '';  // Clear the displayed list
});
