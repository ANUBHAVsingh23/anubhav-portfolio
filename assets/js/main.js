/* ============================================================
   Anubhav Singh – Portfolio Scripts
   Author  : Anubhav Singh
   Version : 1.0.0
   ============================================================ */

/* ── Custom Cursor ── */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  if (!cursor || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  function animateCursor() {
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Grow cursor on interactive elements
  const hoverTargets = 'a, button, .pill, .stat-box, .project-card, .cert-card';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
      ring.style.transform   = 'translate(-50%,-50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.transform   = 'translate(-50%,-50%) scale(1)';
    });
  });
})();

/* ── Profile Photo Upload ── */
function loadPhoto(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const img         = document.getElementById('profileImg');
    const placeholder = document.getElementById('profilePlaceholder');
    const removeBtn   = document.getElementById('profileRemove');
    const wrap        = document.getElementById('profileImgWrap');

    img.src             = e.target.result;
    img.style.display   = 'block';
    placeholder.style.display = 'none';
    removeBtn.classList.add('visible');
    wrap.style.cursor   = 'default';
    wrap.onclick        = null;
  };
  reader.readAsDataURL(file);
}

function removePhoto(e) {
  e.stopPropagation();
  const img         = document.getElementById('profileImg');
  const placeholder = document.getElementById('profilePlaceholder');
  const removeBtn   = document.getElementById('profileRemove');
  const wrap        = document.getElementById('profileImgWrap');
  const input       = document.getElementById('profileInput');

  img.src                   = '';
  img.style.display         = 'none';
  placeholder.style.display = 'flex';
  removeBtn.classList.remove('visible');
  wrap.style.cursor = 'pointer';
  wrap.onclick = () => input.click();
  input.value = '';
}

/* ── Scroll Reveal ── */
(function initScrollReveal() {
  const reveals  = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
})();
