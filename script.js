/* ==========================================
   SMOKE DETECTION
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       NAVBAR
    ============================== */

    const header = document.querySelector("header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 80) {

                header.style.background = "rgba(8,8,8,.96)";
                header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

            } else {

                header.style.background = "rgba(5,5,5,.68)";
                header.style.boxShadow = "none";

            }

        };

        updateHeader();

        window.addEventListener("scroll", updateHeader);

    }


    /* ==============================
       REVEAL SCROLL
    ============================== */

    const reveals = document.querySelectorAll(
        ".fade, .left, .right, .zoom"
    );

    const reveal = () => {

        const windowHeight = window.innerHeight;

        reveals.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < windowHeight - 80) {

                el.classList.add("visible");

            }

        });

    };

    reveal();

    window.addEventListener("scroll", reveal);


    /* ==============================
       CONTADORES
    ============================== */

    const counters = document.querySelectorAll(".counter");

    const startCounters = () => {

        counters.forEach(counter => {

            if (counter.dataset.started === "true") {
                return;
            }

            const top = counter.getBoundingClientRect().top;

            if (top < window.innerHeight - 80) {

                counter.dataset.started = "true";

                const target = Number(counter.dataset.target);

                if (!target || target <= 0) {
                    return;
                }

                let current = 0;

                const increment = Math.max(
                    1,
                    Math.ceil(target / 70)
                );

                const timer = setInterval(() => {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }

                    if (target >= 100) {

                        counter.textContent =
                            current + "%";

                    } else {

                        counter.textContent =
                            current + "+";

                    }

                }, 25);

            }

        });

    };

    startCounters();

    window.addEventListener(
        "scroll",
        startCounters
    );


    /* ==============================
       SCROLL SUAVE
    ============================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function (e) {

                    const href =
                        this.getAttribute("href");

                    if (!href || href === "#") {
                        return;
                    }

                    const target =
                        document.querySelector(href);

                    if (target) {

                        e.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });


    /* ==============================
       BOTÕES
    ============================== */

    document
        .querySelectorAll(
            ".btn-primary, .btn-secondary, .btn-nav"
        )
        .forEach(btn => {

            btn.addEventListener(
                "mouseenter",
                () => {

                    btn.style.transform =
                        "translateY(-4px) scale(1.02)";

                }
            );

            btn.addEventListener(
                "mouseleave",
                () => {

                    btn.style.transform =
                        "translateY(0) scale(1)";

                }
            );

        });


    /* ==============================
       WHATSAPP
    ============================== */

    const whatsapp =
        document.querySelector(".whatsapp");

    if (whatsapp) {

        setTimeout(() => {

            whatsapp.animate(

                [
                    {
                        transform: "scale(1)"
                    },
                    {
                        transform: "scale(1.12)"
                    },
                    {
                        transform: "scale(1)"
                    }
                ],

                {
                    duration: 800
                }

            );

        }, 1800);

    }


    /* ==============================
       CARDS
    ============================== */

    document
        .querySelectorAll(".card")
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                e => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        e.clientX - rect.left;

                    const y =
                        e.clientY - rect.top;

                    card.style.background =
                        `radial-gradient(
                            circle at ${x}px ${y}px,
                            rgba(255,59,48,.12),
                            rgba(255,255,255,.04) 60%
                        )`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.background =
                        "rgba(255,255,255,.04)";

                }
            );

        });

});
