// Function to generate a unique user ID
function getUserId() {
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = 'user-' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('userId', userId);
  }
  return userId;
}

// Function to track website visits
function trackWebsiteVisits() {
  let visits = localStorage.getItem('websiteVisits') || 0;
  visits++;
  localStorage.setItem('websiteVisits', visits);

  const userId = getUserId();
  console.log(`Website has been visited ${visits} times by user ${userId}.`);

  // Send user ID and visit count to a server (e.g., using fetch or XMLHttpRequest)
  sendVisitData(userId, visits);
}

// Function to send visit data to a server
function sendVisitData(userId, visits) {
  fetch('/track-visits', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId, visits })
  })
  .then(response => {
    if (response.ok) {
      console.log('Visit data sent successfully.');
    } else {
      console.error('Failed to send visit data.');
    }
  })
  .catch(error => {
    console.error('Error sending visit data:', error);
  });
}

// Call the trackWebsiteVisits function whenever the page is loaded
window.addEventListener('load', trackWebsiteVisits);
