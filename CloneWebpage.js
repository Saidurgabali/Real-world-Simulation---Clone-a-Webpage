function buyNow() {
    alert("Thank you for your interest! Product added to cart.");
}

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    if (name === "" || email === "") {
        message.style.color = "red";
        message.innerText = "Please fill in all fields.";
    } else {
        message.style.color = "green";
        message.innerText = "Thank you! We will contact you soon.";
    }
}
