
import React, { Component } from 'react';

import { toast } from 'react-toastify';

class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sp1: '',
      sp2: '',
      txt1: '暗証番号',
      txt2: 'あんしょうばんごう',
      ipStart: '',
      ipEnd: '',
      ip1: 0,
      ip2: 0,
      courses: window.location.pathname.slice(-2),
      tempWord: ['', '暗証番号', 'あんしょうばんごう', 'Mã số định danh cá nhân'],

      step: 0,
      question: '',
      a1: '',
      a2: '',
      a3: '',
      a4: '',
      stateKanji: [],
      stateHiragana: [],
      stateMean: [],
      stateOnlyKanji: [],
      stateHV: [],
      check: 0,
      pass: true,
      scount: 0,
      noRemember: [],
      isOnlyKanji: false,
      sNote: '',
      showNote: false,
      lastStep: 0,
    }

  };

  afterSetStateFinished() {

    const rd = this.getRandomIntInclusive(1, 4)
    this.setState({
      question: this.getTxt(this.state.step, this.state.sp1, false),
      a1: this.getTxt(this.state.step, this.state.sp2, true),
      a2: this.getTxt(this.state.step, this.state.sp2, true),
      a3: this.getTxt(this.state.step, this.state.sp2, true),
      a4: this.getTxt(this.state.step, this.state.sp2, true),
      check: rd,
      ['a' + rd]: this.getTxt(this.state.step, this.state.sp2, false),
    })

  }

  componentDidMount() {
    var slink = window.location.pathname.substring(10)
    var sString = slink.split('-')

    this.setState({
      sp1: sString[0],
      sp2: sString[1],
      ip1: Number.parseInt(sString[2]),
      ip2: Number.parseInt(sString[3]),
      courses: sString[4],
      noRemember: localStorage.getItem(sString[4]),
    }, () => {
      this.afterSetStateFinished();
    })

    const courses = sString[4]
    const st = localStorage.getItem(`w-${courses}`)
    const data = JSON.parse(st)

    let lKanji = []
    let lHiragana = []
    let lMean = []
    let lHv = []
    let lOnlyKanji = []
    //const data = res.data;
    let lcount = 0;
    let tempIp1 = Number.parseInt(sString[2]);
    let tempIp2 = Number.parseInt(sString[3]);

    data.forEach(element => {
      const nm = Number.parseInt(element.stt)
      if (nm >= tempIp1 && nm <= tempIp2) {
        lKanji.push(element.kanji)
        lHiragana.push(element.hiragana)
        lMean.push(element.mean)
        lHv.push(element.hv)
        lOnlyKanji.push(element.onlykanji)
        lcount++
      } else if (nm === tempIp2 + 1) {
        const addPosition = sString[0]

        if (addPosition === '1') {
          lKanji.push("Hết rồi, Quay lại đi, bấm gì nữa")
        } else if (addPosition === '2') {
          lHiragana.push("Hết rồi, Quay lại đi, bấm gì nữa")
        } if (addPosition === '3') {
          lMean.push("Hết rồi, Quay lại đi, bấm gì nữa")
        }
      }
    });





    this.setState({

      stateKanji: lKanji,
      stateHiragana: lHiragana,
      stateMean: lMean,
      stateHV: lHv,
      stateOnlyKanji: lOnlyKanji,
      scount: lcount,
    }, () => {
      this.afterSetStateFinished();
    }
    );


    localStorage.setItem(`lastStep${courses}`, Number.parseInt(sString[2]))

  };

  saveLastStep() {
    this.setState({
      lastStep: this.state.step + this.state.ip1 + 1
    })
    localStorage.setItem(`lastStep${this.state.courses}`, this.state.step + this.state.ip1 + 1)
  }
  checkShowNote(e) {
    this.setState({
      showNote: e.target.checked
    })

  }
  handleNoteChange(e) {
    this.setState({
      sNote: e.target.value
    })
    e.preventDefault()
  }
  btnNoteOk(e) {
    let position = this.state.ip1 + this.state.step
    let st = this.state.courses + '' + position

    localStorage.setItem(st, this.state.sNote || '')

    e.preventDefault()
  }
  onClickNote(e) {
    this.setState({
      sNote: localStorage.getItem(`${this.state.courses}${this.state.ip1 + this.state.step}`)
    })

    e.preventDefault()
  }

  onClickOnlyKanji(e) {

    this.setState({
      isOnlyKanji: !this.state.isOnlyKanji
    })
    e.preventDefault()
  }
  onClickMean(e) {
    toast(this.state.stateMean[this.state.step], {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    e.preventDefault()


  }
  onClickHV(e) {


    toast(this.state.stateHV[this.state.step], {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    e.preventDefault()


  }
  onClickSave(e) {

    let st = localStorage.getItem(window.location.pathname.slice(-2))

    if (!st) {
      localStorage.setItem(this.state.courses, this.state.step + this.state.ip1)
    } else {
      let temp = st.split(',')

      temp.push(this.state.step + this.state.ip1)
      localStorage.setItem(this.state.courses, temp)
    }
    toast('🦄 Đã chuyển tới mục <Chưa thuộc>', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    e.preventDefault();
  }
  onClickBack(e) {

    if (this.state.step <= 0) {
      return
    }
    this.saveLastStep()
    this.setState({
      step: this.state.step - 1,

    }, () => {
      this.afterSetStateFinished();
    })

    e.preventDefault();
  }
  onClickNext(e) {
    this.saveLastStep()

    this.setState({
      step: this.state.step + 1,

    }, () => {
      this.afterSetStateFinished();
    })

    e.preventDefault();
  }

  onClickBtn1(event, param) {
    this.saveLastStep()
    if (this.checkAnswer(this.state.check, param)) {

      this.setState({
        step: this.state.step + 1
      }, () => {
        this.afterSetStateFinished();
      })
    } else {

      this.setState({
        pass: false
      }, () => {
        setTimeout(function () {
          this.setState({
            pass: true
          })
        }.bind(this), 1000);
      }
      );
    }
    event.preventDefault();
  }



  checkAnswer(checked, answer) {
    if (parseInt(checked) === parseInt(answer)) {
      return true
    } else {
      return false
    }
  }

  getTxt(step, where, isRd) {
    let st = parseInt(step)
    let wh = parseInt(where)
    let word = ''

    if (isRd) {
      do {
        st = this.getRandomIntInclusive(0, this.state.scount)
      } while (parseInt(st) === parseInt(step) || parseInt(st) === parseInt(this.state.rd));
    }

    if (wh === 1) {
      word = this.state.stateKanji[st]
    } else if (wh === 2) {
      word = this.state.stateHiragana[st]
    } else if (wh === 3) {
      word = this.state.stateMean[st]
    }

    return word
  }



  getRandomIntInclusive(min, max) {

    min = Math.ceil(parseInt(min));
    max = Math.floor(parseInt(max));

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render() {



    return (
      <div id='training-content' className='container'>


        <div className='radio-container' >

          <div className='hv'>
            <span className="radio-left" id='span-question' onClick={(event) => { navigator.clipboard.writeText(event.target.innerHTML) }}>
              {this.state.isOnlyKanji ? this.state.stateOnlyKanji[this.state.step] : this.state.question}
            </span>
          </div>



          <div className="form-check div-inputRadio radio-left" onClick={(event) => this.onClickBtn1(event, 1)}>
            <label className="form-check-label" >
              {this.state.a1}
            </label>
          </div>

          <div className="form-check  div-inputRadio radio-left" onClick={(event) => this.onClickBtn1(event, 2)}>
            <label className="form-check-label">
              {this.state.a2}
            </label>
          </div>

          <div className="form-check div-inputRadio radio-left" onClick={(event) => this.onClickBtn1(event, 3)}>
            <label className="form-check-label">
              {this.state.a3}
            </label>
          </div>

          <div className="form-check div-inputRadio radio-left" onClick={(event) => this.onClickBtn1(event, 4)}>
            <label className="form-check-label">
              {this.state.a4}
            </label>
          </div>


          <span className="badge badge-warning radio-left">{this.state.pass === true ? "" : 'Sai !!!'}</span>
          <span className="badge badge-danger radio-left">{this.state.step - (this.state.ip2 - this.state.ip1) > 1 ? 'Đã bảo hết rồi (◣_◢)' : ''}</span>
        </div>
        <h4><span className="badge badge-dark">{this.state.ip1 + this.state.step + 1}</span></h4>
        <div id='training-btn'>

          {/* quay lai */}
          <div className=' d-flex justify-content-start mt-5'>
            <button className='btn btn-primary' onClick={(event) => this.onClickBack(event)}>
              <i className="fa fa-chevron-left"></i>
              {'\u00A0'}
              Quay Lại
            </button>
            <button className='btn btn-success' onClick={(event) => this.onClickNext(event)}>
              Bỏ Qua
              {'\u00A0'}
              <i className="fa fa-chevron-right"></i>
            </button>
            <button className='btn btn-warning' onClick={(event) => this.onClickSave(event)}>
              <i className="fa fa-book"></i>
              {'\u00A0'}
              Lưu
            </button>
          </div>
          {/* Han Viet */}
          <div className=' d-flex justify-content-start mt-3'>
            <button className='btn btn-dark' onClick={(event) => this.onClickHV(event)}>Hán Việt{'\u00A0'}</button>
            <button className='btn btn-secondary' onClick={(event) => this.onClickMean(event)}>Nghĩa{'\u00A0'}</button>

            <button className={`btn ${this.state.isOnlyKanji ? 'btn-dark' : 'btn-primary'}`} onClick={(event) => this.onClickOnlyKanji(event)}>
              {this.state.isOnlyKanji ? '食' : '食べる'}
            </button>
          </div>
          {/* NOTE */}
          <div className='d-flex justify-content-start mt-3' id='div-note'>
            <div className="form-check d-flex text-center">
              <input id="exampleCheck1" type="checkbox" className="form-check-input"
                onChange={(event) => this.checkShowNote(event)}
              />


              <label id='lb-note' htmlFor='exampleCheck1'
                className={`align-middle align-item-center badge ${this.state.showNote ? "badge-success" : "badge-dark"}`}>
                <h4>{this.state.showNote ? 'Ghi chú' : '̶G̶̶h̶̶i̶ ̶c̶̶h̶̶ú̶'}</h4>
              </label>

            </div>
            <button type="button" className='btn btn-info mr-3.5' data-toggle="modal"
              data-target="#exampleModal" data-whatever="@mdo"
              onClick={(event) => this.onClickNote(event)}><i className="fa fa-pencil"></i>
              {'\u00A0'}

              Ghi chú</button>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#guideModal">
              Hướng dẫn
            </button>
          </div>
          <p id='label-note' className={`display-linebreak badge badge-dark mt-3 ${this.state.showNote ? "" : 'bHidden'}`}>
            {localStorage.getItem(`${this.state.courses}${this.state.ip1 + this.state.step}`)}
          </p>
        </div>
        {/* modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ghi chú:</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form >

                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">Nội dung:</label>
                    <textarea className="form-control areaNote" id="areaNote"
                      value={this.state.sNote || ""}

                      onChange={(event) => this.handleNoteChange(event)}>


                    </textarea>
                  </div>

                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" data-dismiss="modal"
                  onClick={(event) => this.btnNoteOk(event)}

                >OK</button>
              </div>

            </div>
          </div>
        </div >
        {/* modal guide */}




        <div className="modal fade" id="guideModal" tabIndex="-1" role="dialog" aria-labelledby="guideModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="guideModalLabel">Cách sử dụng: </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body d-flex flex-column">
                <div>
                  <span className="badge badge-warning">Lưu:</span>
                  <label>{'\u00A0'}Lưu những từ khó chưa thuộc</label>
                </div>
                <div>
                  <span className="badge badge-primary">食べる</span>
                  <label>{'\u00A0'}Ẩn đuôi [る] của động từ, [い] tính từ</label>
                </div>
                <div>
                  <span className="badge badge-success"><i className='fa fa-square-o'></i>G̶̶h̶̶i̶ ̶c̶̶h̶̶ú̶</span>
                  <label>{'\u00A0'}Ẩn hiện ghi chú của mỗi từ</label>
                </div>
                <div>
                  <span className="badge badge-info"><i className="fa fa-pencil"></i>Ghi chú</span>
                  <label>{'\u00A0'}Ghi chú cho mỗi từ theo sở thích của bạn</label>
                </div>
                <div>
                  <span className="badge badge-warning">Copy</span>
                  <label>{'\u00A0'}Bấm vào dòng câu hỏi trên cùng để copy câu hỏi</label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
};

export default Training;