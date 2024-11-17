const scrollIndicator = document.querySelector('.scroll-indicator');
        const image = scrollIndicator.querySelector('img');
        const bodyHeight = document.body.offsetHeight;
        const viewportHeight = window.innerHeight;

        let targetTop = 0;
        let currentTop = 0;
        let isAnimating = false;

        function animate() {
            if (isAnimating) {
                requestAnimationFrame(animate);
            }

            const diff = targetTop - currentTop;
            const step = diff * 0.05;

            if (Math.abs(diff) < 1) {
                currentTop = targetTop;
                isAnimating = false;
            } else {
                currentTop += step;
                scrollIndicator.style.top = `${currentTop}px`;
            }
        }

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const scrolledPercentage = (scrollPosition / (bodyHeight - viewportHeight)) * 100;
            targetTop = (scrolledPercentage / 100) * (viewportHeight - scrollIndicator.offsetHeight);

            if (!isAnimating) {
                isAnimating = true;
                animate();
            }
        });