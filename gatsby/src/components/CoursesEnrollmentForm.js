import React from 'react';

import Form from './Form';
import Input from './Forms/Input';
import Select from './Forms/Select';
import { Row, FormControl } from '../styles/form';

class CoursesEnrollmentForm extends React.PureComponent {
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
      knowledge: '',
      address: '',
      interest: '',
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
          phone: this.state.phone,
          profession: this.state.profession,
          formation: this.state.formation,
          course: this.state.course,
          knowledge: this.state.knowledge,
          address: this.state.address,
          interest: this.state.interest,
        }}
        successMessage={
          this.props.intl.formatMessage({ id: 'contactFormSuccess' })
        }
        successAction={() => {
          this.setState({
            name: '',
            age: '',
            email: '',
            phone: '',
            profession: '',
            formation: '',
            course: '',
            knowledge: '',
            address: '',
            interest: '',
          });
        }}
      >
        <h2>
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
              'fundamental', 'medio', 'superior', 'mestrado', 'doutorado'
            ]}
          />
        </Row>
        <Row>
          <FormControl>
            <label>
              <span>Curso</span>
              <select required name='course' defaultValue="">
                <option disabled value="">Selecione uma opção...</option>
                <option value="russian_soviet">História do cinema russo e soviético</option>
                <option value="south_african">História do cinema sul-africano</option>
                <option value="chinese">História do cinema chinês</option>
                <option value="indian">História do cinema indiano</option>
              </select>
            </label>
          </FormControl>
          <FormControl>
            <label>
              <span>Como soube do curso</span>
              <select required name='knowledge' defaultValue="">
                <option disabled value="">
                  Selecione uma opção...
                </option>
                <option value="site">Site do Festival</option>
                <option value="email">E-mail</option>
                <option value="social">Redes Sociais</option>
                <option value="others">Outros</option>
              </select>
            </label>
          </FormControl>
        </Row>
        <FormControl>
          <label>
            <span>Endereço</span>
            <input required type='text' name='address' />
          </label>
        </FormControl>
        <FormControl>
          <label>
            <span>Qual é o motivo do interesse pelo curso</span>
            <textarea required name='interest'></textarea>
          </label>
        </FormControl>
      </Form>
    );
  }
}

export default CoursesEnrollmentForm;