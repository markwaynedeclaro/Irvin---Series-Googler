import React from 'react';
import Rating from 'react-rating';
import FullStar from './../../../assets/star-full.png';
import EmptyStar from './../../../assets/star-empty.png';
import PropTypes from 'prop-types';

const Right = props => {

  const genres = getGenres(props.showObject.genres, 0);
  const startYear = getStartYear(props.showObject.premiered);
  const endYear = getEndYear(props.showObject._embedded.episodes);
  const flagImgSrc = getFlagImgSrc(props.showObject.network.country.code);
  const schedule = getSchedule(props.showObject.schedule, props.showObject.runtime, 0);

  return (
    <div className="right">
      <div className="infoHeader"> Show Info </div>
      <hr />

      <div >
        <span className="field">
          {props.showObject.status === "Ended" ? 'Aired ' : 'Airs ' }  on : &nbsp;
        </span>
        <span className="value">
          <img alt="" src={flagImgSrc} /> &nbsp; {props.showObject.network.name} &nbsp;&nbsp; ( {startYear} - {endYear} )
        </span>
      </div>
      <div >
        <span className="field"> Schedule : </span>
        <span className="value">{schedule}</span>
      </div>
      <div >
        <span className="field"> Genres : </span>
        <span className="value">{genres}</span>
      </div>
      <div >
        <span className="field"> Language : </span>
        <span className="value">{props.showObject.language}</span>
      </div>
      <div >
        <span className="field"> Show Type : </span>
        <span className="value">{props.showObject.type}</span>
      </div>
      <div >
        <span className="field"> No. of Episodes : </span>
        <span className="value">{props.showObject._embedded.episodes.length}</span>
      </div>

      <Rating
        className="rating"
        initialRating={props.showObject.rating.average / 2}
        emptySymbol={<img alt="" src={EmptyStar} className="icon" />}
        placeholderSymbol={<img alt="" src={FullStar} className="icon" />}
        fullSymbol={<img alt="" src={FullStar} className="icon" />}
        readonly
      />
    </div>
  );
}


Right.propTypes = {
    showObject: PropTypes.object
};

const getGenres = (genres, i) => (
  genres.map( genre => (
       (i++ < (genres.length - 1)) ?
          <span key={genre}>{genre} &nbsp; | &nbsp;</span> :
          <span key={genre}>{genre}</span>
      ))
);

const getStartYear = premiered => (
  premiered.substr(0,4)
);

const getEndYear = episodes => (
  episodes[episodes.length - 1].airdate.substr(0,4)
);

const getFlagImgSrc = code => (
  "https://www.countryflags.io/" + code + "/flat/16.png"
);

const getSchedule = (schedule, runtime, i) => (
  schedule.days.map( day => (
      (i++ < (schedule.days.length - 1)) ?
          <span key={day}>{day} &nbsp;</span> :
          <span key={day}>{day} &nbsp; at &nbsp; {schedule.time}
            &nbsp; ( {runtime} &nbsp; mins) </span>
      ))
);



export default Right;
