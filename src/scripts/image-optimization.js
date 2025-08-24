// Advanced Progressive Image Loading with Performance Optimization
class ImageOptimizer {
  constructor() {
    this.loadedImages = 0;
    this.totalImages = 0;
    this.init();
  }

  init() {
    // Count all images that need optimization - EXCLUDE GALLERY IMAGES
    this.totalImages = document.querySelectorAll('img[loading="lazy"], img[data-lazy]').length;
    
    // EXCLUDE gallery images from optimization
    const galleryImages = document.querySelectorAll('.gallery-item img');
    this.totalImages -= galleryImages.length;
    
    // Set up intersection observer for lazy loading
    this.setupLazyLoading();
    
    // Optimize all images for Core Web Vitals
    this.optimizeAllImages();
    
    // Add loading states for better UX
    this.setupLoadingStates();
    
    console.log(`🖼️ Image Optimizer: ${this.totalImages} images found (gallery excluded)`);
  }

  setupLazyLoading() {
    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers
      this.loadAllImagesImmediately();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '200px 0px', // Start loading 200px before entering viewport
      threshold: 0.01
    });

    // Observe all lazy images - EXCLUDE GALLERY IMAGES
    document.querySelectorAll('img[loading="lazy"], img[data-lazy]').forEach(img => {
      // Skip gallery images completely
      if (img.closest('.gallery-item')) {
        return;
      }
      observer.observe(img);
    });
  }

  loadImage(img) {
    const targetSrc = img.dataset.src || img.src;
    
    if (!targetSrc) return;

    // Add loading state
    img.classList.add('loading');
    
    // Create new image for preloading
    const tempImg = new Image();
    
    tempImg.onload = () => {
      img.src = targetSrc;
      img.classList.remove('loading');
      img.classList.add('loaded');
      
      // Update parent containers
      const container = img.closest('.hero-image-container, .gallery-item, .optimized-image');
      if (container) {
        container.classList.add('loaded');
      }
      
      this.loadedImages++;
      this.trackProgress();
    };
    
    tempImg.onerror = () => {
      console.warn('Image failed to load:', targetSrc);
      img.classList.remove('loading');
      img.classList.add('error');
    };
    
    tempImg.src = targetSrc;
  }

  optimizeAllImages() {
    document.querySelectorAll('img').forEach((img, index) => {
      // SKIP ALL GALLERY IMAGES FROM OPTIMIZATION
      if (img.closest('.gallery-item')) {
        return;
      }
      
      // Add loading="lazy" to images without it (except critical images)
      if (!img.hasAttribute('loading') && !img.hasAttribute('data-critical')) {
        img.loading = 'lazy';
      }
      
      // Mark critical images for immediate loading
      if (img.hasAttribute('data-critical') || img.closest('.hero-image, .critical-image')) {
        img.loading = 'eager';
        img.fetchPriority = 'high';
      }
      
      // Add error handling
      img.addEventListener('error', this.handleImageError.bind(this));
    });
  }

  setupLoadingStates() {
    // Add CSS loading states
    const style = document.createElement('style');
    style.textContent = `
      img.loading {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      
      img.error {
        background: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
    document.head.appendChild(style);
  }

  handleImageError(event) {
    const img = event.target;
    
    // Try JPEG fallback if WebP fails
    if (img.src.includes('.webp')) {
      const fallbackSrc = img.src.replace('.webp', '.jpg');
      console.log('WebP failed, trying JPEG:', fallbackSrc);
      img.src = fallbackSrc;
    }
  }

  loadAllImagesImmediately() {
    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll('img[loading="lazy"], img[data-lazy]').forEach(img => {
      this.loadImage(img);
    });
  }

  trackProgress() {
    const progress = Math.round((this.loadedImages / this.totalImages) * 100);
    console.log(`📈 Image loading: ${progress}% (${this.loadedImages}/${this.totalImages})`);
    
    // Dispatch event when all images are loaded
    if (this.loadedImages === this.totalImages) {
      document.dispatchEvent(new CustomEvent('imagesOptimized', {
        detail: { totalImages: this.totalImages }
      }));
      console.log('🎉 All images optimized and loaded!');
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ImageOptimizer();
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