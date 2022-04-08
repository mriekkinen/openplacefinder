import React, { useState } from 'react';
import styled from 'styled-components';

import { PresetOption, toPresetOption } from '../state';
import { getParentId, Preset, presetSingleton } from '../presets';
import { notEmpty } from '../utils';
import Modal, { MdHeader } from './Modal';

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
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <MdHeader>{root ? root.label : 'Categories'}</MdHeader>
      {root && handleChange &&
        <button onClick={() => handleChange(root)}>
          Select
        </button>
      }
      {root &&
        <div>
          <button onClick={() => setRoot(parent)}>
            Go back
          </button>
        </div>
      }
      <PresetList>
        {presets.map(p =>
          <PresetItem
            key={p.value.id}
            onClick={() => setRoot(p)}
          >
            {p.label}
          </PresetItem>
        )}
      </PresetList>
    </Modal>
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
`;

export default PresetModal;
