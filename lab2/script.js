document.getElementById("regForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let userData = {
        name: name,
        email: email,
        password: password
    };

    // Save data to localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to list page
    window.location.href = "list.html";
});
