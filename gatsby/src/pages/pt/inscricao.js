import React, { PureComponent } from 'react';

import DefaultLayout from '../../layouts/default.pt';
import EnrollmentForm from '../../components/EnrollmentForm';
import Section from '../../components/Section';

class EnrollmentPage extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='Inscrição nos cursos para o público em geral'
        pathname={pathname}
        langPt={pathname}
        langEn=''
        secondaryColumn={
          <Section title='Instruções para inscrição'>
            <p>Estão abertas as inscrições gratuitas para participação nos cursos do BRICS.</p>
            <p>As vagas são limitadas e serão preenchidas por ordem de inscrição.</p>
            <strong>Atenção: o preenchimento do formulário não garante a vaga. Aguarde a confirmação por e-mail.</strong>
          </Section>
        }
      >
        <EnrollmentForm
          location={this.props.location}
          formAction={`${process.env.GATSBY_BASE_WP_URL}/wp-json/brics/v1/enrollment`}
        />
      </DefaultLayout>
    );
  }
}

export default EnrollmentPage;