import React from 'react';

import { db } from '../../firebase'
import * as SO from './styles'

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const addChannel = () => {
    const channelName = prompt('Please enter the channel name')

    if (channelName) {
      db.collection('rooms').add({
        name: channelName
      })
    }
  }

  const selectChannel = () => {}

  return (
    <SO.OptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon size={20} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SO.OptionChannel>
          <span>#</span> {title}
        </SO.OptionChannel>
      )}
    </SO.OptionContainer>
  );
}

export default SidebarOption;
