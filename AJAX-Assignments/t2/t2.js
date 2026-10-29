'use strict';

async function postUser() {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer'
    };

    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'free_user_3LMJPRJ6YWfC1g9qVAKGvmy34zh',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

postUser();
