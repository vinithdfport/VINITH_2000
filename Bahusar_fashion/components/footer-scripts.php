<script data-cfasync="false" src="../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
<script src="js/compressed.js"></script>
<script src="js/selectize.min.js"></script>
<script src="js/main.js"></script>
<script>
    document.getElementById('scroll-left').addEventListener('click', function () {
        const slideTrack = document.querySelector('.slide-track');
        slideTrack.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    document.getElementById('scroll-right').addEventListener('click', function () {
        const slideTrack = document.querySelector('.slide-track');
        slideTrack.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
</script>
<script type="text/javascript">
    $(document).ready(function () {
        $('.flexslider').flexslider({
            animation: "fade", // Set the animation type to fade
            slideshow: true, // Enable automatic slideshow
            slideshowSpeed: 5000, // Set slideshow speed to 10 seconds (10000 ms)
            animationSpeed: 1500, // Set the animation speed to 600ms (for smooth transition)
            controlNav: false, // Disable control navigation dots
            directionNav: true // Enable navigation arrows
        });
    });
</script>
<script>
    // Show popup form
    function showForm() {
        document.getElementById("popupForm").style.display = "block";
    }

    // Close popup form
    function closeForm() {
        document.getElementById("popupForm").style.display = "none";
    }

    // Validation function
    function validateForm() {
        let isValid = true;

        // Reset previous error messages
        document.getElementById("nameError").style.display = "none";
        document.getElementById("form_emailError").style.display = "none";
        document.getElementById("form_phoneError").style.display = "none";

        // Full Name validation
        let fullName = document.getElementById("full_name").value.trim();
        if (fullName === "") {
            document.getElementById("nameError").style.display = "block";
            isValid = false;
        }

        // Email validation
        let email = document.getElementById("form_email").value.trim();
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById("form_emailError").style.display = "block";
            isValid = false;
        }

        // Phone validation
        let phone = document.getElementById("form_phone").value.trim();
        let phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            document.getElementById("form_phoneError").style.display = "block";
            isValid = false;
        }

        return isValid;
    }

    // Show form every 1 minute (60000 ms)
    setInterval(showForm, 600);
</script>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        // Get the current page's URL path
        const currentPath = window.location.pathname.split("/").pop(); // Extract the file name (e.g., 'about.php')

        // Select all links in the navigation menu
        const navLinks = document.querySelectorAll(".mainmenu.nav.sf-menu li a");

        // Loop through each link
        navLinks.forEach(link => {
            // Check if the link's href matches the current path
            if (link.getAttribute("href") === currentPath) {
                // Add 'active' class to the parent <li> element
                link.parentElement.classList.add("active");
            } else {
                // Remove 'active' class from other <li> elements (optional for navigation updates)
                link.parentElement.classList.remove("active");
            }
        });
    });
</script>