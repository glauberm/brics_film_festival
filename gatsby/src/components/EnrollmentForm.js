import React from 'react';
import { injectIntl } from 'react-intl';

import Form from './Form';
import Input from './Forms/Input';
import Select from './Forms/Select';
import Textarea from './Forms/Textarea';
import { Row } from '../styles/form';

class EnrollmentForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      telephone: '',
      profession: '',
      formation: '',
      activityInterest: '',
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
          name: this.state.name,
          age: this.state.age,
          email: this.state.email,
          telephone: this.state.telephone,
          profession: this.state.profession,
          formation: this.state.formation,
          activityInterest: this.state.activityInterest,
        }}
        successMessage={
          this.props.intl.formatMessage({ id: 'enrollmentFormSuccess' })
        }
        successAction={() => {
          this.setState({
            name: '',
            age: '',
            email: '',
            telephone: '',
            profession: '',
            formation: '',
            activityInterest: '',
          });
        }}
      >
        <br/>
        <h2 className='title'>
          {this.props.intl.formatMessage({ id: 'enrollmentFormTitle' })}
        </h2>
        <Row>
          <Input
            label='name'
            value={this.state.name}
            handleChange={(e) => this.handleChange(e, 'name')}
          />
          <Input
            label='age'
            type='number'
            min='1'
            value={this.state.age}
            handleChange={(e) => this.handleChange(e, 'age')}
          />
        </Row>
        <Row>
          <Input
            label='email'
            type='email'
            value={this.state.email}
            handleChange={(e) => this.handleChange(e, 'email')}
          />
          <Input
            label='telephone'
            type='tel'
            value={this.state.telephone}
            handleChange={(e) => this.handleChange(e, 'telephone')}
          />
        </Row>
        <Row>
          <Input
            label='profession'
            value={this.state.profession}
            handleChange={(e) => this.handleChange(e, 'profession')}
          />
          <Select
            label='formation'
            value={this.state.formation}
            handleChange={(e) => this.handleChange(e, 'formation')}
            options={[
              'middleSchool',
              'highSchool',
              'bachelorsDegree',
              'mastersDegree',
              'doctorsDegree'
            ]}
          />
        </Row>
        <Textarea
          label='activityInterest'
          value={this.state.activityInterest}
          handleChange={(e) => this.handleChange(e, 'activityInterest')}
        />
      </Form>
    );
  }
}

export default injectIntl(EnrollmentForm);