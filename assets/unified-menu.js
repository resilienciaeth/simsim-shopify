(function () {
  function init() {
    var drawer = document.getElementById('UnifiedMenuDrawer');
    if (!drawer) return;

    function closeMenu() {
      document.body.classList.remove('unified-menu-open');
      drawer.setAttribute('aria-hidden', 'true');
    }

    function toggleMenu() {
      if (document.body.classList.contains('unified-menu-open')) {
        closeMenu();
      } else {
        document.body.classList.add('unified-menu-open');
        drawer.setAttribute('aria-hidden', 'false');
      }
    }

    var toggles = document.querySelectorAll('[data-unified-menu-toggle]');
    toggles.forEach(function (el) {
      ['click', 'touchstart'].forEach(function (evt) {
        el.addEventListener(
          evt,
          function (e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
          },
          { passive: false }
        );
      });
    });

    document.addEventListener(
      'click',
      function (e) {
        var t = e.target && e.target.closest && e.target.closest('[data-unified-menu-toggle]');
        if (!t) return;
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
      },
      true
    );
    document.addEventListener(
      'touchstart',
      function (e) {
        var t = e.target && e.target.closest && e.target.closest('[data-unified-menu-toggle]');
        if (!t) return;
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
      },
      true
    );

    var closeBtn = drawer.querySelector('[data-unified-menu-close]');
    if (closeBtn) {
      ['click', 'touchstart'].forEach(function (evt) {
        closeBtn.addEventListener(evt, function (e) {
          e.preventDefault();
          closeMenu();
        });
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    function bindClose(sel) {
      var el = document.querySelector(sel);
      if (!el) return;
      el.addEventListener('click', function (e) {
        if (!document.body.classList.contains('unified-menu-open')) return;
        if (e.target.closest('.header-wrapper') || e.target.closest('.unified-menu-drawer')) return;
        closeMenu();
      });
    }
    bindClose('#MainContent');
    bindClose('main');
    bindClose('.content-for-layout');

    var nav = drawer.querySelector('nav');
    if (nav) {
      nav.addEventListener('click', function (e) {
        var a = e.target && e.target.closest && e.target.closest('a');
        if (!a) return;
        closeMenu();
      });
    }

    var cart = document.getElementById('cart-icon-bubble');
    if (cart) {
      cart.addEventListener('click', function (e) {
        if (!document.body.classList.contains('unified-menu-open')) return;
        e.preventDefault();
        closeMenu();
        setTimeout(function () {
          cart.click();
        }, 20);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
