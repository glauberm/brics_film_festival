import React from 'react';

import DefaultLayout from '../../layouts/default.pt';
import PreservationMeetingEnrollmentForm from '../../components/PreservationMeetingEnrollmentForm';
import Section from '../../components/Section';

class PreservationMeetingEnrollmentPage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='Inscrição para o Encontro de Preservação Audiovisual do BRICS'
        pathname={pathname}
        langPt={pathname}
        langEn=''
        secondaryColumn={
          <Section title='Instruções para inscrição'>
            <p>Estão abertas as inscrições gratuitas para participação no Encontro de Preservação Audiovisual do BRICS, que será realizado de 30 de setembro a 2 de outubro de 2019, segunda a quarta, no Reserva Cultural, em Niterói, sempre de 9h às 13h.
            </p>
            <p>As palestras e debates serão em inglês, com tradução simultânea para o português oferecida ao público.</p>
            <p>As vagas são limitadas e serão preenchidas por ordem de inscrição.</p>
            <strong>Atenção: o preenchimento do formulário não garante a vaga. Aguarde a confirmação por e-mail.</strong>
          </Section>
        }
      >
        <PreservationMeetingEnrollmentForm
          location={this.props.location}
          formAction={`${process.env.BASE_WP_REST_API_URL}brics/v1/preservation_meeting_enrollment`}
        />
      </DefaultLayout>
    );
  }
}

export default PreservationMeetingEnrollmentPage;