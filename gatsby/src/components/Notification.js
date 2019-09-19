import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

import { colors } from '../styles/theme';
import loading from '../images/loading.svg';

class Notification extends React.PureComponent {
  constructor(props) {
    super(props);
    this.timeoutSlideOut;
    this.timeoutDismiss;
    this.state = {
      active: true,
    };
  }

  componentDidUpdate() {
    if (this.props.status) {
      const slideOut = () => {
        this.setState({ active: false });
        clearTimeout(this.timeoutSlideOut);
      };

      const dismiss = () => {
        this.props.handleDismiss();
        clearTimeout(this.timeoutDismiss);
      };
  
      if (this.state.active == true) {
        this.timeoutSlideOut = setTimeout(slideOut, 5000);
      }

      if (this.state.active == false) {
        this.timeoutDismiss = setTimeout(dismiss, 250);
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutSlideOut);
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
          <Content status={this.props.status}>
            {!this.props.status &&
              <Loading src={loading} alt='' />
            }
            {this.props.content}
          </Content>
          {this.props.status &&
            <Close
              type="button"
              aria-label={this.props.intl.formatMessage({ id: 'close' })}
              onClick={this.props.handleDismiss}
            >
              <span aria-hidden="true">&times;</span>
            </Close>
          }
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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

const Loading = styled.img`
  position: relative;
  top: 1px;
  width: 1em;
  height: 1em;
  margin-right: .5em;
  animation-name: ${rotate};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Content = styled.div`
  width: 100%;

  ${props => props.status ? '' : css`
    ::after {
      content: '...';
    }
  `}
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

export default injectIntl(Notification);