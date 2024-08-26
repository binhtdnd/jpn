import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sp1: '1',
      sp2: '2',
      txt1: '暗証番号',
      txt2: 'あんしょうばんごう',
      ip1: '1',
      ip2: '50',
      err: '',
      valid: false,
      courses: window.location.pathname.slice(-2),
      tempWord: ['', '暗証番号', 'あんしょうばんごう', 'Mã số định danh cá nhân']
    }

    this.submitHandle = this.submitHandle.bind(this)
  };




  setTxt(d) {
    if (d === '1') {
      return this.state.tempWord[1];
    } else if (d === '2') {
      return this.state.tempWord[2];
    } else if (d === '3') {
      return this.state.tempWord[3];
    }
  }

  onChangeSp1(event) {
    var temp1 = event.target.value;
    this.setState({
      sp1: temp1,
      txt1: this.setTxt(temp1)
    })
    //alert(this.setTxt(temp1))
  }

  onChangeSp2(event) {
    var temp2 = event.target.value;
    this.setState({
      sp2: temp2,
      txt2: this.setTxt(temp2)
    })
    //alert(this.setTxt(temp2))
  }

  onChangeIp1(event) {


    this.setState({
      ip1: event.target.value
    })


  }
  onChangeIp2(event) {

    this.setState({
      ip2: event.target.value
    })

  }

  submitHandle(e) {


    let error = '';
    if (this.state.ip1.trim() === '') {
      error = 'ô Bắt Đầu không được để trống'
    } else if (this.state.ip2.trim() === '') {
      error = 'ô Kết Thúc không được để trống'
    }

    else if (this.state.ip2 < 9) {
      error = '[Giá trị kết thúc] phải >= 10, hãy nhập lại !!!'
    } else if (this.state.ip1 < 1) {
      error = '[Giá trị bắt đầu] phải > 0, hãy nhập lại !!!'
    } else if (this.state.ip2 - this.state.ip1 < 5) {
      error = '[Giá trị Kết thúc]  -  [Giá trị Bắt đầu]  phải lớn hơn 10 đơn vị, hãy nhập lại !!!'
    } else {
      this.setState({
        valid: true
      })
    }


    this.setState({
      err: error,
    })
    if (error !== '') {
      this.setState({
        err: error,
        valid: false
      })
    }

    e.preventDefault()
  }



  render() {


    return (

      <div className="container mt-4 " >
        <form method="GET" onSubmit={(e) => { this.doSomething() }}>
          <div className="form-group">
            <div className="row justify-content-md-center ">
              <div className="col-sm-4 p-3 mb-2 bg-primary text-white">

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <select className="selectpicker mt-2" id="sp1" onChange={this.onChangeSp1.bind(this)}>
                      <option value="1">Kanji</option>
                      <option value="2">Hiragana</option>
                      <option value="3">Việt Nam</option>
                    </select>
                  </li>

                  <li className="list-group-item">
                    <select className="selectpicker mt-2" id="sp2" onChange={this.onChangeSp2.bind(this)} >
                      <option value="2">Hiragana</option>
                      <option value="1">Kanji</option>
                      <option value="3">Việt Nam</option>
                    </select>
                  </li>

                </ul>
              </div>

              <div className="col-sm-4 p-3 mb-2 bg-secondary text-black">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item mt-2" id="txt1">{this.state.txt1}</li>
                  <li className="list-group-item mt-2" id="txt2">{this.state.txt2}</li>
                </ul>
              </div>

            </div>


          </div>
        </form >
        <h5>
          <span className="span badge-info mb-2" >
            {`\u00A0 Đang dừng lại ở: ${Number.parseInt(localStorage.getItem(`lastStep${this.state.courses}`) || 0) + 1} \u00A0`}
          </span>
        </h5>
        <form onSubmit={this.submitHandle}>
          <div className='input-form-training d-flex flex-column justify-content-center' id='otn-bd-kt'>


            <div className="input-group mb-2">
              <span className="input-group-text badge-primary" >Bắt đầu:</span>
              <input type="number" className="input-training" value={this.state.ip1} onChange={this.onChangeIp1.bind(this)} />
            </div>

            <div className="input-group mb-2">
              <span className="input-group-text badge-success" >Kết Thúc:</span>
              <input type="number" className="input-training" value={this.state.ip2} onChange={this.onChangeIp2.bind(this)}
              />
            </div>
          </div>
          <div className={`alert alert-danger ${this.state.err === '' ? 'bHidden' : ''}`} role="alert">
            {this.state.err}
          </div>
          <button className='btn btn-primary'>OK</button>
        </form>




        <Link to={`/training/${this.state.sp1}-${this.state.sp2}-${parseInt(this.state.ip1) - 1}-${parseInt(this.state.ip2) - 1}-${this.state.courses}`}
          className={`${this.state.valid ? "bShow" : "bHidden"}`}
        >
          <h2>Go </h2>
        </Link>



      </div >
    )
  }
};

export default Training;



