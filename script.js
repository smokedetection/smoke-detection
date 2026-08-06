// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });

    });
});

// Revelar elementos ao rolar

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card").forEach(card=>observer.observe(card));
