import { getStorage } from "../../utils/helper";

const url = import.meta.env.VITE_APP_BASE_API;

export const getBlogs = async () => {
  return fetch(`${url}/blog`, {
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

export const postBlog = async (user) => {
  return fetch(`${url}/blog`, {
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