document.addEventListener("DOMContentLoaded", function () {
    // Válaszd ki az összes dropdown-submenu-t
    const subMenus = document.querySelectorAll('.dropdown-submenu');
  
    subMenus.forEach(function (submenu) {
      submenu.addEventListener('mouseover', function () {
        // Mutasd meg a lenyíló menüt
        const dropdownMenu = submenu.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.classList.add('show');
        }
      });
  
      submenu.addEventListener('mouseout', function () {
        // Rejtse el a lenyíló menüt
        const dropdownMenu = submenu.querySelector('.dropdown-menu');
        if (dropdownMenu) {
          dropdownMenu.classList.remove('show');
        }
      });
    });
  });
  