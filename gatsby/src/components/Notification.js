import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';

import { colors } from '../styles/theme';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      active: true,
    };
  }

  render() {
    return (
      <NotificationElement
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        status={this.props.status}
        active={this.state.active}
      >
        <Row>
          <Content>{this.props.content}</Content>
          <Close
            type="button"
            aria-label={this.props.closeMessage}
            onClick={this.props.handleDismiss}
          >
            <span aria-hidden="true">&times;</span>
          </Close>
        </Row>
      </NotificationElement>
    );
  }
}

const slideTop = keyframes`
  from {
    transform: translateY(calc(100% + 1em));
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(calc(100% + 1em));
    opacity: 0;
  }
`;

const NotificationElement = styled.div`
  display: block;
  margin-bottom: 1em;
  padding: 0.75em 1.25em;
  border-top: 1px solid ${colors.grayLightest};
  border-left: 4px solid ${colors.grayDark};
  border-right: 1px solid ${colors.grayLighter};
  border-bottom: 1px solid ${colors.grayLight};
  border-radius: 4px;
  background-color: ${colors.white};
  box-shadow: 0 1px 8px 0 rgba(29,29,27,0.25);
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${props => props.status == 'danger' ? css`
    border-left-color: ${colors.red};
    color: ${colors.red};
  `: ''}

  ${props => props.status == 'success' ? css`
    border-left-color: ${colors.green};
    color: ${colors.green};
  `: ''}

  ${props => props.active ? css`
    animation-name: ${slideTop};
  ` : css`
    animation-name: ${slideDown};
  `}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
`;

const Close = styled.button`
  background: transparent;
  border: 0 none;
  cursor: pointer;
  font-size: 2em;
  display: inline;
  justify-self: flex-end;
  margin-left: 1em;
`;

export default Notification;