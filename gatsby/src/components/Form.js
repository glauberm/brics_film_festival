import React from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';
import ReCAPTCHA from 'react-google-recaptcha';

import { NotificationContext } from './Notifications';
import { breakpoints, bigButtonStyle } from '../styles/theme';
import { FormControl } from '../styles/form';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.recaptchaInstance = React.createRef();
    this.resetRecaptchaInterval;
    this.state = {
      recaptchaResponse: null
    };
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

    this.recaptchaInstance.current.reset();
  }

  handleErrors = (error) => {
    console.log(error);
    
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
      return this.props.intl.formatMessage({ id: 'insertError' });
    case 'rest_missing_callback_param':
    case 'recaptcha-error':
      return this.props.intl.formatMessage({ id: 'recaptchaError' });
    default:
      return this.props.intl.formatMessage({ id: 'unexpectedError' });
    }
  }

  onRecaptchaChange = (value) => {
    this.setState({
      recaptchaResponse: value
    });
  };

  onRecaptchaErrored = (addNotification) => {
    addNotification('Chave do reCAPTCHA expirada. Por favor, marque o campo novamente.', 'danger');
  };

  onRecaptchaExpired = (addNotification) => {
    addNotification('Erro ao validar reCAPTCHA. Por favor, cheque a sua conexão e tente novamente', 'danger');
  };

  getRecaptchaSize = () => {
    if (typeof window !== 'undefined' && window) {
      return window.innerWidth >= breakpoints.sm ? 'normal' : 'compact';
    }

    return 'compact';
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
            <FormControl>
              <ReCAPTCHA
                ref={this.recaptchaInstance}
                sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                onChange={this.onRecaptchaChange}
                onExpired={() => this.onRecaptchaExpired(context.add)}
                onErrored={() => this.onRecaptchaErrored(context.add)}
                hl={this.props.intl.formatMessage({ id: 'langString' })}
                size={this.getRecaptchaSize}
              />
            </FormControl>
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