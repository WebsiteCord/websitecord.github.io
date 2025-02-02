// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the server name from the "name" parameter
const serverName = urlParams.get('name');

// Get the "Join Now" button and update the href
const joinButton = document.querySelector('.cta');
joinButton.href = urlParams.get('url');

// Get the features from the URL parameters
const feature1 = urlParams.get('1f');
const feature2 = urlParams.get('2f');
const feature3 = urlParams.get('3f');
const feature4 = urlParams.get('4f');

console.log(serverName);

// Update the features section
const featuresSection = document.getElementById('features');
featuresSection.innerHTML = `
  <h2>Features</h2>
  <ul>
    <li>${feature1}</li>
    <li>${feature2}</li>
    <li>${feature3}</li>
    <li>${feature4}</li>
  </ul>
`;

// Get the about us content from the "about" parameter
const aboutSection = document.getElementById('about');
aboutSection.innerHTML = `
  <h2>About Us</h2>
  <p>${urlParams.get('about')}</p>
`;

// Update the server name in the header
const headerTitle = document.querySelector('header h1');
headerTitle.textContent = `Welcome to ${serverName}`;
