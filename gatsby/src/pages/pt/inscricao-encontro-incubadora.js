import React, { PureComponent } from 'react';
import styled from '@emotion/styled';

import DefaultLayout from '../../layouts/default.pt';
import IncubatorMeetingEnrollmentForm from '../../components/IncubatorMeetingEnrollmentForm';
import Section from '../../components/Section';
import { colors } from '../../styles/theme';

class IncubatorMeetingEnrollmentPage extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='Inscrição para o Encontro de Preservação Audiovisual do BRICS'
        pathname={pathname}
        langPt={pathname}
        langEn=''
        secondaryColumn={
          <React.Fragment>
            <Section title='Programação'>
              <Schedule>
                <h3><small>9h00 - Mesa 1</small><br/>Representantes de Incubadoras na Indústria Criativa Carioca</h3>
                <Description>
                  <h4>Mediação</h4>
                  <dl>
                    <dt>Elianne Ivo</dt>
                    <dd>Coordenadora do Bacharelado de Cinema e Vídeo da UFF</dd>
                    <dt>Lucimar Dantas</dt>
                    <dd>Coordenadora da Incubadora de Empresas da COPPE/UFRJ</dd>
                    <dt>Gabriel Meinberg</dt>
                    <dd>Vintepoucos Produções (Empresa incubada no Gênesis - PUC-Rio)</dd>
                  </dl>
                </Description>

                <h3><small>11h00 - Mesa 1</small><br/>Coffee Break</h3>

                <h3><small>11h15 - Mesa 2</small><br/>Os novos polos de produção audiovisual no Estado do Rio de Janeiro</h3>
                <Description>
                  <h4>Mediação</h4>
                  <dl>
                    <dt>India Mara Martins</dt>
                    <dd>Coordenadora 4ª. Edição do Festival de Cinema do BRICS</dd>
                    <dt>Marcos Marins</dt>
                    <dd>Representante da Prefeitura de Friburgo</dd>
                    <dt>Andreia Cunha da Silva Monken</dt>
                    <dd>Representante da  Prefeitura de Maricá - Secretária de Cultura de Maricá</dd>
                    <dt>Lia Baron</dt>
                    <dd>Representante da Secretaria de Cultura de Niterói</dd>
                  </dl>
                </Description>

                <h3><small>12h30 - Mesa 2</small><br/>Intervalo para almoço</h3>

                <h3><small>14h00 - Mesa 2</small><br/>Lançamento da Araci - Incubadora de projetos audiovisuais da UFF</h3>
                <Description>
                  <h4>Apresentação</h4>
                  <dl>
                    <dt>India Mara Martins</dt>
                    <dd>Coordenadora 4ª. Edição do Festival de Cinema do BRICS</dd>
                    <dt>Elianne Ivo</dt>
                    <dd>Coordenadora do Bacharelado de Cinema e Vídeo da UFF</dd>
                  </dl>
                </Description>

                <h3>Roda de conversas com alunos e egressos do Curso de Cinema da UFF sobre as perspectivas da Incubadora de Audiovisual da UFF</h3>
              </Schedule>
            </Section>

            <Section title='Instruções para inscrição'>
              <p>Estão abertas as inscrições gratuitas para participação no Encontro da Incubadora Audiovisual do BRICS, que será realizado de 04 de outubro , sexta-feira, das 9:30 às 16hs no Reserva Cultural, Niterói.
              </p>
              <p>As palestras e debates serão em inglês, com tradução simultânea para o português oferecida ao público.</p>
              <p>As vagas são limitadas e serão preenchidas por ordem de inscrição.</p>
              <strong>Atenção: o preenchimento do formulário não garante a vaga. Aguarde a confirmação por e-mail.</strong>
            </Section>
          </React.Fragment>
        }
      >
        <IncubatorMeetingEnrollmentForm
          location={this.props.location}
          formAction={`${process.env.GATSBY_BASE_WP_URL}/wp-json/brics/v1/incubator_meeting_enrollment`}
        />
      </DefaultLayout>
    );
  }
}

const Schedule = styled.div`
  small {
    color: ${colors.grayDark};
  }
`;

const Description = styled.div`
  h4 {
    margin-bottom: 0;
  }

  dl {
    font-size: .8em;
    margin-left: .5em;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin: 0 0 0 .5em;
  }
`;

export default IncubatorMeetingEnrollmentPage;