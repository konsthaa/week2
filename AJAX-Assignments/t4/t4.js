'use strict';

// Yleiskäyttöinen fetch-funktio
async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, options);

    // Jos vastaus ei ole ok, heitetään virhe tilakoodin kanssa
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    // Muutetaan vastaus JSON-muotoon ja palautetaan data
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error; // Heitetään virhe tarvittaessa eteenpäin
  }
}

// Esimerkki 1: GET-pyynnön tekeminen yleisfunktiolla
async function runGetExample() {
  console.log('Running GET request...');
  const data = await fetchData('https://reqres.in/api/users/1', {
    headers: {
      'x-api-key': 'free_user_3LMJPRJ6YWfC1g9qVAKGvmy34zh',
    },
  });
  console.log('GET Result:', data);
}

// Esimerkki 2: POST-pyynnön tekeminen yleisfunktiolla
async function runPostExample() {
  console.log('Running POST request...');
  const userData = {
    name: 'Konsta Haapaniemi',
    job: 'Opiskelija',
  };

  const data = await fetchData('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'free_user_3LMJPRJ6YWfC1g9qVAKGvmy34zh',
    },
    body: JSON.stringify(userData),
  });
  console.log('POST Result:', data);
}

// Ajetaan esimerkit
runGetExample();
runPostExample();
