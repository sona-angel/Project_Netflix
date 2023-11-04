document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Implement your authentication logic here
        if (username === "your_username" && password === "your_password") {
            alert("sign in successful!");
            // You can redirect the user to another page or perform other actions here.
        } else {
            alert("cancel failed. Please check your credentials.");
        }
    });
});
