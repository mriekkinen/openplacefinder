import React from 'react';
import styled from 'styled-components';

import { setSelected, useAppDispatch, useAppSelector } from '../state';
import { PoiDecorator } from '../overpass';
import { MapHandle } from '../MapView/SetMapRef';
import Address from './Address';
import ReturnBtn from './ReturnBtn';
import Link from './Link';
import OpeningHours from './OpeningHours';
import { OpenStateWrapper } from './OpenState';
import Cuisines from './Cuisines';
import { PresetIcon } from '../icons';

interface Props {
  mapRef: React.RefObject<MapHandle>;
}

const InfoView = ({ mapRef }: Props) => {
  const dispatch = useAppDispatch();
  const id = useAppSelector(state => state.ui.selected);
  const data = useAppSelector(state => state.poiList.data);
  const country = useAppSelector(state => state.poiList.country);

  const poi = data.find(e => e.id === id);

  if (!poi) {
    return (
      <Container>
        <TopContainer>
          <Item>
            <i>Nothing selected</i>
          </Item>
        </TopContainer>
      </Container>
    );
  }

  const now = new Date();

  return (
    <Container>
      <TopContainer>
        <ReturnBtn handleClick={() => dispatch(setSelected(null))} />
      </TopContainer>

      <FlexContainer>
        <IconDiv>
          <Header>
            <PresetIcon presetId={poi.presetId} />
          </Header>
        </IconDiv>
        <ContentDiv>
          <Header>
            {poi.tags['name']}
          </Header>
          <div>
            {poi.presetId}
          </div>
        </ContentDiv>
      </FlexContainer>

      <ItemContainer>
        <Item>
          <Address mapRef={mapRef} e={poi} />
        </Item>
        {PoiDecorator.hasField(poi, 'opening_hours') &&
          <>
            <Item>
              <OpenStateWrapper
                poi={poi}
                country={country}
                now={now} />
            </Item>
            <Item>
              <OpeningHours openingHours={poi.tags['opening_hours']} />
            </Item>
          </>
        }
        {PoiDecorator.hasField(poi, 'cuisine') &&
          <Item>
            <Cuisines poi={poi} />
          </Item>
        }
        <Item>
          <Link
            href={poi.tags['website']}
            label={poi.tags['website']} />
        </Item>
      </ItemContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-right: 15px;
  margin-bottom: 15px;
  line-height: 1.25;
`;

const TopContainer = styled.div`
  margin: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  margin: 10px;
`;

const IconDiv = styled.div`
  flex: none;
  margin-right: 5px;
`;

const ContentDiv = styled.div`
  flex: auto;
`;

const ItemContainer = styled.div`
  margin: 0 10px;
`;

const Item = styled.div`
  margin: 10px 0;
`;

const Header = styled.h2`
  margin: 0;
`;

export default InfoView;
