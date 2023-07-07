import {navbar,fetchdata} from "../Components/navbar.js";
import footer from "../Components/footer.js";
document.getElementById("nav-bar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();



fetchdata();

//let src=document.getElementById("main").querySelector(".img").querySelector("img").src;