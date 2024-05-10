document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href="about.html"], a[href="2023-24.html"], a[href="auditions.html"], a[href="calendar.html"], a[href="contact-us.html"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            alert('Page in progress');
        });
    });
  });
