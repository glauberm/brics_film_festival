import React from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';
import Recaptcha from 'react-recaptcha';

import { NotificationContext } from './Notifications';
import { colors, breakpoints, headingBaseStyle } from '../styles/theme';
import { FormControl } from '../styles/form';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.recaptchaInstance;
    this.state = {
      recaptcha: null
    };
  }

  componentDidMount() {
    this.setState(
      { recaptcha:
        <Recaptcha
          ref={e => this.recaptchaInstance = e}
          render="explicit"
          sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
          size={window.innerWidth >= breakpoints.sm ? 'normal' : 'compact'}
        />
      }
    );
  }

  handleSubmit = (event, addNotification, changeNotification) => {
    event.preventDefault();
    const notification = addNotification(
      this.props.intl.formatMessage({ id: 'sending' })
    );
    
    axios({
      method: this.props.method,
      url: this.props.action,
      data: this.props.data
    })
      .then(response => {
        changeNotification(
          notification,
          this.props.successMessage,
          'success'
        );
        this.props.successAction();

        if (this.recaptchaInstance) {
          this.recaptchaInstance.reset();
        }
      })
      .catch(error => {
        if (error.response) {
          changeNotification(
            notification,
            this.handleErrors(error.response.data),
            'danger'
          );
        } else if (error.request) {
          if (process.env.NODE_ENV !== 'production') {
            changeNotification(
              notification,
              this.props.intl.formatMessage({ id: 'unexpectedError' }),
              'danger'
            );
          }
        } else {
          if (process.env.NODE_ENV !== 'production') {
            changeNotification(
              notification,
              this.props.intl.formatMessage({ id: 'unexpectedError' }),
              'danger'
            );
          }
        }
      });
  }

  handleErrors = (error) => {
    switch (error.code) {
    case 'rest_invalid_param':
      const fields = Object.keys(error.data.params).map((field) => {
        return this.props.intl.formatMessage({ id: field });
      });

      return `
        ${this.props.intl.formatMessage({ id: 'fieldError' })}: ${fields.join(', ')}.
      `;
    case 'mail_error':
      return this.props.intl.formatMessage({ id: 'mailError' });
    case 'insert_error':
      return this.props.intl.formatMessage({ id: 'mailError' });
    default:
      return this.props.intl.formatMessage({ id: 'unexpectedError' });
    }
  }

  render() {
    return (
      <NotificationContext.Consumer>
        {(context) => (
          <form
            name='contact'
            action={this.props.action}
            method={this.props.method}
            onSubmit={
              (event) => this.handleSubmit(event, context.add, context.change)
            }
          >
            {this.props.children}
            {process.env.NODE_ENV === 'production' && this.state.recaptcha &&
              <FormControl>
                {this.state.recaptcha}
              </FormControl>
            }
            <FormControl>
              <Button
                type="submit"
              >
                {this.props.intl.formatMessage({ id: 'send' })}
              </Button>
            </FormControl>
          </form>
        )}
      </NotificationContext.Consumer>
    );
  }
}

const Button = styled.button`
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

export default injectIntl(Form);