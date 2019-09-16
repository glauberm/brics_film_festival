import React, { PureComponent } from 'react';

import DefaultLayout from '../../layouts/default.pt';
import PressOffice from '../../components/PressOffice';
import ContactForm from '../../components/ContactForm';

class PressPage extends PureComponent {
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
          location={this.props.location}
          formAction={`${process.env.GATSBY_BASE_WP_URL}/wp-json/brics/v1/pt_contact_form`}
        />
      </DefaultLayout>
    );
  }
}

export default PressPage;