   document.addEventListener('DOMContentLoaded', function () {

            const sidebar = document.getElementById('sidebar');
            const toggleSidebarBtn = document.getElementById('toggleSidebar');
            const closeSidebarBtn = document.querySelector('.close-sidebar');

            if (sidebar && toggleSidebarBtn) {
                toggleSidebarBtn.addEventListener('click', function () {
                    sidebar.classList.toggle('collapsed');
                });
            }

            if (sidebar && closeSidebarBtn) {
                closeSidebarBtn.addEventListener('click', function () {
                    sidebar.classList.remove('collapsed');
                });
            }

            // Submenu toggles for Filter dropdown
            const creationDateMenu = document.getElementById('creationDateMenu');
            const creationDateMenuList = document.getElementById('creationDateMenuList');
            if (creationDateMenu && creationDateMenuList) {
                creationDateMenu.addEventListener('click', function(e) {
                    e.preventDefault();
                    creationDateMenuList.style.display = creationDateMenuList.style.display === 'none' ? 'block' : 'none';
                });
            }

            const statusMenu = document.getElementById('statusMenu');
            const statusMenuList = document.getElementById('statusMenuList');
            if (statusMenu && statusMenuList) {
                statusMenu.addEventListener('click', function(e) {
                    e.preventDefault();
                    statusMenuList.style.display = statusMenuList.style.display === 'none' ? 'block' : 'none';
                });
            }

            const editorMenu = document.getElementById('editorMenu');
            const editorMenuList = document.getElementById('editorMenuList');
            if (editorMenu && editorMenuList) {
                editorMenu.addEventListener('click', function(e) {
                    e.preventDefault();
                    editorMenuList.style.display = editorMenuList.style.display === 'none' ? 'block' : 'none';
                });
            }

            // Add dropdown-toggle class to all buttons with data-bs-toggle="dropdown"
            document.querySelectorAll('button[data-bs-toggle="dropdown"]').forEach(btn => {
                if (!btn.classList.contains('dropdown-toggle')) {
                    btn.classList.add('dropdown-toggle');
                }
            });
          });

          
    //   Activate current page link in sidebar
    document.addEventListener("DOMContentLoaded", function () {

        const navLinks = document.querySelectorAll(".side-nav-box .nav-link");

        const currentPath = window.location.pathname;

        navLinks.forEach(link => {

            const linkHref = link.getAttribute("href");

            link.classList.remove("active");

            if (currentPath.includes(linkHref.replace(".html", ""))) {
                link.classList.add("active");
            }

        });

    });

    // Role based access control for sidebar links
    document.getElementById("loginForm").addEventListener("submit", function(e){

        e.preventDefault();

        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value.trim();

        // Superadmin
        if(email === "sikendrayadav@gmail.com" && password === "12345678"){
            window.location.href = "superadmin/index.html";
        }

        // Agency
        else if(email === "agency@one.com" && password === "12345678"){
            window.location.href = "agency/index.html";
        }

        // Agency Staff
        else if(email === "agencystaff@gmail.com" && password === "12345678"){
            window.location.href = "agency-staff/index.html";
        }

        // Client
        else if(email === "client@one.com" && password === "12345678"){
            window.location.href = "client/index.html";
        }

        else{
            alert("Invalid Email or Password");
        }

    });