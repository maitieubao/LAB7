    // Hàm load nội dung của file HTML vào phần tử có id tương ứng
    function loadComponent(id, file) {
        fetch(file)
          .then(response => response.text())
          .then(data => {
            document.getElementById(id).innerHTML = data;
          })
          .catch(error => console.error("Error loading " + file, error));
      }
      
      document.addEventListener("DOMContentLoaded", function () {
        loadComponent("header-placeholder", "components/header.html");
        loadComponent("footer-placeholder", "components/footer.html");
      });

      