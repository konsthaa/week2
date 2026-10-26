// selecting the target container
const targetElement = document.getElementById('target');

// Extracting clean browser name and version from userAgent
const ua = navigator.userAgent;
let browserName = 'Unknown Browser';
let browserVersion = '';

if (ua.includes('Firefox/')) {
  browserName = 'Mozilla Firefox';
  browserVersion = ua.split('Firefox/')[1].split(' ')[0];
} else if (ua.includes('Edg/')) {
  browserName = 'Microsoft Edge';
  browserVersion = ua.split('Edg/')[1].split(' ')[0];
} else if (ua.includes('Chrome/')) {
  browserName = 'Google Chrome';
  browserVersion = ua.split('Chrome/')[1].split(' ')[0];
} else if (ua.includes('Safari/') && !ua.includes('Chrome')) {
  browserName = 'Apple Safari';
  browserVersion = ua.split('Version/')[1]?.split(' ')[0] || '';
}

// detecting operating system from userAgent string
let osName = 'Unknown OS';
if (ua.includes('Win')) osName = 'Windows';
else if (ua.includes('Mac')) osName = 'MacOS';
else if (ua.includes('Linux')) osName = 'Linux';
else if (ua.includes('Android')) osName = 'Android';
else if (ua.includes('like Mac')) osName = 'iOS';

// extracting total screen and available screen dimension bounds
const screenWidth = screen.width;
const screenHeight = screen.height;
const availWidth = screen.availWidth;
const availHeight = screen.availHeight;

// setup the date and time with Finnish localization
const now = new Date();

const finnishDate = new Intl.DateTimeFormat('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}).format(now);

const finnishTime = new Intl.DateTimeFormat('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
}).format(now);

// Building the structural paragraph markup blocks (each in its own <p>)
const contentHTML = `
  <p><b>Browser:</b> ${browserName}, ${browserVersion}</p>
  <p><b>Operating System:</b> ${osName}</p>
  <p><b>Screen Width & Height:</b> ${screenWidth} x ${screenHeight}</p>
  <p><b>Available Screen Space:</b> ${availWidth} x ${availHeight}</p>
  <p><b>Date:</b> ${finnishDate}</p>
  <p><b>Time:</b> ${finnishTime}</p>
`;

// rendering the content into the target div element in the DOM
targetElement.innerHTML = contentHTML;
