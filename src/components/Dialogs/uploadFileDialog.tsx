import { useOpenDialog } from '@/hooks/useOpenDialog';
import { Button, Text, Modal, ModalHeader, ModalCloseButton, ModalFooter, ModalOverlay, ModalContent, ModalBody, useDisclosure, Box } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { electronActions } from '@/actions';
import Dropzone from 'react-dropzone';

type onDropCallbackType = <T extends { name: string }>(files: T[]) => void;

const uploadFileDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isUploadFileDialogOpen, setUploadFileDialogOpen } = useOpenDialog();
  const [dragFiles, setDragFiles] = useState<string[]>([]);

  useEffect(() => {

    if (isUploadFileDialogOpen === true) {
      onOpen();
    }

  }, [isUploadFileDialogOpen])

  const closeDialogCallback = useCallback(() => {

    onClose();
    setUploadFileDialogOpen(false);
  }, [setUploadFileDialogOpen, onClose])

  const onDropCallback = useCallback<onDropCallbackType>((files) => { // need to specify acceptedFiles

    files.forEach((file) => {
      setDragFiles((prev: string[]) => [...prev, file.name])
    })

  }, [dragFiles])

  const createPlaylistCallback = useCallback(async () => {

    await electronActions.createPlaylist(dragFiles);
  }, [dragFiles])

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={closeDialogCallback}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Playlist from local file</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Dropzone onDrop={onDropCallback}>
              {({ getRootProps, getInputProps }) => (
                <section className="dropZone">
                  <div {...getRootProps()} style={{ padding: '12px' }}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                </section>
              )}
            </Dropzone>
            <Box>
              {dragFiles}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={closeDialogCallback}>
              Close
            </Button>
            <Button variant='ghost' onClick={createPlaylistCallback}> Create!</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default uploadFileDialog;