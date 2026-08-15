/*==========================================
  SMOKE DETECTION
  script.js — V2.0 CORRIGIDO
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
      NAVBAR
    ==========================================*/

    const header = document.querySelector("header");

    if (header) {

        const updateHeader = () => {

            if (window.scrollY > 80) {

                header.style.background = "rgba(8, 8, 8, 0.96)";
                header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.35)";

            } else {

                header.style.background = "rgba(5, 5, 5, 0.68)";
                header.style.boxShadow = "none";

            }

        };

        updateHeader();

        window.addEventListener("scroll", updateHeader, {
            passive: true
        });

    }


    /*==========================================
      REVEAL AO ROLAR
    ==========================================*/

    const reveals = document.querySelectorAll(
        ".fade, .left, .right, .zoom"
    );

    if (reveals.length > 0) {

        const reveal = () => {

            const windowHeight = window.innerHeight;

            reveals.forEach(element => {

                const top = element.getBoundingClientRect().top;

                if (top < windowHeight - 100) {

                    element.classList.add("visible");

                }

            });

        };

        reveal();

        window.addEventListener("scroll", reveal, {
            passive: true
        });

    }


    /*==========================================
      CONTADORES
    ==========================================*/

    const counters = document.querySelectorAll(".counter");

    if (counters.length > 0) {

        const startCounters = () => {

            counters.forEach(counter => {

                if (counter.dataset.started === "true") {
                    return;
                }

                const top = counter.getBoundingClientRect().top;

                if (top < window.innerHeight - 80) {

                    counter.dataset.started = "true";

                    const target = Number(
                        counter.dataset.target
                    );

                    if (!Number.isFinite(target)) {
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
            startCounters,
            { passive: true }
        );

    }


    /*==========================================
      SCROLL SUAVE
    ==========================================*/

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function (event) {

                const selector = this.getAttribute("href");

                if (!selector || selector === "#") {
                    return;
                }

                let target = null;

                try {

                    target = document.querySelector(selector);

                } catch (error) {

                    return;

                }

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        });


    /*==========================================
      BOTÕES
      IMPORTANTE:
      Não forçar transform pelo JS.
      O CSS controla os efeitos.
    ==========================================*/

    /*
      Removido o antigo código de mouseenter/mouseleave.

      O CSS já possui:
      - hover
      - translateY
      - scale
      - box-shadow
      - transições

      Deixar o JavaScript alterar transform aqui
      fazia os dois entrarem em conflito.
    */


    /*==========================================
      WHATSAPP
    ==========================================*/

    const whatsapp = document.querySelector(".whatsapp");

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
                    duration: 800,
                    easing: "ease-in-out"
                }
            );

        }, 1800);

    }


    /*==========================================
      CARDS
      IMPORTANTE:
      Não alterar background pelo JS.

      O CSS já possui todo o efeito visual.
    ==========================================*/

    /*
      Removido o efeito mousemove dos cards.

      O JavaScript estava sobrescrevendo o background
      definido no CSS e causando conflito visual.
    */


    /*==========================================
      PROTEÇÃO CONTRA ERROS
    ==========================================*/

    window.addEventListener("error", event => {

        console.warn(
            "Smoke Detection:",
            event.message
        );

    });

});
