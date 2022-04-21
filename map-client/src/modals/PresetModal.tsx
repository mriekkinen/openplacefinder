import React, { useState } from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MdSearch } from 'react-icons/md';

import { PresetOption, toPresetOption } from '../state';
import { getParentId, getSubcategories, Preset, presetSingleton } from '../presets';
import { notEmpty } from '../utils';
import Modal, { ModalWidth } from './Modal';
import { PresetIcon } from '../icons';

const TOP_LEVEL_PRESET_IDS = [
  'amenity', 'craft', 'emergency', 'healthcare', 'historic',
  'leisure', 'office', 'shop', 'tourism'
];

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleChange: ((newValue: PresetOption | null) => void);
}

const PresetModal = ({ isOpen, handleClose, handleChange }: Props) => {
  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      maxWidth={ModalWidth.Large}
    >
      <Tabs>
        <TabList>
          <Tab>Search</Tab>
          <Tab>Browse</Tab>
        </TabList>

        <TabPanel>
          <SearchTab handleChange={handleChange} />
        </TabPanel>
        <TabPanel>
          <BrowseTab handleChange={handleChange} />
        </TabPanel>
      </Tabs>
    </Modal>
  );
};

interface SearchTabProps {
  handleChange: ((newValue: PresetOption | null) => void);
}

const SearchTab = ({ handleChange }: SearchTabProps) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<PresetOption[]>([]);

  const handleQueryChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length < 2) {
      setQuery(inputValue);
      setResults([]);
      return;
    }

    const presets = presetSingleton.search(inputValue);
    const options = presets.map(toPresetOption);

    setQuery(inputValue);
    setResults(options);
  };

  return (
    <div>
      <SearchBox
        query={query}
        handleQueryChange={handleQueryChange} />
      <ResultCount>
        <b>{results.length}</b> categories
      </ResultCount>
      <Presets
        presets={results}
        setRoot={handleChange} />
    </div>
  );
};

interface SearchBoxProps {
  query: string;
  handleQueryChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ query, handleQueryChange }: SearchBoxProps) => {
  return (
    <SearchDiv>
      <SearchIcon />
      <SearchInput
        value={query}
        onChange={handleQueryChange}
        placeholder='Search categories...'
        autoFocus />
    </SearchDiv>
  );
};

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid hsl(0, 0%, 50%);
  border-radius: 30px;
  padding: 5px 10px;

  &:hover {
    border: 1px solid #1976D2;
    outline: #1976D2 solid 1px;
  }
`;

const SearchIcon = styled(MdSearch)`
  flex: none;
  width: 1.5em;
  height: 1.5em;
  color: hsl(0, 0%, 50%);
`;

const SearchInput = styled.input`
  flex: 1;
  margin: 0 5px;
  border: none;
  outline: none;
`;

const ResultCount = styled.div`
  margin: 5px 0;
  color: #757575;
`;

interface BrowseTabProps {
  handleChange: ((newValue: PresetOption | null) => void);
}

const BrowseTab = ({ handleChange }: BrowseTabProps) => {
  const [root, setRoot] = useState<PresetOption | null>(null);

  const presets = getPresets(root);
  const parent = getParent(root);

  return (
    <div>
      <Path root={root} setRoot={setRoot} />
      {/* <Buttons
        root={root}
        parent={parent}
        handleChange={handleChange}
        setRoot={setRoot} /> */}
      <Presets
        presets={presets}
        setRoot={p => setRoot(p)} />
    </div>
  );
};

interface PathProps {
  root: PresetOption | null;
  setRoot: (p: PresetOption | null) => void;
}

const Path = ({ root, setRoot }: PathProps) => {
  const path = getPath(root);

  const previous = path.slice(0, -1);
  const current = path[path.length-1];

  return (
    <BreadcrumbNav>
      <BreadcrumbList>
        {previous.map(p => 
          <BreadcrumbItem key={p?.value.id ?? 'top'}>
            <PathLink p={p} setRoot={setRoot} isActive={false} />
          </BreadcrumbItem>
        )}
        <BreadcrumbItem>
          <PathLink p={current} setRoot={setRoot} isActive={true} />
        </BreadcrumbItem>
      </BreadcrumbList>
    </BreadcrumbNav>
  );
};

interface PathLinkProps {
  p: PresetOption | null;
  setRoot: (p: PresetOption | null) => void;
  isActive: boolean;
}

const PathLink = ({ p, setRoot, isActive }: PathLinkProps) => {
  const label = p ? p.label : 'Categories';
  return (
    <BreadcrumbLink
      href='#'
      onClick={() => setRoot(p)}
      isActive={isActive}
    >
      {label}
    </BreadcrumbLink>
  );
};

const getPath = (root: PresetOption | null) => {
  const path: (string | undefined)[] = [undefined];

  if (root) {
    const subcats = getSubcategories(root.value.id);
    path.push(...subcats);
  }

  return path
    .map(id => presetSingleton.getPreset(id))
    .map(preset => preset ? toPresetOption(preset) : null);
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
  isActive: boolean;
}

const BreadcrumbLink = styled.a<BreadcrumbLinkProps>`
  color: ${props => props.isActive ? 'inherit' : '#757575'};
  text-decoration: none;

  &:hover {
    text-decoration-line: underline;
  }
`;

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
