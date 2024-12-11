document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading for 3 seconds
    setTimeout(function() {
        // Hide the skeleton loader
        document.getElementById("loader").style.display = "none";
        
        // Show the actual login form
        document.getElementById("loginForm").style.display = "block";
    }, 3000);
});
