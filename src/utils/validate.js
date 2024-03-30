export const checkValidEmailAndPassword = (email, password) => {
  const isEmailValid =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
      email
    );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  );

  if (!isEmailValid) return "Invalid email address";
  if (!isPasswordValid) return "Invalid password";

  return null;
};

export const checkValidSignUpForm = (name, email, password) => {
  const isEmailValid =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
      email
    );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  );

  if (!name || name?.trim().length === 0) return "Enter valid name";
  if (!isEmailValid) return "Invalid email address";
  if (!isPasswordValid) return "Invalid password";

  return null;
};
