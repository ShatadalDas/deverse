import { ToastContext } from "@/utils/ToastProvider";
import { useContext } from "react";

const useToast = () => useContext(ToastContext);

export default useToast;