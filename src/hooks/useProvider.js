import { useContext } from "react";
import { Context } from "../context/Context";

export const useProvider = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useProvider() must be used inside Provider");
  }
  return context;
};
