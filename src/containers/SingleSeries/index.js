import React, {Component} from 'react';
import Loader from './../../components/Loader';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Left from './../../components/ShowInfo/Left';
import Right from './../../components/ShowInfo/Right';
import Episodes from './../../components/Episodes';
import './index.css';

class SingleSeries extends Component {
  state = {
    show: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState((state) => ({ show: json }) ));
  }


  render() {
    const { show } = this.state;

    console.log(show);

    return(
      <div>
        { show === null && <Loader/> }
        {
          show !== null
          &&
          <div className="seriesInfo">

            <Breadcrumb className="trail">
              <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
              <BreadcrumbItem active>{show.name}</BreadcrumbItem>
            </Breadcrumb>

            <div className="showName">
              {show.name}
            </div>

            <Left showObject={this.state.show} />

            {/* <Mid showName={show.name} showSummary={show.summary} /> */}

            <Right showObject = {this.state.show} />

            {/* <Episodes showObject = {this.state.show} />  */}

          </div>
        }
      </div>
    );
  }
}

export default SingleSeries;
