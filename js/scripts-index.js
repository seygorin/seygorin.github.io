document.documentElement.className = 'js';

(function() {
  // Fake loading.
  setTimeout(init, 500);

  function init() {
    document.body.classList.remove('loading');


      var splitContent = document.querySelector('.dual__content');
    // Reveal on load 
    
    var rev1 = new RevealFx(document.querySelector('#rev-1'), {
      revealSettings : {
        bgcolor: '#fcf652',
        onCover: function(contentEl, revealerEl) {
          contentEl.style.opacity = 1;
        }
      }
    });
    rev1.reveal();

    var rev2 = new RevealFx(document.querySelector('#rev-2'), {
      revealSettings : {
        bgcolor: '#ffe599',
        delay: 250,
        onCover: function(contentEl, revealerEl) {
          contentEl.style.opacity = 1;
        }
      }
    });
    rev2.reveal();

    // Reveal on scroll 
    var splitContent = document.querySelector('.dual__content');
    var scrollElemToWatch_1 = document.getElementById('rev-3'),
      watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300),				
      rev3 = new RevealFx(scrollElemToWatch_1, {
        revealSettings : {
          bgcolor: '#fcf652',
          onCover: function(contentEl, revealerEl) {
            contentEl.style.opacity = 1;
          }
        }
      }),
      rev4 = new RevealFx(document.querySelector('#rev-4'), {
        revealSettings : {
          bgcolor: '#ffe599',
          delay: 500,
          onCover: function(contentEl, revealerEl) {
            contentEl.style.opacity = 1;
          }
        }
      });
                
      var scrollElemToWatch_2 = document.getElementById('rev-5'),
      watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -300),	
      rev5 = new RevealFx(document.querySelector('#rev-5'), {
        revealSettings : {
          bgcolor: '#fcf652',
          direction: 'tb',
          delay: 500,
          onCover: function(contentEl, revealerEl) {
            contentEl.style.opacity = 1;
          }
        }
      }),
      rev7 = new RevealFx(document.querySelector('#rev-7'), {
        revealSettings : {
          bgcolor: '#ffe599',
          direction: 'bt',
          delay: 1500,
          onCover: function(contentEl, revealerEl) {
            contentEl.style.opacity = 1;
          }
        }
      });
      
      var scrollElemToWatch_3 = document.getElementById('rev-6'),
      watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -300),	
      rev6 = new RevealFx(document.querySelector('#rev-6'), {
        revealSettings : {
          bgcolor: '#d4d4d4',
          direction: 'rl',
          duration: 500,
          easing: 'easeInOutSine',
          coverArea: 50,
          onCover: function(contentEl, revealerEl) {
          contentEl.style.opacity = 1;
          splitContent.classList.add('dual__content--show');
          }
        }
      });

    watcher_1.enterViewport(function() {
      rev3.reveal();
                rev4.reveal();
      watcher_1.destroy();
            });
            watcher_2.enterViewport(function() {
      rev5.reveal();
      rev7.reveal();
      watcher_2.destroy();
    });
    watcher_3.enterViewport(function() {
      rev6.reveal();
      watcher_3.destroy();
    });
  }
})();

  // Navbar animation 

(function() {
  var navEl = document.querySelector('nav.menu'),
    revealer = new RevealFx(navEl),
    closeCtrl = navEl.querySelector('.btn--close');

  document.querySelector('.btn--menu').addEventListener('click', function() {
    revealer.reveal({
      bgcolor: '#ffe599',
      duration: 400, 
      easing: 'easeInOutCubic',
      onCover: function(contentEl, revealerEl) {
        navEl.classList.add('menu--open');
        contentEl.style.opacity = 1;
      },
      onComplete: function() {
        closeCtrl.addEventListener('click', closeMenu);
      }
    });
  });

  function closeMenu() {
    closeCtrl.removeEventListener('click', closeMenu);
    navEl.classList.remove('menu--open');
    revealer.reveal({
      bgcolor: '#d4d4d4',
      duration: 400, 
      easing: 'easeInOutCubic',
      onCover: function(contentEl, revealerEl) {
        navEl.classList.remove('menu--open');
        contentEl.style.opacity = 0;
      }
    });
  }
})();
    
  // Modal in navbar animation

(function() {
  var modalEl = document.querySelector('.modal-box'),
    revealer = new RevealFx(modalEl),
    deleteCtrl = modalEl.querySelector('.btn--default'),
    closeCtrl = modalEl.querySelector('.btn--modal-close');

  document.querySelector('.btn--modal-open').addEventListener('click', function() {
    modalEl.classList.add('modal--open');
    revealer.reveal({
      bgcolor: '#ffe599',
      direction: 'tb',
      duration: 400, 
      easing: 'easeOutCirc',
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      },
      onComplete: function() {
        closeCtrl.addEventListener('click', closeModal);
        deleteCtrl.addEventListener('click', closeModal);
      }
    });
  });

  function closeModal(ev) {
    closeCtrl.removeEventListener('click', closeModal);
    deleteCtrl.removeEventListener('click', closeModal);
    modalEl.classList.remove('modal--open');
    revealer.reveal({
      bgcolor: ev.target.classList.contains('btn--modal-close') ? '#d4d4d4' : '#ffffff',
      direction: 'bt',
      duration: ev.target.classList.contains('btn--modal-close') ? 200 : 400, 
      easing: 'easeOutCirc',
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 0;
      },
      onComplete: function() {
        modalEl.classList.remove('modal--open');
      }
    });
  }
})();
    
 // More information about animation

(function() {
  var formEl = document.querySelector('section.form'),
    revealer = new RevealFx(formEl),
    closeCtrl = formEl.querySelector('.form__close');

  document.querySelector('.btn--form-open').addEventListener('click', function() {
    revealer.reveal({
      bgcolor: '#ffe599',
      direction: 'bt',
      duration: 600,
      onCover: function(contentEl, revealerEl) {
        formEl.classList.add('form--open');
        contentEl.style.opacity = 1;

      },
      onComplete: function() {
        closeCtrl.addEventListener('click', closeForm);
      }
    });
  });

  function closeForm() {
    closeCtrl.removeEventListener('click', closeForm);
    formEl.classList.remove('form--open');
    revealer.reveal({
      bgcolor: '#d4d4d4',
      direction: 'tb',
      duration: 600, 
      onCover: function(contentEl, revealerEl) {
        formEl.classList.remove('form--open');
        contentEl.style.opacity = 0;
      }
    });
  }
})();

 // 2D/3D picture animation

(function() {
  var navEl = document.querySelector('div.three-d'),
    revealer = new RevealFx(navEl);

  document.querySelector('.btn--menu-img').addEventListener('click', function() {
    revealer.reveal({
      bgcolor: '#d4d4d4',
      duration: 1000, 
      easing: 'easeInOutCubic',
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    });
  });
  document.querySelector('.btn--close-img').addEventListener('click', function() {
    revealer.reveal({
      bgcolor: '#d4d4d4',
      duration: 1000, 
      easing: 'easeInOutCubic',
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 0;
      }
    });
  });
})();

(function() {
  var navEl = document.querySelector('div.two-d'),
    revealer = new RevealFx(navEl);

  document.querySelector('.btn--close-img').addEventListener('click', function() {
    revealer.reveal({
      bgcolor: '#d4d4d4',
      duration: 1000, 
      easing: 'easeInOutCubic',
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 1;
      }
    });
  });
  document.querySelector('.btn--menu-img').addEventListener('click', function() {
    revealer.reveal({
      bgcolor: '#d4d4d4',
      duration: 1000, 
      easing: 'easeInOutCubic',
      onCover: function(contentEl, revealerEl) {
        contentEl.style.opacity = 0;
      }
    });
  });

})();

// Here i break script (animation) for mobile devices 

  function detectmob() {
    if(window.innerWidth <= 699 || window.innerHeight <= 600) {
      return true;
    } else {
      return false;
    }
 }
 
 if (detectmob()){
  document.getElementById('rev-1').id = 'rev-2';
 }
