import React, { useState } from 'react';

import data from '../../data.json';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

interface UserType {
  avatar: string;
  author: string;
  twitteruser: string;
  posttime: string;
  posttext: string;
}

interface PropsType {
  data?: Array<UserType>;
}

const Tweet: React.FC<PropsType> = () => {
  const [likeCounter, setLikeCounter] = useState(0);

  return (
    <>
      {data.map((user, index) => (
        <Container key={index}>
          {user.retweet ? (
            <Retweeted>
              <RocketseatIcon />
              You retweeted
            </Retweeted>
          ) : (
            ''
          )}

          <Body>
            <Avatar>
              <img src={user.avatar} alt={user.author} />
            </Avatar>

            <Content>
              <Header>
                <strong>{user.author}</strong>
                <span>{user.twitteruser}</span>
                <Dot />
                <time>{user.posttime}</time>
              </Header>

              <Description>{user.posttext}</Description>

              <ImageContent>
                {user.postimage ? (
                  <img src={user.postimage} alt="Imge Post" />
                ) : (
                  ''
                )}
              </ImageContent>

              <Icons>
                <Status>
                  <CommentIcon />
                  {user.commentscount}
                </Status>
                <Status>
                  <RetweetIcon />
                  {user.retweetscount}
                </Status>
                <Status onClick={() => setLikeCounter(likeCounter + 1)}>
                  <LikeIcon />
                  {user.likecount + likeCounter}
                </Status>
              </Icons>
            </Content>
          </Body>
        </Container>
      ))}
    </>
  );
};

export default Tweet;
