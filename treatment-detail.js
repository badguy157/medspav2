// Treatment Detail Page Dynamic Loader
// This script loads treatment data and populates the page sections

(function() {
  'use strict';

  // Find the main container with data-treatment attribute
  const mainContainer = document.querySelector('[data-treatment]');
  
  if (!mainContainer) {
    console.warn('[Treatment Detail] No element with data-treatment attribute found');
    return;
  }

  const slug = mainContainer.getAttribute('data-treatment');
  
  if (!slug) {
    console.warn('[Treatment Detail] data-treatment attribute is empty');
    showWarning('Missing treatment slug. Please configure data-treatment attribute.');
    return;
  }

  // Check if data is loaded
  if (typeof window.TREATMENT_DETAIL_DATA === 'undefined') {
    console.error('[Treatment Detail] TREATMENT_DETAIL_DATA not loaded');
    showWarning('Treatment data not loaded. Please ensure treatment-detail-data.js is included.');
    return;
  }

  const treatmentData = window.TREATMENT_DETAIL_DATA[slug];
  
  if (!treatmentData) {
    console.warn('[Treatment Detail] No data found for slug:', slug);
    showWarning('No treatment data found for: ' + slug);
    return;
  }

  // Populate the page with treatment data
  populatePage(treatmentData, slug);

  /**
   * Populate all sections of the treatment page
   */
  function populatePage(data, slug) {
    try {
      // Hero section
      updateHeroSection(data);
      
      // Who it's for section
      updateWhoForSection(data);
      
      // Process section
      updateProcessSection(data);
      
      // Timeline section
      updateTimelineSection(data);
      
      // FAQ section
      updateFaqSection(data);
      
      // Testimonial section
      updateTestimonialSection(data);
      
      // Bottom CTA section
      updateBottomCta(data, slug);
      
      console.log('[Treatment Detail] Page populated successfully for:', slug);
    } catch (error) {
      console.error('[Treatment Detail] Error populating page:', error);
      showWarning('Error loading treatment content: ' + error.message);
    }
  }

  /**
   * Update hero section (title and tagline)
   */
  function updateHeroSection(data) {
    const title = document.getElementById('treatmentTitle');
    const tagline = document.getElementById('treatmentTagline');
    
    if (title) title.textContent = data.title;
    if (tagline) tagline.textContent = data.tagline;
  }

  /**
   * Update "Who it's for" section
   */
  function updateWhoForSection(data) {
    const container = document.getElementById('whoForGrid');
    if (!container || !data.whoFor || data.whoFor.length === 0) return;
    
    container.innerHTML = '';
    
    data.whoFor.forEach(item => {
      const div = document.createElement('div');
      div.className = 'trust-item';
      div.innerHTML = `
        <div class="trust-item__icon">✨</div>
        <h3 class="trust-item__title">${escapeHtml(item.title)}</h3>
        <p class="trust-item__text">${escapeHtml(item.description)}</p>
      `;
      container.appendChild(div);
    });
  }

  /**
   * Update process section (steps)
   */
  function updateProcessSection(data) {
    const container = document.getElementById('processSteps');
    if (!container || !data.process || data.process.length === 0) return;
    
    container.innerHTML = '';
    
    data.process.forEach((step, index) => {
      const div = document.createElement('div');
      div.className = 'step';
      div.innerHTML = `
        <div class="step__number">${index + 1}</div>
        <div class="step__content">
          <h3 class="step__title">${escapeHtml(step.title)}</h3>
          <p class="step__text">${escapeHtml(step.description)}</p>
        </div>
      `;
      container.appendChild(div);
    });
  }

  /**
   * Update timeline & results section
   */
  function updateTimelineSection(data) {
    const container = document.getElementById('timelineList');
    if (!container || !data.timeline || data.timeline.length === 0) return;
    
    container.innerHTML = '';
    
    data.timeline.forEach(item => {
      const div = document.createElement('div');
      div.className = 'faq-item';
      div.innerHTML = `
        <h3 class="faq-item__question">${escapeHtml(item.title)}</h3>
        <p class="faq-item__answer">${escapeHtml(item.description)}</p>
      `;
      container.appendChild(div);
    });
  }

  /**
   * Update FAQ section
   */
  function updateFaqSection(data) {
    const container = document.getElementById('faqList');
    if (!container || !data.faqs || data.faqs.length === 0) return;
    
    container.innerHTML = '';
    
    data.faqs.forEach(faq => {
      const div = document.createElement('div');
      div.className = 'faq-item';
      div.innerHTML = `
        <h3 class="faq-item__question">${escapeHtml(faq.q)}</h3>
        <p class="faq-item__answer">${escapeHtml(faq.a)}</p>
      `;
      container.appendChild(div);
    });
  }

  /**
   * Update testimonial section
   */
  function updateTestimonialSection(data) {
    const container = document.getElementById('testimonialBlock');
    if (!container || !data.testimonial) return;
    
    const testimonial = data.testimonial;
    container.innerHTML = `
      <p class="social-proof-testimonial__quote">"${escapeHtml(testimonial.quote)}"</p>
      <p class="social-proof-testimonial__author">${escapeHtml(testimonial.name)}</p>
      <p class="social-proof-testimonial__treatment">${escapeHtml(testimonial.label)}</p>
    `;
  }

  /**
   * Update bottom CTA section
   */
  function updateBottomCta(data, slug) {
    const container = document.getElementById('bottomCta');
    if (!container) return;
    
    // Generate CTA copy based on treatment
    const ctaHeadline = `Ready for ${data.title.toLowerCase()}?`;
    const ctaSubtext = getCtaSubtext(slug);
    const bookingUrl = `book.html?treatment=${slug}`;
    
    container.innerHTML = `
      <h2>${escapeHtml(ctaHeadline)}</h2>
      <p class="section__subtitle">${escapeHtml(ctaSubtext)}</p>
      <div class="mt-xl">
        <a href="${escapeHtml(bookingUrl)}" class="btn btn--primary btn--large">Request a consultation</a>
      </div>
    `;
  }

  /**
   * Get appropriate CTA subtext for each treatment
   */
  function getCtaSubtext(slug) {
    const ctaMap = {
      'botox': 'Book your consultation today and see natural results in just one week.',
      'lip-filler': 'Book your consultation today and see immediate, natural-looking results.',
      'cheek-filler': 'Book your consultation today and see immediate, beautiful results.',
      'under-eye-filler': 'Book your consultation today and look refreshed and well-rested.',
      'jawline-filler': 'Book your consultation today and see a more defined profile.',
      'chemical-peel': 'Book your consultation today and see fresh, glowing results.',
      'microneedling': 'Book your consultation and start your journey to better skin texture.',
      'laser-resurfacing': 'Book your consultation and discover dramatically younger-looking skin.',
      'hydrating-facial': 'Book your treatment today and reveal radiant, dewy skin.',
      'led-therapy': 'Book your first session today and start your journey to clearer, healthier skin.',
      'coolsculpt': 'Book your consultation today and start sculpting your ideal body.',
      'rf-body-tightening': 'Book your consultation today and discover tighter, smoother skin.',
      'muscle-toning': 'Book your consultation today and start building stronger, more defined muscles.'
    };
    
    return ctaMap[slug] || 'Book your consultation today and start your transformation.';
  }

  /**
   * Show warning message (for demo purposes)
   */
  function showWarning(message) {
    const warning = document.createElement('div');
    warning.style.cssText = `
      position: fixed;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      background: #fff3cd;
      color: #856404;
      padding: 12px 24px;
      border: 1px solid #ffeaa7;
      border-radius: 4px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      z-index: 9999;
      font-size: 14px;
      max-width: 90%;
    `;
    warning.textContent = '⚠️ ' + message;
    document.body.appendChild(warning);
    
    setTimeout(() => {
      warning.remove();
    }, 5000);
  }

  /**
   * Escape HTML to prevent XSS
   */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
})();
