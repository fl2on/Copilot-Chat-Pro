    document.addEventListener("DOMContentLoaded", function () {
      var currentYear = new Date().getFullYear();
      var copyrightElement = document.createElement("p");
      copyrightElement.textContent = "Copyright © " + currentYear + " fl2on";
      document.querySelector(".popup").appendChild(copyrightElement);
    });
