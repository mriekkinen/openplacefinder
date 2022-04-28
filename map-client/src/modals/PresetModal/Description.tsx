import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdInfoOutline } from 'react-icons/md';

import { PresetOption } from '../../state';
import { Preset } from '../../presets';
import { fetchDescription } from './PresetDescriptionService';

interface PresetDescriptionProps {
  root: PresetOption | null;
}

export const PresetDescription = ({ root }: PresetDescriptionProps) => {
  const [description, setDescription] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!root) {
      return setDescription(undefined);
    }

    const tag = getTag(root.value);
    if (!tag) {
      return setDescription(undefined);
    }

    fetchDescription(tag.key, tag.value)
      .then(d => setDescription(d.description))
      .catch(err => {
        console.log(err);
        setDescription(undefined);
      });
  }, [root]);

  if (!root || !description) {
    return null;
  }

  return (
    <DescriptionBox>
      <DescriptionIcon />
      <DescriptionText>{description}</DescriptionText>
    </DescriptionBox>
  );
};

const getTag = (p: Preset) => {
  if (p.reference) {
    return {
      key: p.reference.key,
      value: p.reference.value
    };
  }

  // Return a single tag (there should be only one)
  for (const key in p.tags) {
    return {
      key,
      value: p.tags[key]
    };
  }

  // No tags
  return undefined;
};

const DescriptionBox = styled.div`
  display: flex;
  margin: 0.25em;
  padding: 0.5em;
  border: 1px solid gray;
  border-radius: 7px;
`;

const DescriptionIcon = styled(MdInfoOutline)`
  flex: none;
  margin-right: 0.25em;
  width: 1.25em;
  height: 1.25em;
  color: hsl(0, 0%, 25%);
`;

const DescriptionText = styled.div`
  flex: 1;
  margin: 0;
`;
