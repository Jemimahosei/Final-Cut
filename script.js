(function () {
  var qs = function (s, r) { return (r || document).querySelector(s); };
  var qsa = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  // Tabs for "More software I have built"
  var tabs = qsa('.tab'), panels = qsa('[data-panel]');
  tabs.forEach(function (t) {
    t.addEventListener('click', function () {
      var i = t.getAttribute('data-tab');
      tabs.forEach(function (x) { x.setAttribute('aria-pressed', x === t ? 'true' : 'false'); });
      panels.forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== i; });
    });
  });

  // Featured videos: poster first, then the player with captions
  qsa('.video').forEach(function (box) {
    var play = qs('.play', box), player = qs('.player', box), video = qs('video', box), back = qs('.back', box);
    play.addEventListener('click', function () {
      play.hidden = true; player.hidden = false;
      var tr = video.textTracks && video.textTracks[0];
      if (tr) tr.mode = 'showing';
      var p = video.play(); if (p && p.catch) p.catch(function () {});
      video.focus && video.focus();
    });
    back.addEventListener('click', function () {
      video.pause(); video.currentTime = 0;
      player.hidden = true; play.hidden = false; play.focus();
    });
    video.addEventListener('ended', function () { back.focus(); });
  });

  // Phone menu
  var burger = qs('.burger'), menu = qs('#menu');
  if (burger && menu) {
    var close = function () { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); };
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    qsa('a', menu).forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }
})();
