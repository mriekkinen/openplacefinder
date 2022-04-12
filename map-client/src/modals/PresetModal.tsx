import React, { useState } from 'react';
import styled from 'styled-components';

import { PresetOption, toPresetOption } from '../state';
import { getParentId, Preset, presetSingleton } from '../presets';
import { notEmpty } from '../utils';
import Modal, { MdHeader, ModalWidth } from './Modal';
import { PresetIcon } from '../icons';

const TOP_LEVEL_PRESET_IDS = [
  'amenity', 'craft', 'emergency', 'healthcare', 'historic',
  'leisure', 'office', 'shop', 'tourism'
];

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleChange: ((newValue: PresetOption | null) => void) | null;
}

const PresetModal = ({ isOpen, handleClose, handleChange }: Props) => {
  const [root, setRoot] = useState<PresetOption | null>(null);

  const presets = getPresets(root);
  const parent = getParent(root);

  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      maxWidth={ModalWidth.Large}
    >
      <MdHeader>{root ? root.label : 'Categories'}</MdHeader>
      <Buttons
        root={root}
        parent={parent}
        handleChange={handleChange}
        setRoot={setRoot} />
      <Presets
        presets={presets}
        setRoot={p => setRoot(p)} />
    </Modal>
  );
};

interface ButtonsProps {
  root: PresetOption | null;
  parent: PresetOption | null;
  handleChange: ((newValue: PresetOption | null) => void) | null;
  setRoot: (p: PresetOption | null) => void;
}

const Buttons = ({ root, parent, handleChange, setRoot }: ButtonsProps) => {
  return (
    <ButtonRow>
      {root &&
        <div>
          <BackButton onClick={() => setRoot(parent)}>
            Go back
          </BackButton>
        </div>
      }
      {root && handleChange &&
        <Button onClick={() => handleChange(root)}>
          Select
        </Button>
      }
    </ButtonRow>
  );
};

interface PresetsProps {
  presets: PresetOption[];
  setRoot: (p: PresetOption | null) => void;
}

const Presets = ({ presets, setRoot }: PresetsProps) => {
  return (
    <PresetList>
      {presets.map(p =>
        <PresetItem
          key={p.value.id}
          onClick={() => setRoot(p)}
        >
          <PresetIcon
            presetId={p.value.id}
            width={20}
            height={20} />
          <PresetName>
            {p.label}
          </PresetName>
        </PresetItem>
      )}
    </PresetList>
  );
};

const getPresets = (root: PresetOption | null): PresetOption[] => {
  const presetList = root
    ? presetSingleton.getPresets(root.value)
    : getTopLevelPresets();
  return presetList
    .map(p => toPresetOption(p))
    .sort((a, b) => a.label.localeCompare(b.label));
};

const getTopLevelPresets = (): Preset[] => {
  return TOP_LEVEL_PRESET_IDS
    .map(id => presetSingleton.getPreset(id))
    .filter(notEmpty);
};

const getParent = (root: PresetOption | null): PresetOption | null => {
  const parentPreset = root
    ? (presetSingleton.getPreset(getParentId(root.value.id)) ?? null)
    : null;
  return parentPreset ? toPresetOption(parentPreset) : null;
};

const PresetList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding-left: 0;
`;

const PresetItem = styled.li`
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid gray;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const PresetName = styled.div`
  margin-left: 0.5em;
`;

const ButtonRow = styled.div`
  display: flex;
  margin-top: 0.25em;
`;

const Button = styled.button`
  width: 7rem;
  padding: 0.5rem;
  background-color: #4CAF50;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 3px;

  margin-right: 0.5rem;

  &:hover {
    cursor: pointer;
    background-color: #66BB6A;
  }
`;

const BackButton = styled(Button)`
  background-color: #9E9E9E;

  &:hover {
    background-color: #BDBDBD;
  }
`;

export default PresetModal;
