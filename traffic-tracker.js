// Function to track website visits
function trackWebsiteVisits() {
  let visits = localStorage.getItem('websiteVisits') || 0;
  visits++;
  localStorage.setItem('websiteVisits', visits);
  console.log(`Website has been visited ${visits} times.`);
}

// Call the trackWebsiteVisits function whenever the page is loaded
window.addEventListener('load', trackWebsiteVisits);
