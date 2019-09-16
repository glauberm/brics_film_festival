import React from 'react';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';

import { colors } from '../styles/theme';

export const NotificationContext = React.createContext();

class NotificationProvider extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      notifications: []
    };
  }

  clone(notifications) {
    return notifications.slice(0);
  }

  add = (content, status = null) => {
    const id = this.count++;
    const notifications = this.clone(this.state.notifications);
    notifications.push({ id, content, status });

    this.setState({
      notifications: notifications
    });

    return id;
  }

  remove = (id) => {
    const notifications = this.state.notifications
      .filter(notification => notification.id !== id);

    this.setState({
      notifications: notifications
    });
  }

  change = (id, content, status) => {
    const notifications = this.state.notifications;

    notifications.map((notification) => {
      if (notification.id === id) {
        notification.content = content;
        notification.status = status;
      }
    });
    
    this.setState({
      notifications: notifications
    });
  }

  render() {
    const context = {
      add: this.add,
      remove: this.remove,
      change: this.change,
    };

    return (
      <NotificationContext.Provider value={context}>
        {this.props.children}
        <NotificationContainer>
          {this.state.notifications.map(({ id, content, status }) => (
            <Notification
              key={id}
              role="status"
              aria-live="polite"
              status={status}
            >
              <Row>
                <Content>{content}</Content>
                <Close
                  type="button"
                  // aria-label={this.props.intl.formatMessage({ id: 'close' })}
                  onClick={() => this.remove(id)}
                >
                  <span aria-hidden="true">&times;</span>
                </Close>
              </Row>
            </Notification>
          ))}
        </NotificationContainer>
      </NotificationContext.Provider>
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

const NotificationContainer = styled.div`
  position: fixed;
  z-index: 4;
  bottom: 0;
  left: 0;
  margin: 0 1em;
`;

const Notification = styled.div`
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
  animation-name: ${slideTop};

  ${props => props.status == 'danger' ? css`
    border-left-color: ${colors.red};
    color: ${colors.red};
  `: ''}

  ${props => props.status == 'success' ? css`
    border-left-color: ${colors.green};
    color: ${colors.green};
  `: ''}
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

export default NotificationProvider;