import React from 'react';
import { MdSchedule, MdSearch, MdHelpOutline } from 'react-icons/md'
import * as H from './styles';

const Header = () => {
  return (
    <H.Container>
        <H.Left>
          <H.Avatar />
          <MdSchedule size={25} />
        </H.Left>

        <H.Search>
          <MdSearch size={25} />
          <input placeholder="Search Welben" />
        </H.Search>

        <H.Right>
          <MdHelpOutline size={25} />
        </H.Right>
    </H.Container>
  );
}

export default Header;
