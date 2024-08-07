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
  console.log(JSON.parse(getStorage("userLog"))?.accessToken);
  return fetch(`${url}/artist`, {
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

export const deleteProductById = async (values) => {
  return fetch(`${url}/painting/${values}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
}
