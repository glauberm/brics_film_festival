import React from 'react';

import DefaultLayout from '../../layouts/default.en';
import PressOffice from '../../components/PressOffice';
import ContactForm from '../../components/ContactForm';

class PressPage extends React.PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <DefaultLayout
        pageTitle='Imprensa'
        pathname={pathname}
        langEn={pathname}
        langPt='/pt/imprensa/'
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