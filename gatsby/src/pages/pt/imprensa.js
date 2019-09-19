import React from 'react';

import DefaultLayout from '../../layouts/default.pt';
import PressOffice from '../../components/PressOffice';
import ContactForm from '../../components/ContactForm';

class PressPage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='Imprensa'
        pathname={pathname}
        langPt={pathname}
        langEn='/en/press/'
        secondaryColumn={
          <PressOffice />
        }
      >
        <ContactForm
          formAction={'https://wp.bricsfilmfestival.com.br/wp-json/brics/v1/contact_form'}
        />
      </DefaultLayout>
    );
  }
}

export default PressPage;