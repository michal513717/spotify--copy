import { useStore } from "@/store";

export function useOpenDialog() {
  const isDialogOpen = useStore(
    (state) => state.isDialogOpen
  );

  const {
    setDialogOpen
  } = useStore();

  return {
    isDialogOpen,
    setDialogOpen
  }
};