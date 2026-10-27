(function () {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function zamknij() { nav.classList.remove('otw'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Otwórz menu'); }
  burger.addEventListener('click', function () {
    var otw = nav.classList.toggle('otw');
    burger.setAttribute('aria-expanded', otw ? 'true' : 'false');
    burger.setAttribute('aria-label', otw ? 'Zamknij menu' : 'Otwórz menu');
  });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') zamknij(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') zamknij(); });

  // Telefon w naglowku (komputer) i dolny pasek (telefon) pokazuja sie dopiero po przewinieciu za glowny przycisk w hero
  var tel = document.getElementById('telMain');
  var mob = document.getElementById('mob');
  var topTel = document.querySelector('.top-tel');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (wpisy) {
      var w = wpisy[0];
      var pokaz = !w.isIntersecting && w.boundingClientRect.top < 0;
      mob.classList.toggle('widac', pokaz);
      topTel.classList.toggle('widac', pokaz);
    }, { threshold: 0 }).observe(tel);
  } else {
    mob.classList.add('widac'); topTel.classList.add('widac');
  }
})();
