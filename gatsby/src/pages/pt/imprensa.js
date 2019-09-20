import React from 'react';

import DefaultLayout from '../../layouts/default.pt';
import PressOffice from '../../components/PressOffice';
import ContactForm from '../../components/ContactForm';

class PressPage extends React.Component {
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
          formAction={`${process.env.GATSBY_BASE_WP_REST_API_URL}contact_form`}
        />
      </DefaultLayout>
    );
  }
}

export default PressPage;