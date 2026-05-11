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

    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {

        const linkPage = link.getAttribute("href");

        // Remove old active class
        link.classList.remove("active");

        // Match current page
        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});
