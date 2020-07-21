import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>
          <img
            src="https://avatars1.githubusercontent.com/u/53025782?s=400&u=f1ffa8eaccb8545222b7c642532161f11e74a03d&v=4"
            alt="Elton Lazzarin"
          />
        </Avatar>
      </Banner>

      <ProfileData>
        <EditButton outlined>Set up profile</EditButton>

        <h1>Elton Lazzarin</h1>
        <h2>@elton_lazzarin</h2>

        <p>
          Developer at{' '}
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href="https://www.linkedin.com/in/eltonlazzarin/" target="_blank">
            @WordlLab
          </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São José do Rio Preto, Brazil
          </li>
          <li>
            <CakeIcon />
            Born on May 13, 1989
          </li>
        </ul>

        <Followage>
          <span>
            <strong>98 </strong>
            Following
          </span>
          <span>
            <strong>322 </strong>Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
