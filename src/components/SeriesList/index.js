import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

const SeriesListItem = props => (
  <li>
    <Link to={`/series/${props.show.id}`} className="link" >
        {props.show.name}
    </Link>
  </li>
);

SeriesListItem.propTypes = {
    show: PropTypes.object
};



const SeriesList = (props) => {
  return (
    <div>
      <ul className="series-list">
        {props.theList.map(eachSeries => (
          <SeriesListItem show={eachSeries.show} key={eachSeries.show.id} />
        ))}
      </ul>
    </div>
  );
}

SeriesList.propTypes = {
    theList: PropTypes.arrayOf(PropTypes.object)
};

export default SeriesList;
