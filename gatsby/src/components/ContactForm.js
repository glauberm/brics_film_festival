import React from 'react';
import { injectIntl } from 'react-intl';

import Form from './Form';
import Input from './Forms/Input';
import Textarea from './Forms/Textarea';
import { Row } from '../styles/form';

class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  handleChange = (event, target) => {
    this.setState({ [target]: event.target.value });
  }

  render() {
    return (
      <Form
        method='post'
        action={this.props.formAction}
        data={{
          'name': this.state.name,
          'email': this.state.email,
          'subject': this.state.subject,
          'message': this.state.message
        }}
        successMessage={
          this.props.intl.formatMessage({ id: 'contactFormSuccess' })
        }
        successAction={() => {
          this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        }}
      >
        <h1 className='title'>
          {this.props.intl.formatMessage({ id: 'contactFormTitle' })}
        </h1>
        <Row>
          <Input
            label='name'
            value={this.state.name}
            handleChange={(e) => this.handleChange(e, 'name')}
          />
          <Input
            label='email'
            type='email'
            value={this.state.email}
            handleChange={(e) => this.handleChange(e, 'email')}
          />
        </Row>
        <Input
          label='subject'
          value={this.state.subject}
          handleChange={(e) => this.handleChange(e, 'subject')}
        />
        <Textarea
          label='message'
          value={this.state.message}
          handleChange={(e) => this.handleChange(e, 'message')}
        />
      </Form>
    );
  }
}

export default injectIntl(ContactForm);