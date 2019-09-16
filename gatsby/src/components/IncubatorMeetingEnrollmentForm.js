import React from 'react';
import Recaptcha from 'react-recaptcha';

import { recaptchaSitekey } from '../data/shared';
import { breakpoints } from '../styles/theme';
import {
  ErrorMessage, SuccessMessage, Row, FormControl, Button
} from '../styles/form';

class PreservationMeetingEnrollmentForm extends React.PureComponent {
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
        {params.get('success') &&
          <SuccessMessage>
            Inscrição realizada com sucesso! Em breve entraremos em contato com você.
          </SuccessMessage>
        }
        <form name='contact' method='POST' action={this.props.formAction}>
          <h1 className='title'>
            Inscrição para o Encontro da Incubadora de Projetos de Cinema e Audiovisual da UFF
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
                <span>Idade</span>
                <input required type='text' name='age' />
              </label>
            </FormControl>
          </Row>
          <Row>
            <FormControl>
              <label>
                <span>Profissão</span>
                <input required type='text' name='profession' />
              </label>
            </FormControl>
            <FormControl>
              <label>
                <span>Trabalha em <small>(não obrigatório)</small></span>
                <select name='work_field' defaultValue="">
                  <option disabled value="">
                    Selecione uma opção...
                  </option>
                  <option value="cinemateca">Cinemateca</option>
                  <option value="arquivo">Arquivo</option>
                  <option value="biblioteca">Biblioteca</option>
                  <option value="museu">Museu</option>
                  <option value="universidade">Universidade</option>
                  <option value="escola">Escola</option>
                  <option value="produtora">Produtora de Filmes</option>
                  <option value="emissora">Emissora de Televisão</option>
                  <option value="outros">Outros</option>
                </select>
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
                <span>Formação Acadêmica</span>
                <select required name='formation' defaultValue="">
                  <option disabled value="">
                    Selecione uma opção...
                  </option>
                  <option value="fundamental">Ensino Fundamental</option>
                  <option value="medio">Ensino Médio</option>
                  <option value="superior">Ensino Superior</option>
                  <option value="mestrado">Mestrado</option>
                  <option value="doutorado">Doutorado</option>
                </select>
              </label>
            </FormControl>
            <FormControl>
              <label>
                <span>Como soube do Encontro</span>
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
              <span>Breve descrição de sua atuação ou interesse no Encontro</span>
              <textarea required name='description'></textarea>
            </label>
          </FormControl>
          <FormControl>
            <label>
              <span>Qual é o motivo do interesse pelo Encontro</span>
              <textarea required name='interest'></textarea>
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

export default PreservationMeetingEnrollmentForm;