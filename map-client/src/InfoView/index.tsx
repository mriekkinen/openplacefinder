import React from 'react';
import styled from 'styled-components';

import { setSelected, useAppDispatch, useAppSelector } from '../state';
import { PoiDecorator } from '../overpass';
import { MapHandle } from '../MapView/SetMapRef';
import { PresetIcon } from '../icons';
import Address from './Address';
import ReturnBtn from './ReturnBtn';
import Phone from './Phone';
import Website from './Website';
import { OpenStateWrapper } from './OpenState';
import OpeningHours from './OpeningHours';
import Cuisines from './Cuisines';

import {
  AddressIcon,
  OpeningHoursIcon,
  CuisineIcon,
  PhoneIcon,
  WebsiteIcon
} from './icons';

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
          <NothingSelected>
            <i>Nothing selected</i>
          </NothingSelected>
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
            <PresetIcon
              presetId={poi.presetId}
              width={20}
              height={20} />
          </Header>
        </IconDiv>
        <ContentDiv>
          <Header>
            {poi.tags['name']}
          </Header>
          <div>
            {PoiDecorator.getNames().getName(poi.presetId)}
          </div>
        </ContentDiv>
      </FlexContainer>

      <ItemContainer>
        <AddressIcon />
        <Address mapRef={mapRef} e={poi} />

        {PoiDecorator.hasField(poi, 'opening_hours') &&
          <>
            <OpeningHoursIcon />
            <OpenStateWrapper
              poi={poi}
              country={country}
              now={now} />
            {poi.tags['opening_hours'] !== undefined &&
              <>
                <div></div>
                <OpeningHours poi={poi} />
              </>
            }
          </>
        }

        {PoiDecorator.hasField(poi, 'cuisine') &&
          <>
            <CuisineIcon />
            <Cuisines poi={poi} />
          </>
        }
        {PoiDecorator.hasField(poi, 'phone') &&
          <>
            <PhoneIcon />
            <Phone phone={poi.tags['phone']} />
          </>
        }
        {PoiDecorator.hasField(poi, 'website') &&
          <>
            <WebsiteIcon />
            <Website href={poi.tags['website']} />
          </>
        }
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
  display: grid;
  grid-template-columns: 1.25em 1fr;
  column-gap: 10px;
  row-gap: 10px;
  margin: 0 10px;
`;

const Header = styled.h2`
  margin: 0;
`;

const NothingSelected = styled.div`
  margin: 10px 0;
`;

export default InfoView;
