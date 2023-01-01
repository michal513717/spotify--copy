import { useStore } from "@/store";

export function useOpenDialog() {
  const isDialogOpen = useStore(
    (state) => state.isDialogOpen
  );
  const isUploadFileDialogOpen = useStore(
    (state) => state.isUploadFileDialogOpen
  );

  const {
    setDialogOpen,
    setUploadFileDialogOpen
  } = useStore();

  return {
    isDialogOpen,
    isUploadFileDialogOpen,
    setDialogOpen,
    setUploadFileDialogOpen
  }
};