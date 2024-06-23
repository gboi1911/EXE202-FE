export function validateLogin(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
}
export function validateRegister(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.username) {
    errors.username = "username is required";
  }
  if (!values.fullName) {
    errors.fullName = "fullName is required";
  }
  if (!values.address) {
    errors.address = "address is required";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "phoneNumber is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  } else if (
    !/\d/.test(values.password) ||
    !/[!@#$%&?.]/g.test(values.password) ||
    !/[A-Z]/g.test(values.password)
  ) {
    errors.password =
      "Password must contains at least 1 number, at least 1 capital character, 1 special character";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password and Confirm Password do not match";
  }
  return errors;
}
export function validateUpdateProfile(values) {
  let errors = {};
  if (values.email === "") {
    errors.email = "Email address is required";
  }
  if (values.username === "") {
    errors.username = "username is required";
  }
  if (values.fullName === "") {
    errors.fullName = "fullName is required";
  }
  if (values.address === "") {
    errors.address = "address is required";
  }
  if (values.phoneNumber === "") {
    errors.phoneNumber = "phoneNumber is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  } else if (
    !/\d/.test(values.password) ||
    !/[!@#$%&?.]/g.test(values.password) ||
    !/[A-Z]/g.test(values.password)
  ) {
    errors.password =
      "Password must contains at least 1 number, at least 1 capital character, 1 special character";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password and Confirm Password do not match";
  }
  return errors;
}
export function validateBlog(values) {
  let errors = {};
  if (!values.titeBlog) {
    errors.titeBlog = "titeBlog is required";
  }
  if (!values.descriptionBlog) {
    errors.descriptionBlog = "descriptionBlog is required";
  }
  return errors;
}
export function validateProduct(values) {
  let errors = {};
  if (!values.title) {
    errors.title = "title is required";
  }
  if (!values.description) {
    errors.description = "description is required";
  }
  if (!values.price) {
    errors.price = "price is required";
  }
  if (!values.salesPrice) {
    errors.salesPrice = "salesPrice is required";
  }
  if (!values.stockQuantity) {
    errors.stockQuantity = "stockQuantity is required";
  }
  return errors;
}
