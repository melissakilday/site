// Progressive image loading with blur-up effect
document.addEventListener('DOMContentLoaded', () => {
  // Get all images that should be lazy loaded
  const lazyImages = document.querySelectorAll('img[data-lazy]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.src;
        
        if (src) {
          // Create a new image to preload
          const tempImg = new Image();
          
          tempImg.onload = () => {
            // Add loaded class for smooth transition
            img.src = src;
            img.classList.add('loaded');
            
            // Remove the data attributes
            delete img.dataset.src;
            delete img.dataset.lazy;
          };
          
          tempImg.src = src;
        }
        
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });
  
  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
  
  // Add loading="lazy" to all images without it
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.loading = 'lazy';
  });
});

// Image format detection and WebP support
const supportsWebP = (() => {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('image/webp') === 0;
})();

// Add WebP class to body if supported
if (supportsWebP) {
  document.body.classList.add('webp-supported');
}