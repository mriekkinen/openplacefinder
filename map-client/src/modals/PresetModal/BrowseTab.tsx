import React, { useState } from 'react';

import { PresetOption, toPresetOption } from '../../state';
import { Preset, presetSingleton } from '../../presets';
import { notEmpty } from '../../utils';
import { Footer, OkBtn, CancelBtn } from '../Modal';

import { Breadcrumb } from './Breadcrumb';
import { PresetDescription } from './Description';
import { Presets } from './Presets';

const TOP_LEVEL_PRESET_IDS = [
  'amenity', 'craft', 'emergency', 'healthcare', 'historic',
  'leisure', 'office', 'shop', 'tourism'
];

interface BrowseTabProps {
  handleClose: () => void;
  handleChange: ((newValue: PresetOption | null) => void);
  initialRoot: PresetOption | null;
}

export const BrowseTab = ({ handleClose, handleChange, initialRoot }: BrowseTabProps) => {
  const [root, setRoot] = useState<PresetOption | null>(initialRoot);

  const presets = getPresets(root);

  const handleCancel = () => {
    handleClose();
  };

  const handleOk = () => {
    handleChange(root);
    handleClose();
  };

  return (
    <div>
      <Breadcrumb
        root={root}
        setRoot={setRoot} />
      <PresetDescription
        root={root} />
      <Presets
        presets={presets}
        handleClick={setRoot} />
      <Footer>
        <CancelBtn onClick={handleCancel}>
          Cancel
        </CancelBtn>
        <OkBtn onClick={handleOk} disabled={root === null}>
          Ok
        </OkBtn>
      </Footer>
    </div>
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
