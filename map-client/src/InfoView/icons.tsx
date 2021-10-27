import styled from 'styled-components';
import { IconType } from 'react-icons';

import { GoLocation } from 'react-icons/go';
import { MdAccessTime } from 'react-icons/md';
import { MdRestaurantMenu } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';
import { MdLaptop } from 'react-icons/md';

const styleIcon = (icon: IconType) => {
  return styled(icon)`
    font-size: 1.25em;
  `;
};

export const AddressIcon = styleIcon(GoLocation);
export const OpeningHoursIcon = styleIcon(MdAccessTime);
export const CuisineIcon = styleIcon(MdRestaurantMenu);
export const PhoneIcon = styleIcon(MdPhone);
export const WebsiteIcon = styleIcon(MdLaptop);
