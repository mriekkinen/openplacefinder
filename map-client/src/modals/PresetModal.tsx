import React, { useState } from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MdSearch } from 'react-icons/md';

import { PresetOption, toPresetOption } from '../state';
import { getSubcategories, Preset, presetSingleton } from '../presets';
import { getPresetsMaxResults } from '../conf';
import { notEmpty } from '../utils';
import Modal, { ModalWidth, Footer, OkBtn, CancelBtn } from './Modal';
import { PresetIcon } from '../icons';

const TOP_LEVEL_PRESET_IDS = [
  'amenity', 'craft', 'emergency', 'healthcare', 'historic',
  'leisure', 'office', 'shop', 'tourism'
];

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

interface SearchTabProps {
  handleClose: () => void;
  handleChange: ((newValue: PresetOption | null) => void);
}

const SearchTab = ({ handleClose, handleChange }: SearchTabProps) => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<PresetOption[]>([]);

  const maxResults = getPresetsMaxResults();

  const search = (inputValue: string) => {
    const presets = presetSingleton.search(inputValue);
    const options = presets.map(toPresetOption);

    setResults(options);
  };

  const handleQueryChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value;
    if (inputValue === '') {
      setQuery(inputValue);
      setResults([]);
      return;
    }

    setQuery(inputValue);
    search(inputValue);
  };

  return (
    <div>
      <SearchBox
        query={query}
        handleQueryChange={handleQueryChange} />
      <Count
        n={results.length}
        maxResults={maxResults}
        query={query} />
      <Presets
        presets={results.slice(0, maxResults)}
        handleClick={handleChange} />
      <Footer>
        <CancelBtn onClick={() => handleClose()}>
          Cancel
        </CancelBtn>
      </Footer>
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

interface CountProps {
  n: number;
  maxResults: number;
  query: string;
}

const Count = ({ n, maxResults, query }: CountProps) => {
  if (query === '') {
    return <div style={{ height: 10 }}></div>;
  }

  return (
    <ResultCount>
      <b>{n <= maxResults ? n : `${maxResults}+`}</b> categories
    </ResultCount>
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
  handleClose: () => void;
  handleChange: ((newValue: PresetOption | null) => void);
  initialRoot: PresetOption | null;
}

const BrowseTab = ({ handleClose, handleChange, initialRoot }: BrowseTabProps) => {
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
      <Path
        root={root}
        setRoot={setRoot} />
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

interface PresetsProps {
  presets: PresetOption[];
  handleClick: (p: PresetOption | null) => void;
}

const Presets = ({ presets, handleClick }: PresetsProps) => {
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

export default PresetModal;
