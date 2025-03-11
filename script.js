//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");
            const rememberMeCheckbox = document.getElementById("checkbox");
            const existingUserBtn = document.getElementById("existing");
            const loginForm = document.getElementById("loginForm");
            
            // Check if credentials are saved in localStorage
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                existingUserBtn.classList.remove("hidden");
            }

            // Handle form submission
            loginForm.addEventListener("submit", function (event) {
                event.preventDefault();
                const username = usernameInput.value;
                const password = passwordInput.value;

                alert("Logged in as " + username);
                
                if (rememberMeCheckbox.checked) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                } else {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                }
            });

            // Handle login as existing user
            existingUserBtn.addEventListener("click", function () {
                alert("Logged in as " + localStorage.getItem("username"));
            });
        });