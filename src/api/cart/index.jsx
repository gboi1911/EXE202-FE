const url = import.meta.env.VITE_APP_BASE_API;

export const getCart = async (values) => {
  return fetch(`${url}/cart/${values.cartId}`, {
    method: "GET",
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
export const getCartByUserId = async (values) => {
  return fetch(`${url}/cart/${values}`, {
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

export const updateCart = async (values) => {
  return fetch(`${url}/cart/${values.cartId}`, {
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
export const deleteCart = async (values) => {
  return fetch(`${url}/cart/delete-all/${values}`, {
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
export const deleteItem = async (values) => {
  return fetch(`${url}/cart/${values}`, {
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
export const updateQualityCart = async (values, cartId) => {
  return fetch(`${url}/cart/${cartId}`, {
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
export const addCart = async (values) => {
  return fetch(`${url}/cart`, {
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
export const order = async (values) => {
  return fetch(`${url}/order`, {
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
export const orderDetail = async (values) => {
  return fetch(`${url}/order-detail`, {
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
export const checkOut = async (orderId) => {
  try {
    const response = await fetch(`${url}/payment/${orderId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderId),
    });

    // Return the response object directly
    return response;
  } catch (error) {
    console.error("Error during checkout:", error);
    // Consider throwing the error for further handling (optional)
  }
};

export const checkoutSuccess = async (orderId) => {
  try {
    const response = await fetch(`${url}/order/complete/${orderId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderId),
    });
  } catch (error) {
    console.error("Error during checkout:", error);
  }
};
