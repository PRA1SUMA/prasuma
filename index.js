document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = this.querySelector(".text").value.trim();
            const email = this.querySelector(".email").value.trim();
            const message = this.querySelector("textarea").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("The email address is invalid.");
                return;
            }

            alert("Thank you, " + name + "! Your message has been sent successfully.");
            this.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skills li");
    skills.forEach((skill, index) => {
        skill.style.opacity = "0";
        skill.style.transform = "translateY(20px)";
        setTimeout(() => {
            skill.style.transition = "all 0.5s ease-in-out";
            skill.style.opacity = "1";
            skill.style.transform = "translateY(0)";
        }, index * 200);
    });

//     // Hover effect on projects
//     const projects = document.querySelectorAll(".project");
//     projects.forEach(project => {
//         project.addEventListener("mouseover", () => {
//             project.style.transform = "scale(1.05)";
//             project.style.transition = "0.3s ease-in-out";
//             project.style.boxShadow = "0 0 20px #0eff";
//         });
//         project.addEventListener("mouseout", () => {
//             project.style.transform = "scale(1)";
//             project.style.boxShadow = "0 0 15px #0eff";
//         });
//     });
});