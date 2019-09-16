import React, { PureComponent } from 'react';
import Recaptcha from 'react-recaptcha';

import { recaptchaSitekey } from '../data/shared';
import { breakpoints } from '../styles/theme';
import {
  ErrorMessage, SuccessMessage, Row, FormControl, Button
} from '../styles/form';

class PpgcineEnrollmentForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      recaptcha: null
    };
  }

  handleErrors(error) {
    switch (error) {
    case 'empty_recaptcha':
      return 'O teste reCAPTCHA não foi preenchido. Por favor, preencha-o e tente novamente.';
    case 'recaptcha_error':
      return 'Erro na validação do reCAPTCHA. Por favor, tente novamente.';
    case 'field_error':
      return 'Erro nos campos do formulário. Por favor, verifique se preencheu corretamente todos os campos e tente novamente.';
    case 'date_error':
      return 'A data limite para as inscrições foi atingida. Não é mais possível se inscrever.';
    case 'course_error':
      return 'O curso que você selecionou já alcançou o seu máximo de vagas. Por favor, selecione outro.';
    case 'insert_error':
      return 'Erro ao adicionar informações no banco de dados. Por favor, tente novamente. Se o problema persistir, entre em contato com a coordenação.';
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
        {this.handleErrors(params.get('error')) &&
          <ErrorMessage>
            {this.handleErrors(params.get('error'))}
          </ErrorMessage>
        }
        <ErrorMessage>
          Inscrições encerradas!
        </ErrorMessage>
        {params.get('success') &&
          <SuccessMessage>
            Inscrição realizada com sucesso! Em breve entraremos em contato com você.
          </SuccessMessage>
        }
        <form name='contact' method='POST' action={this.props.formAction}>
          <h1 className='title'>
            Inscrição para alunos do PPGCine
          </h1>
          <Row>
            <FormControl>
              <label>
                <span>Nome</span>
                <input required type='text' name='name' />
              </label>
            </FormControl>
            <FormControl>
              <label>
                <span>Matrícula <small>(não obrigatório)</small></span>
                <input type='text' name='registration' />
              </label>
            </FormControl>
          </Row>
          <Row>
            <FormControl>
              <label>
                <span>E-mail</span>
                <input required type='email' name='email' />
              </label>
            </FormControl>
            <FormControl>
              <label>
                <span>Telefone</span>
                <input required type='text' name='telephone' />
              </label>
            </FormControl>
          </Row>
          <Row>
            <FormControl>
              <label>
                <span>Grau Acadêmico</span>
                <select required name='academic_degree' defaultValue="">
                  <option disabled value="">
                    Selecione uma opção...
                  </option>
                  <option value="masters">Mestrado</option>
                  <option value="doctorate">Doutorado</option>
                </select>
              </label>
            </FormControl>
            <FormControl>
              <label>
                <span>Ano de ingresso</span>
                <select required name='entry_year' defaultValue="">
                  <option disabled value="">
                    Selecione uma opção...
                  </option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
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
          {process.env.NODE_ENV === 'production' && this.state.recaptcha &&
            <FormControl>
              {this.state.recaptcha}
            </FormControl>
          }
          <FormControl>
            <Button type="submit">
              Enviar
            </Button>
          </FormControl>
        </form>
      </React.Fragment>
    );
  }
}

export default PpgcineEnrollmentForm;