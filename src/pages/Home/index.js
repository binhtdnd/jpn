import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../.././App.css';
import { N5_DATA, N4_DATA, N3_DATA, VN5_DATA, VN4_DATA } from '../../home'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            word: [],
            downloading: true,
        }

    };

    componentDidMount() {

        if (
            !localStorage.hasOwnProperty('w-n5') ||
            !localStorage.hasOwnProperty('w-n4') ||
            !localStorage.hasOwnProperty('w-n3') ||
            !localStorage.hasOwnProperty('w-vn5') ||
            !localStorage.hasOwnProperty('w-vn4')
        ) {

            document.querySelector('[data-target="#exampleModal"]').click();
        }
        this.saveData()
    };
    closeModel(e) {
        if (localStorage.hasOwnProperty('w-n5') &&
            localStorage.hasOwnProperty('w-n4') &&
            localStorage.hasOwnProperty('w-n3') &&
            localStorage.hasOwnProperty('w-vn5') &&
            localStorage.hasOwnProperty('w-vn4')
        ) {
            document.querySelector('#dismissModal').click()
        }
        window.location.reload();
    }
    saveData() {

        localStorage.setItem('w-n5', JSON.stringify(N5_DATA))
        localStorage.setItem('w-n4', JSON.stringify(N4_DATA))
        localStorage.setItem('w-n3', JSON.stringify(N3_DATA))
        localStorage.setItem('w-vn5', JSON.stringify(VN5_DATA))
        localStorage.setItem('w-vn4', JSON.stringify(VN4_DATA))

    }
    btnUpdate(e) {
        e.preventDefault()
        localStorage.removeItem('w-n5');
        localStorage.removeItem('w-n4');
        localStorage.removeItem('w-n3');
        localStorage.removeItem('w-vn5');
        localStorage.removeItem('w-vn4');
        window.location.reload();
    }
    btnTest(e) {
        e.preventDefault()
        this.getWordsMong()
        //window.location.reload();
    }
    render() {

        return (
            <div className='container mt-4'>

                <div className='d-flex flex-column' id='app-container'>
                    <Link to='/courses/n5' ><button className='btn btn-success btn-courses'>N5</button></Link>
                    <Link to='/courses/n4' ><button className='btn btn-primary btn-courses'>N4</button></Link>
                    <Link to='/courses/n3' ><button className='btn btn-warning btn-courses'>N3</button></Link>

                    <div>
                        <button className='btn btn-danger btn-courses'
                            onClick={(e) => { this.btnUpdate(e) }}
                        >
                            Update
                        </button>
                    </div>
                    {/* <div>
                        <button className='btn btn-danger btn-courses'
                            onClick={(e) => { this.btnTest(e) }}
                        >
                            Test
                        </button>
                    </div> */}
                </div>



                <button type="button" className="bHidden btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Launch demo modal
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>

                            </div>
                            <div className="modal-body">
                                <i className='	fa fa-coffee'></i>
                                <p>
                                    Lần truy cập đầu tiên Web cần tải dữ liệu<br></br>
                                    Vui lòng chờ trong giây lát...
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button id='dismissModal' type="button" className="bHidden btn btn-secondary" data-dismiss="modal">Close</button>

                                <button type="button" className="btn btn-primary"
                                    onClick={(event) => this.closeModel(event)}
                                >Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        )
    }
};

export default Home;