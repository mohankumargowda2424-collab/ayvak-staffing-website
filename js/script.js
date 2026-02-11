/* Antigravity Premium Script */
document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Intersection Observer for Animations (Fade In Up)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in, .fade-in-left, .fade-in-right, .fade-in-delayed');
    animatedElements.forEach(el => observer.observe(el));

    // Form Handling with visual feedback
    const form = document.getElementById('quick-apply-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<i class="ph ph-spinner animate-spin"></i> Sending...';
            btn.style.opacity = '0.8';

            // Simulate API call
            setTimeout(() => {
                btn.innerHTML = '<i class="ph ph-check-circle"></i> Sent Successfully';
                btn.style.background = '#22c55e'; // Success Green

                // Show contact number
                const feedback = document.createElement('div');
                feedback.className = 'form-feedback fade-in-up visible';
                feedback.style.marginTop = '20px';
                feedback.style.color = '#0f172a';
                feedback.innerHTML = '<p><strong>Thanks!</strong> We will call you at <strong>+91 63795 98003</strong> shortly.</p>';

                if (!form.querySelector('.form-feedback')) {
                    form.appendChild(feedback);
                }

                form.reset();
            }, 1500);
        });
    }

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
            }
        });
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks && window.innerWidth < 900) {
                    navLinks.style.display = 'none';
                }

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
