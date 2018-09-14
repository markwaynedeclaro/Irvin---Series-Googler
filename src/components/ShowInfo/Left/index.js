import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const Left = (props) => {
  return (
    <article className="left">

      <figure className="showImage">
        <img alt="Show" src={props.showObject.image.medium} />
      </figure>

      <div
        className="showSummary"
        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.showObject.summary) }}
        >
      </div>

    </article>
  );
}

Left.propTypes = {
    show: PropTypes.object
};

export default Left;
