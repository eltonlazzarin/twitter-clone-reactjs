import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar>
          <img src={require('../../assets/avatar.png')} alt="Avatar" />
        </Avatar>

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>
      <FollowButton outlined>Follow</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
