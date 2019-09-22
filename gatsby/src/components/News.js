import React from 'react';
import Img from 'gatsby-image';
import { injectIntl } from 'react-intl';

class News extends React.PureComponent {
  render() {
    const data = this.props.news;

    return (
      <div itemScope itemType="http://schema.org/NewsArticle">
        <meta
          itemProp="author"
          content={this.props.intl.formatMessage({ id: 'shortSitename' })}
        />
        <div
          itemProp="publisher" itemScope itemType="http://schema.org/Organization"
        >
          <meta
            itemProp="name"
            content={this.props.intl.formatMessage({ id: 'shortSitename' })}
          />
          <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
            <meta itemProp="url" content={this.props.image} />
          </div>
        </div>
        <meta itemProp="datePublished" content={data.date} />
        <meta itemProp="dateModified" content={data.modified} />
        <h1 className='title' itemProp="name">
          {data.title}
        </h1>
        { data.title.length > 109 ?
          <meta
            itemProp="headline"
            content={`${data.title.substring(0, 107)}...`}
          />
          :
          <meta itemProp="headline" content={data.title} />
        }
        
        { data.acf.image ?
          <Img
            fluid={data.acf.image.localFile.childImageSharp.fluid}
            itemProp="image"
          />
          :
          <meta itemProp="image" content={this.props.image} />
        }
        <div
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: data.acf.html }}
        />
      </div>
    );
  }
}

export default injectIntl(News);