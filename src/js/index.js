// Function to create and append elements
function appendHelloWorld() {
    // Create a new <h1> element
    const heading = document.createElement('h1');

    // Set the text content of the heading
    heading.textContent = 'Hello, World!';

    // Append the heading to the app div
    document.getElementById('app').appendChild(heading);
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    appendHelloWorld();
});