'use strict';

async function testErrorHandling() {
  const url = 'https://reqres.in/api/unknown/23';

  try {
    const response = await fetch(url, {
      headers: {
        "x-api-key": "free_user_3LMJPRJ6YWfC1g9qVAKGvmy34zh",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

testErrorHandling();
