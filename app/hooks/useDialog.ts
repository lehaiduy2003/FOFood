import { useEffect, useRef } from "react";

const useDialog = (isOpened: boolean, closeModal: () => void) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpened && dialogRef.current) {
      dialogRef.current.showModal();
    } else {
      if (dialogRef.current && !dialogRef.current.open) {
        dialogRef.current.close();
      }
    }
  }, [isOpened, closeModal]);

  return dialogRef;
};

export default useDialog;
