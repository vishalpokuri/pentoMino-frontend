import React, { useEffect } from "react";

interface ToastProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message?: string;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  open,
  setOpen,
  message = "Please select all values before running",
  duration = 3000,
}) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [open, duration, setOpen]);

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
        <div className="flex items-center">
          <span className="mr-2">⚠️</span>
          <p>{message}</p>
          <button
            onClick={() => setOpen(false)}
            className="ml-4 text-white hover:text-gray-200"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
