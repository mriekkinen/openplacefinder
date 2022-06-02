import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { PresetOption } from '../../state';
import Modal, { ModalWidth } from '../Modal';

import { SearchTab } from './SearchTab';
import { BrowseTab } from './BrowseTab';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleChange: ((newValue: PresetOption | null) => void);
  initialRoot?: PresetOption | null;
}

const PresetModal = ({ isOpen, handleClose, handleChange, initialRoot = null }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      maxWidth={ModalWidth.Large}
      fixedWidth={true}
      buttons={[]}
    >
      <Tabs forceRenderTabPanel={true} defaultIndex={1}>
        <TabList>
          <Tab>Search</Tab>
          <Tab>Browse</Tab>
        </TabList>

        <TabPanel>
          <SearchTab
            handleClose={handleClose}
            handleChange={handleChange} />
        </TabPanel>
        <TabPanel>
          <BrowseTab
            handleClose={handleClose}
            handleChange={handleChange}
            initialRoot={initialRoot} />
        </TabPanel>
      </Tabs>
    </Modal>
  );
};

export default PresetModal;
