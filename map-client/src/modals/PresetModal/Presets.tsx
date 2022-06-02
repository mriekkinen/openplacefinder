import React from 'react';
import styled from 'styled-components';

import { PresetOption } from '../../state';
import { PresetIcon } from '../../icons';

interface PresetsProps {
  presets: PresetOption[];
  handleClick: (p: PresetOption | null) => void;
}

export const Presets = ({ presets, handleClick }: PresetsProps) => {
  return (
    <PresetList>
      {presets.map(p =>
        <PresetItem
          key={p.value.id}
          onClick={() => handleClick(p)}
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

  &:hover {
    background-color: #EEEEEE;
  }
`;

const PresetName = styled.div`
  margin-left: 0.5em;
`;
