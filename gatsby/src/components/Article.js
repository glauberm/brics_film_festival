import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

class Article extends React.PureComponent {
  render() {
    return (
      <article itemScope itemType="http://schema.org/Article">
        <h2 className='title' itemProp="name">
          <Link to={this.props.linkTo}
            dangerouslySetInnerHTML={{ __html: this.props.title }} 
          />
          {
            this.props.subtitle &&
            <small
              dangerouslySetInnerHTML={{ __html: this.props.subtitle }}
            />
          }
        </h2>
        {
          this.props.imgFluid &&
          <Img fluid={this.props.imgFluid}/>
        }
        <div dangerouslySetInnerHTML={{ __html: this.props.content }}/>
      </article>
    );
  }
}

export default Article;