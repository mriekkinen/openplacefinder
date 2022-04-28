import React, { useState } from 'react';

import { TOP_LEVEL_PRESETS } from '../../conf';
import { PresetOption, toPresetOption } from '../../state';
import { Preset, presetSingleton } from '../../presets';
import { notEmpty } from '../../utils';
import { Footer, OkBtn, CancelBtn } from '../Modal';

import { Breadcrumb } from './Breadcrumb';
import { PresetDescription } from './Description';
import { Presets } from './Presets';

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
    ? presetSingleton.getChildPresets(root.value)
    : getTopLevelPresets();
  return presetList
    .map(p => toPresetOption(p))
    .sort((a, b) => a.label.localeCompare(b.label));
};

const getTopLevelPresets = (): Preset[] => {
  return TOP_LEVEL_PRESETS
    .map(id => presetSingleton.getPreset(id))
    .filter(notEmpty);
};
