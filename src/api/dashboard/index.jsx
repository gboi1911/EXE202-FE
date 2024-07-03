import { getStorage } from "../../utils/helper";

const url = import.meta.env.VITE_APP_BASE_API;

export const getUsers = async () => {
  const token = JSON.parse(getStorage("userLog"))?.accessToken;
    return fetch(`${url}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
};

export const deleteUserById = async (userId) => {
  const token = JSON.parse(getStorage("userLog"))?.accessToken;
  return fetch(`${url}/user/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

  