import React, { PureComponent } from 'react';
import { injectIntl } from 'react-intl';
import Recaptcha from 'react-recaptcha';

import { recaptchaSitekey } from '../data/shared';
import { breakpoints } from '../styles/theme';
import {
  ErrorMessage, SuccessMessage, Row, FormControl, Button
} from '../styles/form';

class ContactForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      recaptcha: null
    };
  }

  handleErrors(intl, error) {
    switch (error) {
    case 'empty_recaptcha':
      return intl.formatMessage({ id: 'contactFormEmptyRecaptcha' });
    case 'recaptcha_error':
      return intl.formatMessage({ id: 'contactFormRecaptchaError' });
    case 'field_error':
      return intl.formatMessage({ id: 'contactFormFieldError' });
    case 'mail_error':
      return intl.formatMessage({ id: 'contactFormMailError' });
    default:
      return false;
    }
  }

  componentDidMount() {
    this.setState(
      { recaptcha:
        <Recaptcha
          render="explicit"
          sitekey={recaptchaSitekey}
          size={window.innerWidth >= breakpoints.sm ? 'normal' : 'compact'}
        />
      }
    );
  }

  render() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);

    return (
      <React.Fragment>
        {this.handleErrors(this.props.intl, params.get('error')) &&
          <ErrorMessage>
            {this.handleErrors(this.props.intl, params.get('error'))}
          </ErrorMessage>
        }
        {params.get('success') &&
          <SuccessMessage>
            {this.props.intl.formatMessage({ id: 'contactFormSuccess' })}
          </SuccessMessage>
        }
        <form name='contact' method='POST' action={this.props.formAction}>
          <h1 className='title'>
            {this.props.intl.formatMessage({ id: 'contactFormTitle' })}
          </h1>
          <Row>
            <FormControl>
              <label>
                <span>{this.props.intl.formatMessage({ id: 'contactFormName' })}</span>
                <input required type='text' name='name' />
              </label>
            </FormControl>
            <FormControl>
              <label>
                <span>{this.props.intl.formatMessage({ id: 'contactFormEmail' })}</span>
                <input required type='email' name='email' />
              </label>
            </FormControl>
          </Row>
          <FormControl>
            <label>
              <span>{this.props.intl.formatMessage({ id: 'contactFormSubject' })}</span>
              <input required type='text' name='subject' />
            </label>
          </FormControl>
          <FormControl>
            <label>
              <span>{this.props.intl.formatMessage({ id: 'contactFormMessage' })}</span>
              <textarea required name='message'></textarea>
            </label>
          </FormControl>
          {process.env.NODE_ENV === 'production' && this.state.recaptcha &&
            <FormControl>
              {this.state.recaptcha}
            </FormControl>
          }
          <FormControl>
            <Button type="submit">
              {this.props.intl.formatMessage({ id: 'contactFormButton' })}
            </Button>
          </FormControl>
        </form>
      </React.Fragment>
    );
  }
}

export default injectIntl(ContactForm);