const url = import.meta.env.VITE_APP_BASE_API;

export const signIn = async (values) => {
  return fetch(`${url}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then(async (response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const register = async (user) => {
  return fetch(`${url}/user`, {
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

export const updateProfile = async (values) => {
  return fetch(`${url}/user/${values.userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then(async (response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};