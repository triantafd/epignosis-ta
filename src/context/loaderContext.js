import React, { useState, createContext, useContext } from "react";
import { CustomLoadingSpinner } from '../components/Spinners/CustomLoadingSpinner'

const LoadingContext = createContext({ wrappedWithloader: null });


const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const wrappedWithloader = (fn) => async (...args) => {
    setLoading(true)
    try {
      const valueToReturn = await fn(...args);
      return valueToReturn;
    } catch (error) {
      throw error
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoadingContext.Provider
      value={{ wrappedWithloader }}
    >
      {children}
      {loading && <CustomLoadingSpinner outterStyle={'loading-spinner-overlay'} />}
    </LoadingContext.Provider>
  );
};

const useLoader = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }

  return context;
};

export { LoaderProvider, useLoader };