  //register the service worker

  if ('serviceWorker' in navigator) {
      if (!navigator.serviceWorker.controller) { return; }

      navigator.serviceWorker.register('sw.js').then(function(reg) {

          if (reg.active) {
              console.log('Service worker active');
          }

      }).catch(function(error) {
          // registration failed
          console.log('Registration failed with ' + error);
      });

  }