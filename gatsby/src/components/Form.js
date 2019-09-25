import React from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';
import Recaptcha from 'react-recaptcha';

import { NotificationContext } from './Notifications';
import { breakpoints, bigButtonStyle } from '../styles/theme';
import { FormControl } from '../styles/form';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.recaptchaInstance;
    this.resetRecaptchaInterval;
    this.state = {
      recaptcha: null,
      recaptchaResponse: null
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
          hl={this.props.intl.formatMessage({ id: 'langString' })}
          verifyCallback={(response) => this.setState({
            recaptchaResponse: response
          }) }
        />
      }
    );

    const resetRecaptcha = () => {
      if (this.recaptchaInstance) {
        this.recaptchaInstance.reset();
      }
    };

    this.resetRecaptchaInterval = setInterval(resetRecaptcha, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.resetRecaptchaInterval);
  }

  handleSubmit = (event, addNotification, changeNotification) => {
    event.preventDefault();

    const notification = addNotification(
      this.props.intl.formatMessage({ id: 'sending' })
    );

    let data = this.props.data;
    data.recaptcha = this.state.recaptchaResponse;
    
    axios({
      method: this.props.method,
      url: this.props.action,
      data: data
    })
      .then(response => {
        changeNotification(
          notification,
          this.props.successMessage,
          'success'
        );
        this.props.successAction();
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

    if (this.recaptchaInstance) {
      this.recaptchaInstance.reset();
    }
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
    case 'recaptcha-error':
      return this.props.intl.formatMessage({ id: 'recaptchaError' });
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
            { process.env.NODE_ENV !== 'development' &&
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
  margin: 0 auto;
  ${bigButtonStyle}
`;

export default injectIntl(Form);