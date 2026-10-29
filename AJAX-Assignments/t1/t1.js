'use strict';

async function fetchUser() {
  try {
    const response = await fetch('https://reqres.in/api/users/1', {
      headers: {
        "x-api-key": "free_user_3LMJPRJ6YWfC1g9qVAKGvmy34zh",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.log(error.message);
  }
}

fetchUser();
