import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';

import { colors, headingBaseStyle } from './theme';

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

  ${props => props.isActive ?
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

  :nth-of-type(2) {
    animation-duration: 0.3s;
  }

  :nth-of-type(2) {
    animation-duration: 0.35s;
  }
`;

export const Button = styled.button`
  ${headingBaseStyle}
  padding: 0.75em 2.5em;
  margin: 0 auto;
  background-color: ${colors.orange};
  color: ${colors.black};
  border: 0 none;
  border-radius: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.25em;
  transition: background-color 0.3s ease;
  box-shadow: 0 -2em 2em -2em rgba(29,29,27,0.25) inset;

  :hover,
  :focus,
  :active {
    outline: none;
  }

  :hover,
  :focus {
    background-color: ${colors.yellow};
  }

  :active {
    box-shadow:
      0 -2em 2em -2em rgba(29,29,27,0.25) inset,
      0 2px 2px 2px rgba(29,29,27,0.175) inset
    ;
  }
`;