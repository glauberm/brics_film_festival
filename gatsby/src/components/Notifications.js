import React from 'react';
import styled from '@emotion/styled';

import Notification from './Notification';

export const NotificationContext = React.createContext();

class NotificationProvider extends React.PureComponent {
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
        <NotificationContainer
          aria-live="polite"
          aria-atomic="true"
        >
          {this.state.notifications.map(({ id, content, status }) => (
            <Notification
              key={id}
              content={content}
              status={status}
              // closeMessage={this.props.closeMessage}
              handleDismiss={() => this.remove(id)}
            />
          ))}
        </NotificationContainer>
      </NotificationContext.Provider>
    );
  }
}

const NotificationContainer = styled.div`
  position: fixed;
  z-index: 4;
  bottom: 0;
  left: 0;
  margin: 0 1em;
`;

export default NotificationProvider;