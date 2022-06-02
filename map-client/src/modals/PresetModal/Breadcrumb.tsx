import React from 'react';
import styled from 'styled-components';

import { PresetOption, toPresetOption } from '../../state';
import { getAncestors, presetSingleton } from '../../presets';

interface BreadcrumbProps {
  root: PresetOption | null;
  setRoot: (p: PresetOption | null) => void;
}

export const Breadcrumb = ({ root, setRoot }: BreadcrumbProps) => {
  const path = getPath(root);

  const previous = path.slice(0, -1);
  const current = path[path.length-1];

  return (
    <BreadcrumbNav>
      <BreadcrumbList>
        {previous.map(p => 
          <BreadcrumbItem key={p?.value.id ?? 'top'}>
            <BreadcrumbLink p={p} setRoot={setRoot} isActive={false} />
          </BreadcrumbItem>
        )}
        <BreadcrumbItem>
          <BreadcrumbLink p={current} setRoot={setRoot} isActive={true} />
        </BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbNav>
  );
};

const getPath = (root: PresetOption | null) => {
  const path: (string | undefined)[] = [undefined];

  if (root) {
    const ancestors = getAncestors(root.value.id);
    path.push(...ancestors);
  }

  return path
    .map(id => presetSingleton.getPreset(id))
    .map(preset => preset ? toPresetOption(preset) : null);
};

const BreadcrumbNav = styled.nav``;

const BreadcrumbList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

const BreadcrumbItem = styled.li`
  display: inline-block;

  &::before {
    content: '»';
    color: #757575;
    padding-left: 0.25em;
    padding-right: 0.25em;
  }

  &:first-child::before {
    content: '';
  }
`;

interface BreadcrumbLinkProps {
  p: PresetOption | null;
  setRoot: (p: PresetOption | null) => void;
  isActive: boolean;
}

const BreadcrumbLink = ({ p, setRoot, isActive }: BreadcrumbLinkProps) => {
  const label = p ? p.label : 'Categories';
  return (
    <BreadcrumbLinkA
      href='#'
      onClick={() => setRoot(p)}
      isActive={isActive}
    >
      {label}
    </BreadcrumbLinkA>
  );
};

const BreadcrumbLinkA = styled.a<{ isActive: boolean }>`
  color: ${props => props.isActive ? 'inherit' : '#757575'};
  text-decoration: none;

  &:hover {
    text-decoration-line: underline;
  }
`;
