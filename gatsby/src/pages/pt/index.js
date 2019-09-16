import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import HomeLayout from '../../layouts/home.pt';
import Section from '../../components/Section';
import ActivitiesNav from '../../components/pt/ActivitiesNav';
import ScreeningsNav from '../../components/pt/ScreeningsNav';
import FestivalNav from '../../components/pt/FestivalNav';
import NewsArticles from '../../components/pt/NewsArticles';

class HomePage extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <HomeLayout
        pathname={pathname}
        langPt={pathname}
        langEn='/en/'
        secondaryColumn={
          <React.Fragment>
            <Section title='Inscrições abertas'>
              <ul>
                <li>
                  <Link to='/pt/inscricao/'>
                    Inscrição nos cursos para o público em geral
                  </Link>
                </li>
                <li>
                  <Link to='/pt/inscricao-oficina/'>
                    Inscrição para a oficina "Relações audiovisuais entre os países do BRICS: passado, presente e futuro"
                  </Link>
                </li>
                <li>
                  <Link to='/pt/inscricao-encontro-incubadora/'>
                    Inscrição para o Encontro de Preservação Audiovisual do BRICS
                  </Link>
                </li>
              </ul>
            </Section>
            <ActivitiesNav />
            <ScreeningsNav />
            <FestivalNav />
          </React.Fragment>
        }
      >
        <NewsArticles />
      </HomeLayout>
    );
  }
}

export default HomePage;