(function () {
  // Initialize the falling snow effect for all elements with the falling-snow class
  function initFallingSnow() {
    const snowElements = document.querySelectorAll('.falling-snow');

    snowElements.forEach((element) => {
      // Read configuration options from data-* attributes
      const snowflakeCount = parseInt(element.dataset.snowflakeCount) || 100; // Default: 100
      const speed = parseFloat(element.dataset.speed) || 1.5;               // Default: 1.5
      const snowflakeSize = parseInt(element.dataset.snowflakeSize) || 4;   // Default: 4

      // Create a canvas and append it to the element
      const canvas = document.createElement('canvas');
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      element.style.position = 'relative';
      element.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      resizeCanvas();

      class Snowflake {
        constructor(x, y, radius, speed) {
          this.x = x;
          this.y = y;
          this.radius = radius;
          this.speed = speed;
        }

        update() {
          this.y += this.speed;
          if (this.y > canvas.height) {
            this.y = -this.radius;
            this.x = Math.random() * canvas.width;
          }
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = "white";
          ctx.fill();
        }
      }

      const snowflakes = [];

      function createSnowflakes() {
        for (let i = 0; i < snowflakeCount; i++) {
          const radius = Math.random() * snowflakeSize + 1; // Random size up to snowflakeSize
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const flakeSpeed = Math.random() * speed + 0.5;   // Random speed within the range
          snowflakes.push(new Snowflake(x, y, radius, flakeSpeed));
        }
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snowflakes.forEach((flake) => {
          flake.update();
          flake.draw();
        });
        requestAnimationFrame(animate);
      }

      function resizeCanvas() {
        canvas.width = element.clientWidth;
        canvas.height = element.clientHeight;
      }

      window.addEventListener('resize', resizeCanvas);

      createSnowflakes();
      animate();
    });
  }

  // Run the script when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initFallingSnow);
})();