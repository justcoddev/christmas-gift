import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const FormDataContext = createContext();

// Proveedor del contexto
export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    message: "",
    from: "",
    to: "",
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

// Hook para usar el contexto
export const useFormData = () => useContext(FormDataContext);
