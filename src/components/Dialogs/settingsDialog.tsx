import { Button, Text, Tabs, Modal, ModalHeader, ModalCloseButton, ModalFooter, ModalOverlay, ModalContent, ModalBody, useDisclosure, TabPanels, TabPanel, Tab, TabList} from '@chakra-ui/react';
import { useEffect } from 'react';
import ThemeSettings from '../settingsPanel/Theme';

const SettingsDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    window.electron.addListener("app:dialog:options", onOpen);

    return () => {
      window.electron.removeListener("app:dialog:options", onOpen);
    };
  }, [onOpen]);

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs orientation="vertical" size="lg" colorScheme="red">
              <TabList>
                <Tab>Opt1</Tab>
                <Tab>Theme</Tab>
                <Tab>Opt3</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>

                </TabPanel>
                <TabPanel>

                </TabPanel>
                <TabPanel>
                  <ThemeSettings/>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SettingsDialog;