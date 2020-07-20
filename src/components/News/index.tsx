import React from 'react';

import { Container } from './styles';

interface Props {
  header: string;
  topic: string;
  link?: string;
}

const News: React.FC<Props> = ({ header, topic, link }) => {
  return (
    <Container>
      <div>
        <span>{header}</span>
        <strong>{topic}</strong>
      </div>
      {link ? <img src={link} alt="News" /> : ''}
    </Container>
  );
};

export default News;
