declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export function trackFormSubmitted(formType: 'contact' | 'quote', service?: string) {
  trackEvent('form_submitted', { form_type: formType, ...(service && { service }) });
}

export function trackQuoteStep(stepNumber: number, stepName: string, serviceType?: string) {
  trackEvent('quote_step_completed', {
    step_number: stepNumber,
    step_name: stepName,
    ...(serviceType && { service_type: serviceType }),
  });
}

export function trackWhatsAppClick() {
  trackEvent('whatsapp_clicked', { location: 'floating_button' });
}

export function trackPhoneClick(location: string) {
  trackEvent('phone_clicked', { location });
}

export function trackCtaClick(buttonText: string, location: string) {
  trackEvent('cta_clicked', { button_text: buttonText, location });
}
