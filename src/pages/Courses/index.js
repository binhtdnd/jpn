import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Courses extends Component {

  render() {
    return (
      <div className="d-flex flex-column justify-content-center" id='course-container'>

        <Link to={`/chiadongtu/v${window.location.pathname.slice(-2)}`} >
          <button className={`btn btn-primary ${window.location.pathname.slice(-2) === 'n3' ? 'bHidden' : ''}`}>{`${window.location.pathname.slice(-2) === 'n3' ? '' : 'Chia Động Từ'}`}</button>
        </Link>

        <Link to={`/words/${window.location.pathname.slice(-2)}`} className='disabled'>
          <button className='btn btn-success '>Từ Vựng</button>
        </Link>

        <Link to={`/noremember/${window.location.pathname.slice(-2)}`}>
          <button className='btn btn-warning'>Chưa Thuộc</button>
        </Link>


        <Link to={`/option-training/${window.location.pathname.slice(-2)}`}>
          <button className='btn btn-danger'>Luyện Tập</button>
        </Link>

      </div>




    )
  }
};

export default Courses;