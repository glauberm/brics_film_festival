import React from 'react';

import DefaultLayout from '../../layouts/default.pt';
import WorkshopEnrollmentForm from '../../components/WorkshopEnrollmentForm';
import Section from '../../components/Section';

class WorkshopEnrollmentPage extends React.PureComponent {
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
            <p>Estão abertas as inscrições gratuitas para a oficina “Relações audiovisuais entre os países do BRICS: passado, presente e futuro”, oferecida pelos professores Stephanie Dennison e Chris Homewood, da Universidade de Leeds (Inglaterra), no dia 3 de outubro, às 10h, na Sala Nelson Pereira dos Santos.</p>
            <p>O objetivo da oficina é analisar as zonas de contato das culturas cinematográficas do BRICS. Através de uma abordagem acessível e provocativa, será discutido em que medida os diálogos entre as culturas cinematográficas dos países do BRICS ocorreram, sob qual forma eles se deram, que quais são as possíveis direções futuras para o intercâmbio cultural entre as indústrias audiovisuais do BRICS.</p>
            <p>A oficina é destinada a cineastas, gestores, pesquisadores, e demais interessados em audiovisual e nas relações culturais, econômicas e políticas entre os países do BRICS.</p>
          </Section>
        }
      >
        <WorkshopEnrollmentForm
          location={this.props.location}
          formAction={`${process.env.BASE_WP_REST_API_URL}brics/v1/workshop_enrollment`}
        />
      </DefaultLayout>
    );
  }
}

export default WorkshopEnrollmentPage;