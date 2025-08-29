// Enhanced Local Search Detection & Optimization for Hair By Melissa
// GEO optimization for "near me" queries and local search visibility
(function() {
  'use strict';
  
  // Detect user location for hyper-local optimization
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const userLat = position.coords.latitude;
      const userLon = position.coords.longitude;
      const salonLat = -36.6173;
      const salonLon = 174.4829;
      
      // Calculate distance for local relevance signals
      const distance = calculateDistance(userLat, userLon, salonLat, salonLon);
      
      // Send local relevance signals to analytics (when implemented)
      if (window.gtag && distance < 50) { // Within 50km
        gtag('event', 'local_user_detected', {
          'custom_parameter_1': 'within_service_area',
          'distance_km': Math.round(distance)
        });
      }
      
      // Dynamic local content based on proximity
      if (distance < 25) { // Primary service area
        document.body.classList.add('local-user');
        
        // Show priority booking CTA for local users
        const bookingButtons = document.querySelectorAll('.btn-primary');
        bookingButtons.forEach(button => {
          if (button.textContent.includes('Book')) {
            button.innerHTML = '📍 Book Local Appointment ' + button.innerHTML.replace('Book', '').replace('📍', '');
          }
        });
        
        // Add local user indicators
        const localIndicators = document.querySelectorAll('.local-indicator');
        localIndicators.forEach(indicator => {
          indicator.style.display = 'block';
        });
      }
      
      // Enhanced local signals for search engines
      const localMeta = document.createElement('meta');
      localMeta.name = 'user-location-detected';
      localMeta.content = distance < 25 ? 'within-service-area' : 'extended-area';
      document.head.appendChild(localMeta);
      
    }, function(error) {
      // Graceful fallback - no geolocation detection
      console.log('Geolocation not available or denied');
    }, {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 300000 // 5 minutes
    });
  }
  
  // Calculate distance between two coordinates (Haversine formula)
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180);
  }
  
  // Voice search and "near me" query optimization
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    // Listen for voice search patterns
    window.addEventListener('load', function() {
      // Add voice search indicators for supporting browsers
      document.body.classList.add('voice-search-supported');
    });
  }
  
  // Enhanced local search intent detection
  const searchTerms = [
    'hair salon near me',
    'hairdresser near me', 
    'keratin treatment near me',
    'balayage near me',
    'hair coloring kaukapakapa',
    'best hairdresser helensville'
  ];
  
  // Monitor for local search intent in referrer or URL parameters
  const referrer = document.referrer;
  const urlParams = new URLSearchParams(window.location.search);
  
  searchTerms.forEach(term => {
    if (referrer.includes(term.replace(/\s+/g, '+')) || 
        urlParams.get('q')?.includes(term)) {
      
      // Mark as local search traffic
      document.body.classList.add('local-search-traffic');
      
      // Enhanced tracking for local search conversions
      if (window.gtag) {
        gtag('event', 'local_search_landing', {
          'search_term': term,
          'traffic_source': 'organic_local_search'
        });
      }
    }
  });
  
  // Local business hours and availability display
  function updateLocalBusinessHours() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();
    
    // Business hours: Tue-Fri 9-17, Sat 9-15, Closed Sun-Mon
    let isOpen = false;
    let nextOpen = '';
    
    if (day >= 2 && day <= 5) { // Tuesday to Friday
      isOpen = hour >= 9 && hour < 17;
      if (!isOpen && hour < 9) nextOpen = 'Opens at 9:00 AM today';
      else if (!isOpen && hour >= 17) nextOpen = 'Opens tomorrow at 9:00 AM';
    } else if (day === 6) { // Saturday
      isOpen = hour >= 9 && hour < 15;
      if (!isOpen && hour < 9) nextOpen = 'Opens at 9:00 AM today';
      else if (!isOpen && hour >= 15) nextOpen = 'Opens Tuesday at 9:00 AM';
    } else { // Sunday or Monday
      nextOpen = 'Opens Tuesday at 9:00 AM';
    }
    
    // Update business hours display elements
    const hoursElements = document.querySelectorAll('.business-hours-status');
    hoursElements.forEach(element => {
      if (isOpen) {
        element.textContent = '✅ Open Now';
        element.className = 'business-hours-status open';
      } else {
        element.textContent = nextOpen;
        element.className = 'business-hours-status closed';
      }
    });
    
    // Add structured data signal
    const hoursSignal = document.createElement('meta');
    hoursSignal.name = 'business-status';
    hoursSignal.content = isOpen ? 'open' : 'closed';
    document.head.appendChild(hoursSignal);
  }
  
  // Initialize business hours on page load
  updateLocalBusinessHours();
  
  // Local community engagement tracking
  function trackLocalEngagement() {
    // Track clicks on local area links
    const locationLinks = document.querySelectorAll('a[href*="/locations/"]');
    locationLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.gtag) {
          gtag('event', 'location_page_click', {
            'location': this.href.split('/').pop(),
            'page': window.location.pathname
          });
        }
      });
    });
    
    // Track local service area interactions
    const serviceAreaElements = document.querySelectorAll('[itemscope][itemtype*="Place"]');
    serviceAreaElements.forEach(element => {
      element.addEventListener('click', function() {
        const placeName = this.querySelector('[itemprop="name"]')?.textContent;
        if (placeName && window.gtag) {
          gtag('event', 'service_area_interaction', {
            'place_name': placeName,
            'interaction_type': 'click'
          });
        }
      });
    });
  }
  
  // Initialize tracking when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackLocalEngagement);
  } else {
    trackLocalEngagement();
  }
  
})();