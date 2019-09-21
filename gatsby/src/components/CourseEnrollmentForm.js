import React from 'react';
import { injectIntl } from 'react-intl';

import Form from './Form';
import Input from './Forms/Input';
import Select from './Forms/Select';
import Textarea from './Forms/Textarea';
import { Row } from '../styles/form';

class CourseEnrollmentForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      telephone: '',
      profession: '',
      formation: '',
      course: '',
      registrationKnowledge: '',
      address: '',
      activityInterest: '',
    };
  }

  handleChange = (event, target) => {
    this.setState({ [target]: event.target.value });
  }

  render() {
    return (
      <Form
        id={this.props.intl.formatMessage({ id: 'enrollmentFormTitle' })}
        method='post'
        action={this.props.formAction}
        data={{
          name: this.state.name,
          age: this.state.age,
          email: this.state.email,
          telephone: this.state.telephone,
          profession: this.state.profession,
          formation: this.state.formation,
          course: this.state.course,
          registrationKnowledge: this.state.registrationKnowledge,
          address: this.state.address,
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
            course: '',
            registrationKnowledge: '',
            address: '',
            activityInterest: '',
          });
        }}
      >
        <h2 className='title'>
          {this.props.intl.formatMessage({ id: 'enrollmentFormTitle' })}
        </h2>
        <Row>
          <Input
            label='name'
            value={this.state.name}
            onValueChange={(e) => this.handleChange(e, 'name')}
          />
          <Input
            label='age'
            type='number'
            min='1'
            value={this.state.age}
            onValueChange={(e) => this.handleChange(e, 'age')}
          />
        </Row>
        <Row>
          <Input
            label='email'
            type='email'
            value={this.state.email}
            onValueChange={(e) => this.handleChange(e, 'email')}
          />
          <Input
            label='telephone'
            type='tel'
            value={this.state.telephone}
            onValueChange={(e) => this.handleChange(e, 'telephone')}
          />
        </Row>
        <Row>
          <Input
            label='profession'
            value={this.state.profession}
            onValueChange={(e) => this.handleChange(e, 'profession')}
          />
          <Select
            label='formation'
            value={this.state.formation}
            onValueChange={(e) => this.handleChange(e, 'formation')}
            options={[
              'middleSchool',
              'highSchool',
              'bachelorsDegree',
              'mastersDegree',
              'doctorsDegree'
            ]}
          />
        </Row>
        <Row>
          <Select
            label='course'
            value={this.state.course}
            onValueChange={(e) => this.handleChange(e, 'course')}
            options={[
              // 'russianSovietFilmHistory',
              'southAfricanFilmHistory',
              // 'chineseFilmHistory',
              'indianFilmHistory'
            ]}
          />
          <Select
            label='registrationKnowledge'
            value={this.state.registrationKnowledge}
            onValueChange={(e) => this.handleChange(e, 'registrationKnowledge')}
            options={[
              'festivalWebsite',
              'email',
              'socialMedia',
              'others'
            ]}
          />
        </Row>
        <Input
          label='address'
          value={this.state.address}
          onValueChange={(e) => this.handleChange(e, 'address')}
        />
        <Textarea
          label='activityInterest'
          value={this.state.activityInterest}
          onValueChange={(e) => this.handleChange(e, 'activityInterest')}
        />
      </Form>
    );
  }
}

export default injectIntl(CourseEnrollmentForm);