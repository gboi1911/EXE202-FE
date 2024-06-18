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
