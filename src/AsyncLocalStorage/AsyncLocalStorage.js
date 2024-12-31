import React from "react";

const AsyncLocalStorage = () => {
  const asyncStorage = {
    setItem: (key, value) => {
      return new Promise((resolve, reject) => {
        try {
          localStorage.setItem(key, value);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },

    getItem: (key) => {
      return new Promise((resolve, reject) => {
        try {
          const value = localStorage.getItem(key);
          resolve(value);
        } catch (error) {
          reject(error);
        }
      });
    },

    removeItem: (key) => {
      return new Promise((resolve, reject) => {
        try {
          localStorage.removeItem(key);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },

    clear: () => {
      return new Promise((resolve, reject) => {
        try {
          localStorage.clear();
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
  };

  // Example usage
  async function testAsyncStorage() {
    try {
      await asyncStorage.setItem("name", "John Doe");
      const name = await asyncStorage.getItem("name");
      console.log(name); // Outputs: 'John Doe'

      await asyncStorage.removeItem("name");
      const removedName = await asyncStorage.getItem("name");
      console.log(removedName); // Outputs: null

      await asyncStorage.setItem("age", "30");
      await asyncStorage.clear();
      const age = await asyncStorage.getItem("age");
      console.log(age); // Outputs: null
    } catch (error) {
      console.error("Error:", error);
    }
  }

  testAsyncStorage();

  return (
    <div>
      <h1>AsyncLocalStorage</h1>
    </div>
  );
};

export default AsyncLocalStorage;
