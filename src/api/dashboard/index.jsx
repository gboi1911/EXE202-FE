const url = import.meta.env.VITE_APP_BASE_API;

export const getUsers = async () => {
    return fetch(`${url}/user`, {
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

export const deleteUserById = async (userId) => {
  return fetch(`${url}/user/${userId}`, {
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
};

  