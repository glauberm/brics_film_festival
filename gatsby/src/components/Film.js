import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { injectIntl } from 'react-intl';

class Film extends React.PureComponent {
  render() {
    const film = this.props.film;

    return (
      <div itemScope itemType='http://schema.org/Movie'>
        <h1 className='title' itemProp='name'>
          <span dangerouslySetInnerHTML={{ __html: film.title }} />
          { film.acf.subtitle &&
            <React.Fragment>
              <br />
              <small dangerouslySetInnerHTML={{ __html: film.acf.subtitle }} />
            </React.Fragment>
          }
        </h1>
        { film.acf.image &&
          <Img
            fluid={film.acf.image.localFile.childImageSharp.fluid}
            itemProp="image"
          />
        }
        { film.acf.country &&
          <div>
            <br/>
            <Label>{this.props.intl.formatMessage({ id: 'country' })}</Label>
            <span itemProp='countryOfOrigin'>{this.props.intl.formatMessage({ id: film.acf.country })}</span>
          </div>
        }
        { film.acf.director &&
          <div>
            <Label>{this.props.intl.formatMessage({ id: 'direction' })}</Label>
            <span itemProp='director'>{film.acf.director}</span>
          </div>
        }
        { film.acf.institution &&
          <div>
            <Label>{this.props.intl.formatMessage({ id: 'institution' })}</Label>
            <span itemProp='productionCompany'>{film.acf.institution}</span>
          </div>
        }
        { film.acf.year &&
          <div>
            <Label>{this.props.intl.formatMessage({ id: 'year' })}</Label>
            <span>{film.acf.year}</span>
          </div>
        }
        { film.acf.duration &&
          <div>
            <Label>{this.props.intl.formatMessage({ id: 'duration' })}</Label>
            <span
              itemProp='duration'
              content={`T${parseInt(film.acf.duration)}M`}
            >
              {film.acf.duration}
            </span>
          </div>
        }
        { film.acf.parental_rating &&
          <div>
            <Label>
              {this.props.intl.formatMessage({ id: 'parentalRating' })}
            </Label>
            <span itemProp='contentRating'>{film.acf.parental_rating}</span>
          </div>
        }
        { film.acf.synopsis &&
          <div>
            <Label>{this.props.intl.formatMessage({ id: 'synopsis' })}</Label>
            <Paragraph itemProp='description'>{film.acf.synopsis}</Paragraph>
          </div>
        }
      </div>
    );
  }
}

const Label = styled.h2`
  display: inline-block;
  margin: 0;
  font-size: 1em;

  ::after {
    content: ':';
    margin-right: .5em;
  }
`;

const Paragraph = styled.p`
  margin-top: 0;
`;

export default injectIntl(Film);