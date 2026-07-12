export const isLoggedIn = () => {
  return JSON.parse(localStorage.getItem("isLoggedIn")) === true;
};

export const logOut = (navigate) => {
  localStorage.removeItem("isLoggedIn");
  navigate("/login", { replace: true });
};
