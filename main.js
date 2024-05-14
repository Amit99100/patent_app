document.getElementById("quoteForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Validate math answer
    var mathAnswer = parseInt(document.getElementById("math").value);
    if (mathAnswer !== 7) {
        alert("Incorrect math answer. Please try again.");
        return;
    }

    // Collect form data
    var formData = {
        name: document.getElementById("name").value,
        organization: document.getElementById("organization").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        services: document.getElementById("services").value,
        needs: document.getElementById("needs").value
    };

    // Send data to NoSQL database (replace this with your database logic)
    // For example, you can use AJAX to send data to a backend API

    // Reset form after submission
    document.getElementById("quoteForm").reset();

    // Optionally, display a success message
    console.log(formData);
    alert("Form submitted successfully!");
});


// cost function data . 










// top header information 
// Hide fixed header as user scrolls down
window.addEventListener("scroll", function () {
    var header = document.getElementById("fixedHeader");
    if (window.scrollY > 100) {
        header.style.display = "none";
    } else {
        header.style.display = "block";
    }
});
