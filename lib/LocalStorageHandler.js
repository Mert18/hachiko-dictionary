// save value to local storage
const saveToLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

const getFromLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
};

const removeFromLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export { saveToLocalStorage, getFromLocalStorage, removeFromLocalStorage };
