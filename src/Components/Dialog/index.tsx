import Dialog from "@mui/material/Dialog";

interface PropsDialog {
  open: boolean;
  img: string;
  title: string;
  setOpen: (value: boolean) => void;
}

export default function DialogComponent({ open, img, title, setOpen }: PropsDialog) {
  
    const handleClose = () => {
        setOpen(false)
    }
  
    return (
    <Dialog
      fullWidth={true}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {img !== "" ? (
        <img src={img} alt={title} />
      ) : (
        <h2>No hay imagen para cargar</h2>
      )}
    </Dialog>
  );
}
