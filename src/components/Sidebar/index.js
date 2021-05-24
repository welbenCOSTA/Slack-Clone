import React from 'react';
import {
  MdFiberManualRecord,
  MdCreate,
  MdComment,
  MdInbox,
  MdDrafts,
  MdBookmarkBorder,
  MdGroup,
  MdApps,
  MdInsertDriveFile,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdAdd
} from 'react-icons/md'
import { useCollection } from 'react-firebase-hooks/firestore'

import { db } from '../../firebase'

import SidebarOption from './SidebarOption'

import * as S from './styles';

const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection('rooms'))

  return (
    <S.Container>
      <S.Header>
        <S.Info>
          <h2>WCMarrocos</h2>
          <h3>
            <MdFiberManualRecord />
            Welben Costa
          </h3>
        </S.Info>
        <MdCreate size={35} />
      </S.Header>
      <SidebarOption Icon={MdComment} title='Threads' />
      <SidebarOption Icon={MdInbox} title='Mentions & reactions' />
      <SidebarOption Icon={MdDrafts} title='Saved items' />
      <SidebarOption Icon={MdBookmarkBorder} title='Channel browser' />
      <SidebarOption Icon={MdGroup} title='People & user groups' />
      <SidebarOption Icon={MdApps} title='Apps' />
      <SidebarOption Icon={MdInsertDriveFile} title='File browser' />
      <SidebarOption Icon={MdKeyboardArrowUp} title='Show less' />
      <hr />
      <SidebarOption Icon={MdKeyboardArrowDown} title='Channels' />
      <hr />
      <SidebarOption Icon={MdAdd} addChannelOption title='Add Channel' />
      {channels?.docs.map(doc => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </S.Container>
  );
}

export default Sidebar;
