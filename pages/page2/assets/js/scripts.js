document.addEventListener('DOMContentLoaded', () => {

    // MOBILE NAVIGATION

    const menuButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuButton && nav) {

        menuButton.addEventListener('click', () => {

            const isOpen = nav.classList.toggle('open');

            menuButton.setAttribute(
                'aria-expanded',
                String(isOpen)
            );

        });

    }


    // ACTIVE NAVIGATION LINK

    const currentPage =
        window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav a').forEach(link => {

        const targetPage =
            link.getAttribute('href').split('/').pop();

        if (targetPage === currentPage) {

            link.classList.add('active');

            link.setAttribute('aria-current', 'page');

        }

    });


    // CONTACT FORM

    const contactForm = document.querySelector('#contactForm');

    if (contactForm) {

        contactForm.addEventListener('submit', event => {

            event.preventDefault();

            if (!contactForm.reportValidity()) {
                return;
            }

            const name =
                document.querySelector('#name').value.trim();

            alert(
                `Thank you, ${name}! Your message has been prepared. This demo form does not send email yet.`
            );

            contactForm.reset();

        });

    }

});