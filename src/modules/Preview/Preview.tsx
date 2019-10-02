import React from 'react';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import styled from 'styled-components';

const StyledMarkdown = styled(ReactMarkdown)`
  h1, h2 {
    border-bottom: 1px solid #e0e0e0;
  }
  code {
    background-color: #e0e0e0;
    font-family: 'Ubuntu Mono', monospace;
    padding: 2px 8px;
    border-radius: 2px;
  }
  blockquote {
    margin: 0;
    border-left: 4px solid #e0e0e0;
    padding-left: 1em;
  }
  hr {
    height: 4px;
    padding: 0;
    margin: 24px 0;
    background-color: #e0e0e0;
    border: 0;
  }
`;

type Props = {
  value: string;
};

const Preview = ({ value }: Props) => {
  return <StyledMarkdown source={value} plugins={[breaks]} />;
};

export default Preview;
