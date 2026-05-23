(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initScene() {
    if (document.getElementById("barber-scene")) return;

    const scene = document.createElement("div");
    scene.id = "barber-scene";
    scene.setAttribute("aria-hidden", "true");
    scene.innerHTML = `
      <div class="scene-3d-stage">
        <div class="float-3d float-3d--1" style="--z:80px;--ry:25deg"><span class="material-symbols-outlined">content_cut</span></div>
        <div class="float-3d float-3d--2" style="--z:120px;--ry:-40deg"><span class="material-symbols-outlined">straighten</span></div>
        <div class="float-3d float-3d--3" style="--z:60px"><span class="material-symbols-outlined">dry_cleaning</span></div>
        <div class="float-3d float-3d--4"><span class="material-symbols-outlined">chair</span></div>
        <div class="float-3d float-3d--5"><span class="material-symbols-outlined">local_barber</span></div>
      </div>
      <canvas id="ambient-canvas"></canvas>
    `;
    document.body.prepend(scene);
    if (!prefersReduced) initParticles();
  }

  function initParticles() {
    const canvas = document.getElementById("ambient-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, particles;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = Array.from({ length: Math.min(50, Math.floor(w / 30)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 1 + 0.2,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233, 195, 73, ${0.15 * p.z})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();
  }

  function initReveal() {
    const targets = document.querySelectorAll(".reveal, .reveal-stagger");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
  }

  function initCardTilt() {
    if (prefersReduced) return;

    document.querySelectorAll(".card-3d").forEach((card) => {
      card.style.position = card.style.position || "relative";

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(8px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }

  function initParallax() {
    if (prefersReduced) return;

    const heroBg = document.querySelector(".hero-parallax");
    const sections = document.querySelectorAll(".parallax-bg");

    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        if (heroBg) {
          heroBg.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(1.08)`;
        }
        sections.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = (window.innerHeight - rect.top) * 0.08;
            el.style.transform = `translate3d(0, ${offset * 0.15}px, 0)`;
          }
        });
      },
      { passive: true }
    );
  }

  function initHeader() {
    const header = document.querySelector("header");
    if (!header) return;
    header.classList.add("header-immersive");

    window.addEventListener(
      "scroll",
      () => {
        header.classList.toggle("is-scrolled", window.scrollY > 40);
      },
      { passive: true }
    );

    header.querySelectorAll("nav a").forEach((link) => {
      link.classList.add("nav-link-3d");
    });
  }

  function initButtons() {
    document.querySelectorAll("button, a.bg-tertiary, a.btn-3d").forEach((btn) => {
      if (!btn.classList.contains("btn-3d")) btn.classList.add("btn-3d");
    });
  }

  function initSmoothNav() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const id = anchor.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
      });
    });
  }

  function boot() {
    document.body.classList.add("immersive-site");
    initScene();
    initHeader();
    initReveal();
    initCardTilt();
    initParallax();
    initButtons();
    initSmoothNav();

    document.querySelectorAll(".vintage-divider").forEach((d) => {
      d.classList.add("vintage-divider-animated");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
