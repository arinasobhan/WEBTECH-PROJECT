document.addEventListener("DOMContentLoaded", function () {
    var commentForm = document.getElementById("comment-form");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        // Get user input
        var comment = document.getElementById("comment").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        console.log("Comment:", comment);
        console.log("Name:", name);
        console.log("Email:", email);

        showSuccessMessage();
        showAlert();
        commentForm.reset();
    });

    function showSuccessMessage() {
        var successMessage = document.createElement("p");
        successMessage.textContent = "Your comment has been successfully sent!";
        successMessage.style.color = "green";

        commentForm.appendChild(successMessage);

        setTimeout(function () {
            successMessage.remove();
        }, 3000);
    }

    function showAlert() {
        alert("We Will Take An Action On Your Comment");
    }
});