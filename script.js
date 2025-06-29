
    function openLetter(el) {
      const isOpen = el.classList.contains('open');
      el.classList.toggle('open');
      if (isOpen) {
        const heart = document.createElement('div');
        heart.className = 'heart-pop';
        heart.textContent = '💗';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
      }
    }

    function createPetal() {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.animationDuration = 4 + Math.random() * 3 + 's';
      document.body.appendChild(petal);
      setTimeout(() => petal.remove(), 7000);
    }
    setInterval(createPetal, 300);
 