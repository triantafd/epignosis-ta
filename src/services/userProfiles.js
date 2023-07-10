export const fetchUserProfiles = async () => {
  try {
    const response = await fetch('https://my-json-server.typicode.com/ThrasyvoulosKafasis/epignosis-users/db');

    if (!response.ok) {
      throw new Error('Response was not ok');
    }

    const data = await response.json();

    return data.users
  } catch (error) {
    throw error
  }
}

export const updateUserProfile = async (values) => {
  try {
    const response = await fetch(`https://my-json-server.typicode.com/ThrasyvoulosKafasis/epignosis-users/users/${values.id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      credentials: "same-origin",
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error
  }
}