// selecting the target container
const targetElement = document.getElementById('target');

// extracting browser name and version using standard BOM layout features
const browserName = navigator.appName;
const browserVersion = navigator.appVersion;

// detecting operating system from userAgent string
let osName = 'Unknown OS';
if (navigator.userAgent.indexOf('Win') !== -1) osName = 'Windows';
if (navigator.userAgent.indexOf('Mac') !== -1) osName = 'MacOS';
if (navigator.userAgent.indexOf('Linux') !== -1) osName = 'Linux';
if (navigator.userAgent.indexOf('Android') !== -1) osName = 'Android';
if (navigator.userAgent.indexOf('like Mac') !== -1) osName = 'iOS';

// extracting total screen and available screen dimension bounds
const screenWidth = screen.width;
const screenHeight = screen.height;
const availWidth = screen.availWidth;
const availHeight = screen.availHeight;

// setup the date and time
const now = new Date();

//format date example output: "26. Oct. 2026"
const finnishDate = new Intl.DateTimeFormat('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}).format(now);

//format time showing only hours and minutes
const finnishTime = new Intl.DateTimeFormat('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
}).format(now);

// Building the structural paragraph markut blocks
const contentHTML = `
  <p><b>Browser:</b> ${browserName} ${browserVersion}</p>
  <p><b>Operating System:</b> ${osName}</p>
  <p><b>Screen Resolution:</b> ${screenWidth} x ${screenHeight}</p>
  <p><b>Available Screen Space:</b> ${availWidth} x ${availHeight}</p>
  <p><b>Date:</b> ${finnishDate}</p>
  <p><b>Time:</b> ${finnishTime}</p>
`;

// rendering the content into the target div element in the DOM
targetElement.innerHTML = contentHTML;
