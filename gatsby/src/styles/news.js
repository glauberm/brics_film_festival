import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';

import { bigButtonStyle } from './theme';

const fadeInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(1em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ArticleContainer = styled.div`
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${props => props.isVisible ?
    props => (props.number > 2) ? css`
      animation-name: ${fadeInTop};
    `: ''
    : css`
      border: 0;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
  `}
`;

export const Button = styled.button`
  margin: -1em auto 0;
  ${bigButtonStyle}
`;