// =====================================================
// BP CLEANING - GA4 EVENT TRACKING
// =====================================================
// Traccia: form contatti, form preventivo, click telefono,
// click email, click WhatsApp, click CTA, pagine servizi, scroll 50%
// =====================================================

(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTracking);
  } else {
    initTracking();
  }

  function initTracking() {
    if (typeof gtag !== 'function') {
      console.warn('[BP Tracking] gtag non trovato.');
      return;
    }

    console.log('[BP Tracking] Inizializzazione tracking eventi...');

    // Usa event delegation per tutti i click (funziona anche con navigazione Next.js)
    document.addEventListener('click', handleClick);

    // Form submissions
    document.addEventListener('submit', handleFormSubmit);

    // Scroll depth
    trackScrollDepth();

    // Service page view (al caricamento iniziale)
    trackServicePageView();

    // Observer per navigazione client-side di Next.js
    observeRouteChanges();

    console.log('[BP Tracking] Tutti gli eventi sono attivi.');
  }

  function handleClick(e) {
    // TELEFONO
    var phoneLink = e.target.closest('a[href^="tel:"]');
    if (phoneLink) {
      gtag('event', 'click_phone', {
        phone_number: phoneLink.href.replace('tel:', ''),
        page_location: window.location.pathname,
        link_text: phoneLink.textContent.trim().substring(0, 50)
      });
      console.log('[BP Tracking] click_phone');
      return;
    }

    // EMAIL
    var emailLink = e.target.closest('a[href^="mailto:"]');
    if (emailLink) {
      gtag('event', 'click_email', {
        email_address: emailLink.href.replace('mailto:', ''),
        page_location: window.location.pathname
      });
      console.log('[BP Tracking] click_email');
      return;
    }

    // WHATSAPP
    var waLink = e.target.closest('a[href*="wa.me"], a[href*="whatsapp"]');
    if (waLink) {
      gtag('event', 'click_whatsapp', {
        page_location: window.location.pathname,
        link_url: waLink.href.substring(0, 100)
      });
      console.log('[BP Tracking] click_whatsapp');
      return;
    }

    // CTA BUTTONS (arancioni e teal)
    var ctaBtn = e.target.closest(
      'a[class*="bg-[#f97316]"], button[class*="bg-[#f97316]"], ' +
      'a[class*="bg-[#0d9488]"], button[class*="bg-[#0d9488]"]'
    );
    if (ctaBtn) {
      if (ctaBtn.type === 'submit' && ctaBtn.closest('form')) return;
      gtag('event', 'click_cta', {
        button_text: ctaBtn.textContent.trim().substring(0, 50),
        button_url: (ctaBtn.href || '').substring(0, 100),
        page_location: window.location.pathname
      });
      console.log('[BP Tracking] click_cta:', ctaBtn.textContent.trim().substring(0, 30));
    }
  }

  function handleFormSubmit(e) {
    var form = e.target;
    if (form.tagName !== 'FORM') return;

    var page = window.location.pathname;
    var eventName = 'form_submit';
    var formType = 'generico';

    if (page.indexOf('contatti') !== -1) {
      eventName = 'form_submit_contact';
      formType = 'contatto';
    } else if (page.indexOf('preventivo') !== -1) {
      eventName = 'form_submit_quote';
      formType = 'preventivo';
    }

    var serviceSelect = form.querySelector('select');
    var serviceValue = serviceSelect ? serviceSelect.value : 'non specificato';

    gtag('event', eventName, {
      form_type: formType,
      form_page: page,
      service_requested: serviceValue
    });
    console.log('[BP Tracking]', eventName, '- Servizio:', serviceValue);
  }

  function trackServicePageView() {
    var path = window.location.pathname;
    if (path.indexOf('/servizi/') !== -1) {
      var serviceName = path.split('/servizi/')[1];
      if (serviceName) {
        serviceName = serviceName.replace(/-/g, ' ').replace(/\/$/, '');
        gtag('event', 'view_service', {
          service_name: serviceName,
          page_location: path
        });
        console.log('[BP Tracking] view_service:', serviceName);
      }
    }
  }

  function trackScrollDepth() {
    var scrollTracked = false;
    window.addEventListener('scroll', function () {
      if (scrollTracked) return;
      var pct = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
      if (pct >= 0.5) {
        scrollTracked = true;
        gtag('event', 'scroll_50', {
          page_location: window.location.pathname,
          page_title: document.title
        });
        console.log('[BP Tracking] scroll_50');
      }
    });
  }

  // Next.js usa navigazione client-side, quindi devo re-triggerare
  // il tracking delle pagine servizi quando cambia la URL
  function observeRouteChanges() {
    var lastPath = window.location.pathname;
    var scrollTracked = false;

    // Controlla ogni 500ms se la URL e' cambiata (Next.js client navigation)
    setInterval(function() {
      var currentPath = window.location.pathname;
      if (currentPath !== lastPath) {
        lastPath = currentPath;
        scrollTracked = false;

        // Re-track service page views
        if (currentPath.indexOf('/servizi/') !== -1) {
          var serviceName = currentPath.split('/servizi/')[1];
          if (serviceName) {
            serviceName = serviceName.replace(/-/g, ' ').replace(/\/$/, '');
            gtag('event', 'view_service', {
              service_name: serviceName,
              page_location: currentPath
            });
            console.log('[BP Tracking] view_service (nav):', serviceName);
          }
        }
      }
    }, 500);
  }

})();
