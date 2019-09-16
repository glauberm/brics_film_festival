import React from 'react';
import { injectIntl } from 'react-intl';

import Form from './Form';
import Input from './Forms/Input';
import Select from './Forms/Select';
import Textarea from './Forms/Textarea';
import { Row } from '../styles/form';

class ExpandedEnrollmentForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      telephone: '',
      profession: '',
      workAt: '',
      formation: '',
      course: '',
      registrationKnowledge: '',
      address: '',
      activityBriefDescription: '',
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
          workAt: this.state.workAt,
          formation: this.state.formation,
          course: this.state.course,
          registrationKnowledge: this.state.registrationKnowledge,
          address: this.state.address,
          activityBriefDescription: this.state.activityBriefDescription,
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
            workAt: '',
            formation: '',
            course: '',
            registrationKnowledge: '',
            address: '',
            activityBriefDescription: '',
            activityInterest: '',
          });
        }}
      >
        <br />
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
            label='workAt'
            value={this.state.workAt}
            notRequired={true}
            handleChange={(e) => this.handleChange(e, 'workAt')}
            options={[
              'cinematheque',
              'archive',
              'library',
              'museum',
              'university',
              'school',
              'movieProducer',
              'tvStation',
              'others'
            ]}
          />
        </Row>
        <Row>
          <Input
            label='profession'
            value={this.state.profession}
            handleChange={(e) => this.handleChange(e, 'profession')}
          />
          <Select
            label='workAt'
            value={this.state.workAt}
            handleChange={(e) => this.handleChange(e, 'workAt')}
            options={[
              'cinematheque',
              'archive',
              'library',
              'museum',
              'university',
              'school',
              'movieProducer',
              'tvStation',
              'others'
            ]}
          />
        </Row>
        <Row>
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
          <Select
            label='registrationKnowledge'
            value={this.state.registrationKnowledge}
            handleChange={(e) => this.handleChange(e, 'registrationKnowledge')}
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
          handleChange={(e) => this.handleChange(e, 'address')}
        />
        <Textarea
          label='activityBriefDescription'
          value={this.state.activityBriefDescription}
          handleChange={(e) => this.handleChange(e, 'activityBriefDescription')}
        />
        <Textarea
          label='activityInterest'
          value={this.state.activityInterest}
          handleChange={(e) => this.handleChange(e, 'activityInterest')}
        />
      </Form>
    );
  }
}

export default injectIntl(ExpandedEnrollmentForm);