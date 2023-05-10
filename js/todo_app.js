"use strict";


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#create_button").addEventListener("click", () => {
        document.querySelector("#create_div").toggleAttribute("hidden");
    });

    document.querySelector("#taskname").addEventListener("click", () => {
      document.querySelector("#taskname").textContent = "";  
    });
});


