import React, { useState } from 'react';

import { Poi } from '../types';
import { queryOverpass, Status, useAppDispatch, useAppSelector } from '../state';
import { buildQuery } from './queryBuilder';
import { Option } from './types';
import Logo from './Logo';
import SearchBox from './SearchBox';
import SearchBtn from './SearchBtn';

interface Props {
  areaFilter: string[];
}

const SearchView = ({ areaFilter }: Props) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.poiList.data);
  const status = useAppSelector(state => state.poiList.status);

  const [option, setOption] = useState<Option | null>(null);

  const handleChange = (newOption: Option | null) => {
    setOption(newOption);
  };

  const handleSubmit = () => {
    if (option === null) return;
    const query = buildQuery(
      [option.value],
      areaFilter
    );

    dispatch(queryOverpass(query));
  };

  return (
    <div className='search-container'>
      <Logo />
      <div className='search-box'>
        <SearchBox
          value={option}
          handleChange={handleChange} />
      </div>
      <div className='search-btn'>
        <SearchBtn
          status={status}
          handleClick={handleSubmit} />
      </div>
      <div className='search-status'>
        {getStatusMsg(status, data)}
      </div>
    </div>
  );
};

const getStatusMsg = (status: Status, data: Poi[]) => {
  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return <span>Loading...</span>
    case 'succeeded':
      return <span>Found <b>{data.length}</b> elements matching the query</span>;
    case 'failed':
      return <span>Query failed</span>;
  }
};

export default SearchView;
