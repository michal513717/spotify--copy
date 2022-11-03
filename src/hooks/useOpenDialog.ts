import { useStore } from "@/store";

export function useOpenDialog() {
  const isDialogOpen = useStore(
    (state) => state.isDialogOpen
  );
  const isCreatePlaylistDialogOpen = useStore(
    (state) => state.isCreatePlaylistDialogOpen
  );

  const {
    setDialogOpen,
    setCreatePlaylistDialogOpen
  } = useStore();

  return {
    isDialogOpen,
    isCreatePlaylistDialogOpen,
    setDialogOpen,
    setCreatePlaylistDialogOpen
  }
};