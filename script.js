function openContact(url) {
    window.open(url, '_blank');
   }
           document.querySelectorAll('a[href^="#"]').forEach(anchor => {
               anchor.addEventListener('click', function (e) {
                   e.preventDefault();
                   document.querySelector(this.getAttribute('href')).scrollIntoView({
                       behavior: 'smooth'
                   });
               });
           });