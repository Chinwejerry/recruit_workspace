  document.addEventListener("DOMContentLoaded", () => {
    fetch('./components/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
      })
  });


 document.addEventListener("DOMContentLoaded", () => {
    fetch('./components/footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      })
  });
