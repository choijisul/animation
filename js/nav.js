const navToggleI = nav_toggle.getElementsByTagName("i")[0];         
const navListUl = document.getElementsByClassName("navbar_menu")[0];

nav_toggle.onclick = () => {
    // 햄버거 메뉴를 클릭하면, 햄버거메뉴 i <-> <i class="bi bi-x-lg"></i>
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");

    // 햄버거 메뉴를 클릭하면, .nav=list에 .show-menu 보여주기 <-> 안보여주기
    navListUl.classList.toggle("show_menu");
}
   