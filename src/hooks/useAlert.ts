import { useEffect, useRef, useState } from "react";

type TUseAlert = {
  alert: { isOpen: boolean; message: string; type: string };
  showAlert: (isOpen: boolean, message: string, type: string) => void;
  hideAlert: (isOpen: boolean) => void;
};

export default function useAlert(delay = 1000): TUseAlert {
  const [alert, setAlert] = useState({ isOpen: false, message: "", type: "" });
  const timerId = useRef<any>(null);
  useEffect(() => {
    timerId.current = setTimeout(() => {
      setAlert((prev) => ({ ...prev, isOpen: false }));
    }, delay);
    return () => clearTimeout(timerId.current);
  }, [alert.isOpen]);

  const showAlert = (isOpen: boolean, message: string, type: string): void => {
    setAlert((prev) => ({ ...prev, isOpen, message, type }));
  };

  const hideAlert = (isOpen: boolean) => {
    setAlert((prev) => ({ ...prev, isOpen }));
  };

  return { alert, showAlert, hideAlert };
}
