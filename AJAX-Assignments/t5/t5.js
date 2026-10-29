'use strict';

const apiURL = 'https://media2.edu.metropolia.fi/restaurant/api/v1';

// Viittaukset DOM-elementteihin
const tableElem = document.querySelector('table');
const dialogElem = document.querySelector('dialog');

// Sulje modaali klikattaessa taustaa tai dialogia
dialogElem.addEventListener('click', (event) => {
  dialogElem.close();
});

// Yleiskäyttöinen fetch-funktio virheenkäsittelyllä
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
}

// Haetaan ja renderöidään ravintolat taulukkoon
async function initRestaurants() {
  try {
    const restaurants = await fetchData(`${apiURL}/restaurants`);

    // Lajitellaan ravintolat aakkosjärjestykseen nimen mukaan (valinnainen, mutta siisti)
    restaurants.sort((a, b) => a.name.localeCompare(b.name));

    for (const restaurant of restaurants) {
      const tableRow = document.createElement('tr');
      const nameCell = document.createElement('td');
      const addressCell = document.createElement('td');

      nameCell.textContent = restaurant.name;
      addressCell.textContent = restaurant.address;

      tableRow.append(nameCell);
      tableRow.append(addressCell);
      tableElem.append(tableRow);

      // Klikkitapahtuma ravintolalle
      tableRow.addEventListener('click', async () => {
        // Nollataan dialogin sisältö ja näytetään latausteksti
        dialogElem.innerHTML = `<h3>${restaurant.name}</h3><p>${restaurant.address}, ${restaurant.postalCode} ${restaurant.city}</p><hr><p>Loading menu...</p>`;
        dialogElem.showModal();

        try {
          // Haetaan päivän menu englanniksi (tai 'fi')
          const menuData = await fetchData(`${apiURL}/restaurants/daily/${restaurant._id}/en`);

          // Tyhjennetään dialogi ja luodaan uusi sisältö tiedoilla ja menulla
          dialogElem.innerHTML = '';

          const title = document.createElement('h3');
          title.textContent = restaurant.name;

          const details = document.createElement('p');
          details.textContent = `${restaurant.address}, ${restaurant.postalCode} ${restaurant.city} | Phone: ${restaurant.phone || 'N/A'}`;

          const menuHeading = document.createElement('h4');
          menuHeading.textContent = "Today's Menu:";

          dialogElem.append(title);
          dialogElem.append(details);
          dialogElem.append(menuHeading);

          if (menuData.courses && menuData.courses.length > 0) {
            for (const course of menuData.courses) {
              const courseDiv = document.createElement('div');
              courseDiv.classList.add('menu-item');

              const courseName = document.createElement('strong');
              courseName.textContent = course.name;

              const courseDetails = document.createElement('p');
              courseDetails.style.margin = '4px 0 0 0';
              courseDetails.textContent = `${course.price || ''} (${course.diets || ''})`;

              courseDiv.append(courseName);
              courseDiv.append(courseDetails);
              dialogElem.append(courseDiv);
            }
          } else {
            const noMenu = document.createElement('p');
            noMenu.textContent = 'No menu available for today.';
            dialogElem.append(noMenu);
          }

        } catch (menuError) {
          // Virheenkäsittely menun haussa
          dialogElem.innerHTML = `
            <h3>${restaurant.name}</h3>
            <p>${restaurant.address}, ${restaurant.postalCode} ${restaurant.city}</p>
            <hr>
            <p style="color: red;">Could not load the menu for this restaurant.</p>
          `;
        }
      });
    }
  } catch (error) {
    console.error('Failed to load restaurants:', error);
    const errorRow = document.createElement('tr');
    const errorCell = document.createElement('td');
    errorCell.colSpan = 2;
    errorCell.style.color = 'red';
    errorCell.textContent = 'Failed to load restaurants. Please check your network connection or VPN.';
    errorRow.append(errorCell);
    tableElem.append(errorRow);
  }
}

// Käynnistetään sovellus
initRestaurants();

// Vaihtoehtoinen TAPA silmukalle
// restaurants.forEach((restaurant) => {
//   const tableRow = document.createElement('tr');
//   const nameCell = document.createElement('td');
//   const addressCell = document.createElement('td');
//   tableElem.append(tableRow);
//   tableRow.append(nameCell);
//   tableRow.append(addressCell);
//   nameCell.textContent = restaurant.name;
//   addressCell.textContent = restaurant.address;
// });
