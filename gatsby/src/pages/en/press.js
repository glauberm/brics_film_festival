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
          location={this.props.location}
          formAction={`${process.env.BASE_WP_REST_API}brics/v1/en_contact_form`}
        />
      </DefaultLayout>
    );
  }
}

export default PressPage;