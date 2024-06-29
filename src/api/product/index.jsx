import { getStorage } from "../../utils/helper";

const url = import.meta.env.VITE_APP_BASE_API;

export const getProducts = async () => {
  return fetch(`${url}/painting`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getProductById = async (paintingId) => {
  return fetch(`${url}/painting/${paintingId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getSale = async () => {
  return fetch(`${url}/sale`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const postProduct = async (user) => {
  return fetch(`${url}/painting`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const getArtist = async () => {
  const token = JSON.parse(getStorage("userLog"))?.accessToken;
  console.log(`Token: ${token}`); // Debugging: Log the token
  const requestUrl = `${url}/artist`;
  console.log(`Requesting URL: ${requestUrl}`); // Debugging: Log the request URL

  return fetch(requestUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => console.log(`Error: ${err.message}`));
};
export const getArtistById = async (artistId) => {
  return fetch(`${url}/artist/${artistId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${JSON.parse(getStorage("userLog"))?.accessToken}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getUserById = async (userId) => {
  return fetch(`${url}/user/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
