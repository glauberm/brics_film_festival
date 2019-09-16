import React, { PureComponent } from 'react';
import styled from '@emotion/styled';

import ScheduleLayout from '../../layouts/schedule.pt';
import Breadcrumb from '../../components/Breadcrumb';
import { colors, breakpoints } from '../../styles/theme';

class SchedulePage extends PureComponent {
  render() {
    const pathname = this.props.location.pathname;

    return (
      <ScheduleLayout
        pageTitle='Programação'
        pathname={pathname}
        langPt={pathname}
        langEn='/en/schedule/'
        secondaryColumn=''
      >
        <Breadcrumb crumbs={[
          {href: '/pt/programacao/', text: 'Programação'}
        ]} />
        <h1 className='page-title'>Programação</h1>
        <Schedule>
          <h2 className='title'>
            23 a 27 de setembro<br />
            <small>2ª a 6ª feira</small>
          </h2>
          <Row>
            <Article>
              <h3>
                <small>9:00</small><br />
                Curso de História do Cinema Indiano<br />
                <span className='text-primary'>Prof. Ashish Rajadhyaksha</span>
              </h3>
              <DescriptionList>
                <dt>Duração</dt>
                <dd>4 horas</dd>
                <dt>Local</dt>
                <dd>InterArtes - IACS</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>9:00</small><br />
                Curso de História do Cinema Chinês<br />
                <span className='text-primary'>Prof. Shi Chuan</span>
              </h3>
              <DescriptionList>
                <dt>Duração</dt>
                <dd>4 horas</dd>
                <dt>Local</dt>
                <dd>Reserva Cultural - Sala 1</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>9:00</small><br />
                Abertura da Exposição de Equipamentos Cinematográficos Históricos<br />
              </h3>
              <DescriptionList>
                <dt>Local</dt>
                <dd>Reserva Cultural</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>14:00</small><br />
                Curso de História do Cinema Sul Africano<br />
                <span className='text-primary'>Prof. Martin Petrus Botha</span>
              </h3>
              <DescriptionList>
                <dt>Duração</dt>
                <dd>4 horas</dd>
                <dt>Local</dt>
                <dd>InterArtes - IACS</dd>
              </DescriptionList>
            </Article>
          </Row>

          <h2 className='title'>
            30 de setembro<br />
            <small>2ª feira</small>
          </h2>
          <Row>
            <Article>
              <h3>
                <small>9:00</small><br />
                Encontro de Preservação<br />
                <span className='text-primary'>Coordenação Prof. Dr. Rafael de Luna Freire</span>
              </h3>
              <DescriptionList>
                <dt>Duração</dt>
                <dd>2 horas</dd>
                <dt>Local</dt>
                <dd>Reserva Cultural - Sala 1</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>14:00</small><br />
                Curso de História do Cinema Russo Soviético<br />
                <span className='text-primary'>Petr Bagrov</span>
              </h3>
              <DescriptionList>
                <dt>Duração</dt>
                <dd>4 horas</dd>
                <dt>Local</dt>
                <dd>InterArtes - IACS</dd>
              </DescriptionList>
            </Article>
          </Row>

          <h2 className='title'>
            01 de outubro<br />
            <small>3ª feira</small>
          </h2>
          <Row>
            <Article>
              <h3>
                <small>9:30</small><br />
                Encontro de Preservação<br />
                <span className='text-primary'>Coordenação Prof. Dr. Rafael de Luna Freire</span>
              </h3>
              <DescriptionList>
                <dt>Duração</dt>
                <dd>3 horas</dd>
                <dt>Local</dt>
                <dd>Reserva Cultural - Sala Nelson Pereira dos Santos</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>14:00</small><br />
                Curso de História do Cinema Russo Soviético<br />
                <span className='text-primary'>Petr Bagrov</span>
              </h3>
              <DescriptionList>
                <dt>Duração</dt>
                <dd>4 horas</dd>
                <dt>Local</dt>
                <dd>InterArtes - IACS</dd>
              </DescriptionList>
            </Article>
          </Row>

          <h2 className='title'>
            02 de outubro<br />
            <small>4ª feira</small>
          </h2>
          <Row>
            <Article>
              <h3>
                <small>9:30</small><br />
                Encontro de Preservação<br />
                <span className='text-primary'>Coordenação Prof. Dr. Rafael de Luna Freire</span>
              </h3>
              <DescriptionList>
                <dt>Duração</dt>
                <dd>3 horas</dd>
                <dt>Local</dt>
                <dd>Reserva Cultural - Sala Nelson Pereira dos Santos</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>14:00</small><br />
                Curso de História do Cinema Russo Soviético<br />
                <span className='text-primary'>Petr Bagrov</span>
              </h3>
              <DescriptionList>
                <dt>Duração</dt>
                <dd>4 horas</dd>
                <dt>Local</dt>
                <dd>InterArtes - IACS</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>18:30</small><br />
                Abertura da Exposição de Equipamentos Cinematográficos Históricos<br />
              </h3>
              <DescriptionList>
                <dt>Local</dt>
                <dd>Centro de Artes UFF</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>19:00</small><br />
                Cerimônia de Abertura<br />
              </h3>
              <DescriptionList>
                <dt>Local</dt>
                <dd>Cine Arte UFF</dd>
              </DescriptionList>
            </Article>
          </Row>

          <h2 className='title'>
            03 de outubro<br />
            <small>5ª feira</small>
          </h2>
          <Row>
            <div>
              <Article>
                <h3>
                  <small>9:30</small><br />
                  Oficina relações audiovisuais entre os países do BRICS: passado, presente e futuro<br />
                  <span className='text-primary'>Coordenação Profa. Dra. Stephanie Dennison e Prof. Dr. Chris Homewood (Universidade de Leeds, Inglaterra)</span>
                </h3>
                <DescriptionList>
                  <dt>Duração</dt>
                  <dd>3 horas</dd>
                  <dt>Local</dt>
                  <dd>Reserva Cultural - Sala 1</dd>
                </DescriptionList>
              </Article>
            </div>

            <div>
              <Article>
                <h3>
                  <small>16:00</small><br />
                  Mostra Escola<br />
                  <span className='text-primary'>Sessão 1 (Livre)</span>
                </h3>
                <DescriptionList>
                  <dt><em>Metanoia</em></dt>
                  <dd>Brasil (2018), 4 min - Unespar</dd>
                  <dt><em>stamos sendo</em></dt>
                  <dd>Brasil (2019), 6 min - UNA</dd>
                  <dt><em>Rolê no Centro</em></dt>
                  <dd>Brasil (2018), 14 min - UFF</dd>
                  <dt><em>Do lar/Your house</em></dt>
                  <dd>Brasil (2018), 9 min - UFPE </dd>
                  <dt><em>A glow worm in the jungle</em></dt>
                  <dd>Índia (2018), 12 min - Film and Television Institute of India</dd>
                  <dt><em>Songs from Kanzu</em></dt>
                  <dd>China/Brasil (2016), 10 min - Escola chinesa/USP</dd>
                  <dt><em>Diriti de Bdé Burê</em></dt>
                  <dd>Brasil (2018), 19 min - IFG</dd>
                  <dt><em>Dariya Hase Dongaravar / Sea laughs at the mountain</em></dt>
                  <dd>Índia (2018), 20 min - FTII</dd>
                </DescriptionList>
                <p>Sessão seguida de debate.</p>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Reserva Cultural - Sala 1</dd>
                </DescriptionList>
              </Article>
            </div>

            <div>
              <Article>
                <h3>
                  <small>18:00</small><br />
                  Mostra Clássicos<br />
                </h3>
                <DescriptionList>
                  <dt><em>Sorgo Vermelho</em></dt>
                  <dd>Hong gao liang, de Zhang Yimou, China, 95 min, 1987. 16 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Cine Arte UFF</dd>
                </DescriptionList>
              </Article>

              <Article>
                <h3>
                  <small>18:30</small><br />
                  Mostra Contemporânea<br />
                </h3>
                <DescriptionList>
                  <dt><em>How Long Will I Love u</em></dt>
                  <dd>De Lun Su, China, 101 min, 2018. 14 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Reserva Cultural - Sala 1</dd>
                </DescriptionList>
              </Article>
            </div>
            <div>
              <Article>
                <h3>
                  <small>20:10</small><br />
                  Mostra Clássicos<br />
                </h3>
                <DescriptionList>
                  <dt><em>It Was the Month of May</em></dt>
                  <dd>Byl mesiats mai, de Marlen Khut︠s︡iev, Rússia, 115 min,	1970. 16 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Cine Arte UFF</dd>
                </DescriptionList>
              </Article>

              <Article>
                <h3>
                  <small>21:00</small><br />
                  Mostra Contemporânea<br />
                </h3>
                <DescriptionList>
                  <dt><em>The Lord Eagle</em></dt>
                  <dd>De Eduard Novikov, Rússia, 80 min, 2018. 14 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Reserva Cultural - Sala 1</dd>
                </DescriptionList>
              </Article>
            </div>
          </Row>

          <h2 className='title'>
            04 de outubro<br />
            <small>6ª feira</small>
          </h2>
          <Row>
            <Article>
              <h3>
                <small>9:00</small><br />
                Fórum: Perspectivas para a criação de incubadoras na Indústria Criativa<br />
                <span className='text-primary'>Profa. Dra. Elianne Ivo; Profa. Dra. Índia Mara Martins</span>
              </h3>
              <DescriptionList>
                <dt>Duração</dt>
                <dd>3 horas</dd>
                <dt>Local</dt>
                <dd>InterArtes - IACS</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>14:00</small><br />
                Fórum: Perspectivas para a criação de incubadoras na Indústria Criativa<br />
                <span className='text-primary'>Profa. Dra. Elianne Ivo; Profa. Dra. Índia Mara Martins</span>
              </h3>
              <DescriptionList>
                <dt>Duração</dt>
                <dd>3 horas</dd>
                <dt>Local</dt>
                <dd>InterArtes - IACS</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>16:00</small><br />
                Mostra Escolas<br />
                <span className='text-primary'>Sessão 2 (16 anos)</span>
              </h3>
              <DescriptionList>
                <dt><em>Crônicas sul-africanas</em></dt>
                <dd>África do Sul (1987), 105 min - Ateliers Varan</dd>
              </DescriptionList>
              <p>Sessão seguida de debate.</p>
              <DescriptionList>
                <dt>Local</dt>
                <dd>Reserva Cultural - Sala 1</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>18:30</small><br />
                Mostra Contemporânea<br />
              </h3>
              <DescriptionList>
                <dt><em>Tutor</em></dt>
                <dd>De Anton Kolomeets, Rússia, 85 min, 2018. 16 anos</dd>
              </DescriptionList>
              <DescriptionList>
                <dt>Local</dt>
                <dd>Reserva Cultural - Sala 1</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>19:00</small><br />
                Mostra Clássicos<br />
                <span className='text-primary'>Sessão Especial OSN Cine</span>
              </h3>
              <DescriptionList>
                <dt><em>Ganga Bruta</em></dt>
                <dd>De Humberto Mauro, Brasil, 82 min, 1933. 14 anos</dd>
              </DescriptionList>
              <DescriptionList>
                <dt>Local</dt>
                <dd>Cine Arte UFF</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>21:00</small><br />
                Mostra Contemporânea<br />
              </h3>
              <DescriptionList>
                <dt><em>The Tokoloshe</em></dt>
                <dd>De Jerome Pikwane, África do Sul, 91 min, 2019. 16 anos</dd>
              </DescriptionList>
              <DescriptionList>
                <dt>Local</dt>
                <dd>Reserva Cultural - Sala 1</dd>
              </DescriptionList>
            </Article>
          </Row>

          <h2 className='title'>
            05 de outubro<br />
            <small>Sábado</small>
          </h2>
          <Row>
            <div>
              <Article>
                <h3>
                  <small>10:30</small><br />
                  Mostra Clássicos<br />
                  <span className='text-primary'>Sessão Especial OSN Cine</span>
                </h3>
                <DescriptionList>
                  <dt><em>Ganga Bruta</em></dt>
                  <dd>De Humberto Mauro, Brasil, 82 min, 1933. 14 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Cine Arte UFF</dd>
                </DescriptionList>
              </Article>
            </div>

            <Article>
              <h3>
                <small>16:00</small><br />
                Mostra Escola<br />
                <span className='text-primary'>Sessão 3 (16 anos)</span>
              </h3>
              <DescriptionList>
                <dt><em>California</em></dt>
                <dd>Rússia (2017), 18 min - VGIK</dd>
                <dt><em>Sandhyavela</em></dt>
                <dd>Índia (2018), 15 min - Film and Television Institute of India</dd>
                <dt><em>Kalendar</em></dt>
                <dd>Rússia (2018), 28 min - Moscow School of New Cinema</dd>
                <dt><em>Vigia/Night Watch</em></dt>
                <dd>Brasil (2018), 22 min - UFF</dd>
              </DescriptionList>
              <p>Sessão seguida de debate.</p>
              <DescriptionList>
                <dt>Local</dt>
                <dd>Reserva Cultural - Sala 1</dd>
              </DescriptionList>
            </Article>

            <div>
              <Article>
                <h3>
                  <small>18:00</small><br />
                  Mostra Clássicos<br />
                </h3>
                <DescriptionList>
                  <dt><em>Um burro numa aldeia brâmane</em></dt>
                  <dd>Agraharathil Kazhuthai, de	John Abraham, Índia, 96 min, 1977. 14 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Cine Arte UFF</dd>
                </DescriptionList>
              </Article>

              <Article>
                <h3>
                  <small>18:30</small><br />
                  Mostra Contemporânea<br />
                </h3>
                <DescriptionList>
                  <dt><em>White Snake</em></dt>
                  <dd>De Amp Wong e Zhao Ji, China, 98 min, 2019. 14 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Reserva Cultural - Sala 1</dd>
                </DescriptionList>
              </Article>
            </div>

            <div>
              <Article>
                <h3>
                  <small>20:10</small><br />
                  Mostra Clássicos<br />
                </h3>
                <DescriptionList>
                  <dt><em>Come Back, Africa</em></dt>
                  <dd>De Lionel Rogosin, África do Sul, 86 min, 1959. 16 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Cine Arte UFF</dd>
                </DescriptionList>
              </Article>

              <Article>
                <h3>
                  <small>21:00</small><br />
                  Mostra Contemporânea<br />
                </h3>
                <DescriptionList>
                  <dt><em>Filhos de Macunaíma</em></dt>
                  <dd>De Miguel Antunes Ramos, Brasil, 90 min, 2019. 14 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Reserva Cultural - Sala 1</dd>
                </DescriptionList>
              </Article>
            </div>
          </Row>

          <h2 className='title'>
            06 de outubro<br />
            <small>Domingo</small>
          </h2>
          <Row>
            <div>
              <Article>
                <h3>
                  <small>10:30</small><br />
                  Mostra Clássicos<br />
                  <span className='text-primary'>Sessão Especial OSN Cine</span>
                </h3>
                <DescriptionList>
                  <dt><em>Ganga Bruta</em></dt>
                  <dd>De Humberto Mauro, Brasil, 82 min, 1933. 14 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Cine Arte UFF</dd>
                </DescriptionList>
              </Article>
            </div>

            <Article>
              <h3>
                <small>16:00</small><br />
                Mostra Escola<br />
                <span className='text-primary'>Sessão 4 (16 anos)</span>
              </h3>
              <DescriptionList>
                <dt><em>Dissociative Connection</em></dt>
                <dd>China (2018), 8 min - City University of Hong Kong</dd>
                <dt><em>The body</em></dt>
                <dd>África do Sul (2018), 3 min - WITS</dd>
                <dt><em>Axis Johannesburg</em></dt>
                <dd>África do Sul (2018), 18 min - WITS</dd>
                <dt><em>A Reader Of Wu Bo's Novel</em></dt>
                <dd>China (2019), 15 min - Communication University of China</dd>
                <dt><em>Inconfissões</em></dt>
                <dd>Brasil (2018), 22 min - UFF</dd>
                <dt><em>A moça que dançou com o diabo</em></dt>
                <dd>Brasil (2016), 14 min - Universidade Metodista de Piracicaba</dd>
              </DescriptionList>
              <p>Sessão seguida de debate.</p>
              <DescriptionList>
                <dt>Local</dt>
                <dd>Reserva Cultural - Sala 1</dd>
              </DescriptionList>
            </Article>

            <div>
              <Article>
                <h3>
                  <small>18:00</small><br />
                  Mostra Clássicos<br />
                </h3>
                <DescriptionList>
                  <dt><em>Fragment of an empire</em></dt>
                  <dd>Oblomok imperii, de Fridrikh Ermler, Rússia, 109 min, 1929. 14 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Cine Arte UFF</dd>
                </DescriptionList>
              </Article>

              <Article>
                <h3>
                  <small>18:30</small><br />
                  Mostra Contemporânea<br />
                </h3>
                <DescriptionList>
                  <dt><em>Aalorukkam</em></dt>
                  <dd>De V. C. Abhilash, Índia, 124 min,2018. 14 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Reserva Cultural - Sala 1</dd>
                </DescriptionList>
              </Article>
            </div>

            <div>
              <Article>
                <h3>
                  <small>20:20</small><br />
                  Mostra Clássicos<br />
                </h3>
                <DescriptionList>
                  <dt><em>Eles não usam black-tie</em></dt>
                  <dd>De Leon Hirszman, Brasil, 123 min, 1981. 14 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Cine Arte UFF</dd>
                </DescriptionList>
              </Article>

              <Article>
                <h3>
                  <small>21:10</small><br />
                  Mostra Contemporânea<br />
                </h3>
                <DescriptionList>
                  <dt><em>When Babies Don't Come</em></dt>
                  <dd>De Molatelo Mainetje, África do Sul, 90 min, 2018. 14 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Reserva Cultural - Sala 1</dd>
                </DescriptionList>
              </Article>
            </div>
          </Row>

          <h2 className='title'>
            07 de outubro<br />
            <small>2ª feira</small>
          </h2>
          <Row>
            <div>
              <Article>
                <h3>
                  <small>09:00</small><br />
                  Mostra Animação<br />
                </h3>
                <DescriptionList>
                  <dt><em>BugiGangue no Espaço</em></dt>
                  <dd>De Alê McHaddo, Brasil, 86 min, 2017. Livre</dd>
                </DescriptionList>
                <p>Sessão com audiodescrição e closed caption.</p>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Cine Arte UFF</dd>
                </DescriptionList>
              </Article>
            </div>

            <Article>
              <h3>
                <small>16:00</small><br />
                Mostra Escola<br />
                <span className='text-primary'>Sessão 5 (Livre)</span>
              </h3>
              <DescriptionList>
                <dt><em>Ilhas</em></dt>
                <dd>Brasil (2018), 9 min - UFF</dd>
                <dt><em>Voar/Flying a dream</em></dt>
                <dd>起飞, China (2018), 10 min - Beijing Film Academy</dd>
                <dt><em>Apraapta</em></dt>
                <dd>Índia (2018), 19 min - Annapurna International School of Film and Media</dd>
                <dt><em>NONGQAWUSE</em></dt>
                <dd>África do Sul (2019), 24 min - AFDA</dd>
                <dt><em>Outubro/Brighter Days</em></dt>
                <dd>China (2018), 30 min - Communication University of China</dd>
              </DescriptionList>
              <p>Sessão seguida de debate.</p>
              <DescriptionList>
                <dt>Local</dt>
                <dd>Reserva Cultural - Sala 1</dd>
              </DescriptionList>
            </Article>

            <div>
              <Article>
                <h3>
                  <small>18:00</small><br />
                  Mostra Clássicos<br />
                </h3>
                <DescriptionList>
                  <dt><em>Fools</em></dt>
                  <dd>De Ramadan Suleman, África do Sul, 90 min, 1997. 16 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Cine Arte UFF</dd>
                </DescriptionList>
              </Article>

              <Article>
                <h3>
                  <small>18:30</small><br />
                  Mostra Contemporânea<br />
                </h3>
                <DescriptionList>
                  <dt><em>A Timeline</em></dt>
                  <dd>Tarikh, de Churni Ganguly, Índia, 116 min, 2019. 14 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Reserva Cultural - Sala 1</dd>
                </DescriptionList>
              </Article>
            </div>

            <div>
              <Article>
                <h3>
                  <small>20:10</small><br />
                  Mostra Clássicos<br />
                </h3>
                <DescriptionList>
                  <dt><em>The Goddess</em></dt>
                  <dd>Shénnǚ, de Wu Yonggang, China, 85 min, 1934. 16 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Cine Arte UFF</dd>
                </DescriptionList>
              </Article>

              <Article>
                <h3>
                  <small>21:00</small><br />
                  Mostra Contemporânea<br />
                </h3>
                <DescriptionList>
                  <dt><em>Os Jovens Baumann</em></dt>
                  <dd>De Bruna Carvalho Almeida, Brasil, 71 min, 2018. 16 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Reserva Cultural - Sala 1</dd>
                </DescriptionList>
              </Article>
            </div>
          </Row>

          <h2 className='title'>
            08 de outubro<br />
            <small>3ª feira</small>
          </h2>
          <Row>
            <div>
              <Article>
                <h3>
                  <small>09:30</small><br />
                  Mostra Animação<br />
                </h3>
                <DescriptionList>
                  <dt><em>Norm e os Invencíveis</em></dt>
                  <dd>Norm of the North, de Trevor Wall, Índia, 88 min, 2016. Livre</dd>
                </DescriptionList>
                <p>Sessão seguida de debate.</p>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Cine Arte UFF</dd>
                </DescriptionList>
              </Article>
            </div>

            <Article>
              <h3>
                <small>16:00</small><br />
                Mostra Escola<br />
                <span className='text-primary'>Sessão 6 (18 anos)</span>
              </h3>
              <DescriptionList>
                <dt><em>My Friend - Bualo</em></dt>
                <dd>Rússia (2019), 21 min - St. Petersburg State University of Film and Television</dd>
                <dt><em>MISRA NATAK COMPANY</em></dt>
                <dd>Índia (2018), 5 min - The Whistling Woods International Institute</dd>
                <dt><em>The crone</em></dt>
                <dd>Rússia (2018), 18 min - St. Petersburg State University of Film and Television</dd>
                <dt><em>НОВPIṊ LOɄ</em></dt>
                <dd>Rússia (2018), 22 min - VGIK</dd>
                <dt><em>Convite Vermelho</em></dt>
                <dd>Brasil (2017), 16 min - UFF</dd>
              </DescriptionList>
              <p>Sessão seguida de debate.</p>
              <DescriptionList>
                <dt>Local</dt>
                <dd>Reserva Cultural - Sala 1</dd>
              </DescriptionList>
            </Article>

            <div>
              <Article>
                <h3>
                  <small>18:30</small><br />
                  Mostra Animação<br />
                </h3>
                <DescriptionList>
                  <dt><em>Os Três Heróis: A Herdeira do Trono</em></dt>
                  <dd>Tri bogatyrya i Naslednitsa prestola, de Konstantin Bronzit, Rússia, 90 min, 2018. Livre</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Reserva Cultural - Sala 1</dd>
                </DescriptionList>
              </Article>

              <Article>
                <h3>
                  <small>20:00</small><br />
                  Mostra Clássicos<br />
                </h3>
                <DescriptionList>
                  <dt><em>A tenda do circo</em></dt>
                  <dd>Thampu, de Govindan Aravindan, Índia, 130 min, 1978. 12 anos</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Cine Arte UFF</dd>
                </DescriptionList>
              </Article>
            </div>

            <div>
              <Article>
                <h3>
                  <small>21:00</small><br />
                  Mostra Animação<br />
                </h3>
                <DescriptionList>
                  <dt><em>Os Brinquedos Mágicos</em></dt>
                  <dd>Tea Pets, de Gary Wang, China, 98 min, 2017. Livre</dd>
                </DescriptionList>
                <DescriptionList>
                  <dt>Local</dt>
                  <dd>Reserva Cultural - Sala 1</dd>
                </DescriptionList>
              </Article>
            </div>
          </Row>

          <h2 className='title'>
            09 de outubro<br />
            <small>4ª feira</small>
          </h2>
          <Row>
            <Article>
              <h3>
                <small>09:00</small><br />
                Mostra Animação<br />
              </h3>
              <DescriptionList>
                <dt><em>Khumba</em></dt>
                <dd>De Anthony Silverston, África do Sul, 82 min, 2013. Livre</dd>
              </DescriptionList>
              <DescriptionList>
                <dt>Local</dt>
                <dd>Cine Arte UFF</dd>
              </DescriptionList>
            </Article>

            <Article>
              <h3>
                <small>20:00</small><br />
                Cerimônia de Encerramento e premiação<br />
              </h3>
              <DescriptionList>
                <dt>Local</dt>
                <dd>Cine Arte UFF</dd>
              </DescriptionList>
            </Article>
          </Row>

        </Schedule>
      </ScheduleLayout>
    );
  }
}

const Schedule = styled.div`
  small {
    color: ${colors.grayDark};
  }

  .text-primary {
    color: ${colors.green};
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div,
  > article {
    @media (min-width: ${breakpoints.sm}px) {
      width: 49%;

      :nth-of-type(2n) {
        margin-left: 2%;
      }
    }

    @media (min-width: ${breakpoints.md}px) {
      width: 23.5%;
      margin-left: 2%;

      :first-of-type,
      :nth-of-type(5n) {
        margin-left: 0;
      }
    }
  }
`;

const Article = styled.article`
  width: 100%;
  padding: 0 1em 1em;
  border-top: 1px solid ${colors.grayLightest};
  border-left: 1px solid ${colors.grayLighter};
  border-right: 1px solid ${colors.grayLighter};
  border-bottom: 1px solid ${colors.grayLight};
  border-radius: 1em;
  background-color: ${colors.white};
  box-shadow: 0 2px 2px -2px ${colors.grayLightest};
`;

const DescriptionList = styled.dl`
  margin-left: .5em;

  dt {
    font-weight: bold;
  }

  dd {
    margin: 0 0 0 .5em;
  }
`;

export default SchedulePage;