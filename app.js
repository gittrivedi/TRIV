/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMobileMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.classList.toggle("active");

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(
    ".mobile-menu-panel a"
).forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("mobileMenu")
            .classList.remove("active");

    });

});


/* =====================================================
   SMOOTH SCROLL
===================================================== */

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   LOGIN MODAL
===================================================== */

function openLogin() {

    document
        .getElementById("loginModal")
        .classList.add("active");

}


function closeLogin() {

    document
        .getElementById("loginModal")
        .classList.remove("active");

}


/* =====================================================
   LOGIN
===================================================== */

function loginUser(event) {

    event.preventDefault();

    const rollNumber =
        document
            .getElementById("rollNumber")
            .value
            .trim();

    const message =
        document
            .getElementById("loginMessage");


    if (rollNumber.length < 4) {

        message.textContent =
            "Please enter a valid roll number.";

        return;

    }


    message.textContent =
        "Demo login successful. Backend authentication can be connected here.";

}


/* =====================================================
   UPLOAD MODAL
===================================================== */

function openUpload() {

    document
        .getElementById("uploadModal")
        .classList.add("active");

}


function closeUpload() {

    document
        .getElementById("uploadModal")
        .classList.remove("active");

}


/* =====================================================
   RESOURCE UPLOAD
===================================================== */

function submitUpload(event) {

    event.preventDefault();

    const file =
        document
            .getElementById("resourceFile")
            .files[0];

    const message =
        document
            .getElementById("uploadMessage");


    if (!file) {

        message.textContent =
            "Please select a file.";

        return;

    }


    /*
       Maximum demo file size:
       10 MB
    */

    const maxSize =
        10 * 1024 * 1024;


    if (file.size > maxSize) {

        message.textContent =
            "File is too large. Maximum allowed size is 10 MB.";

        return;

    }


    message.textContent =
        "Resource submitted successfully for moderation.";

}


/* =====================================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
===================================================== */

window.addEventListener(
    "click",
    function(event) {

        const loginModal =
            document.getElementById("loginModal");

        const uploadModal =
            document.getElementById("uploadModal");


        if (event.target === loginModal) {

            closeLogin();

        }


        if (event.target === uploadModal) {

            closeUpload();

        }

    }
);


/* =====================================================
   ESC KEY CLOSES MODALS
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeLogin();

            closeUpload();

        }

    }
);


/* =====================================================
   SIMPLE SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .group-card, .fish-card, .project-card, .life-card"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});