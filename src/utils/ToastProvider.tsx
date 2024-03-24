"use client";
import { Toast } from "@/components";
import { ReactNode, createContext, useState } from "react";

type ToastContextType = {
  show: (
    type: "success" | "error",
    message: string,
    statusCode: number
  ) => void;
  hide: () => void;
};

export const ToastContext = createContext<ToastContextType | null>(null);

function ToastProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [statusCode, setStatusCode] = useState(400);
  const [type, setType] = useState<"success" | "error">("error");

  const show = (
    type: "success" | "error",
    message: string,
    statusCode: number
  ) => {
    setMessage(message);
    setType(type);
    setIsVisible(true);
    setStatusCode(statusCode);

    setTimeout(() => {
      setIsVisible(false);
    }, 10 * 1000); // 10 sec
  };

  const hide = () => {
    setIsVisible(false);
  };

  return (
    <ToastContext.Provider value={{ show, hide }}>
      <Toast
        type={type}
        message={message}
        statusCode={statusCode}
        isVisible={isVisible}
      />
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
