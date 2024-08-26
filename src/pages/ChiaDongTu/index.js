import React, { Component } from 'react';



class ChiaDongTu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: [],
            question: 'rukanji',
            all: false,
            mean: true,
            ruKanji: false,
            ruHiragana: true,
            masu: true,
            te: false,
            ta: false,
            nai: false,
            kn: false,
            ml: false,
            yh: false,
            bd: false,
            sk: false,
            dk: false,
            step: 0,
            gotoState: 0,
        }

    };


    componentDidMount() {
        const courses = window.location.pathname.slice(-3)
        let listWord = []
        const st = localStorage.getItem(`w-${courses}`)
        const data = JSON.parse(st)

        data.map(item => (
            listWord.push(item)
        ))
        this.setState({ word: listWord });
    };

    questionShow() {
        var d = this.state.question
        let st = this.state.word[this.state.step][d]
        return st
    }
    onSiteChanged(e) {
        this.setState({
            question: e.target.value
        })
    }

    onClickBtn1(e) {
        e.target.innerHTML = this.state.word[0].rukanji;

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    inputGotoChange(e) {
        const st = parseInt(e.target.value)
        this.setState({
            gotoState: st
        })
    }
    goto(event) {
        const temp = this.state.gotoState
        this.setState({
            step: temp
        })
        event.preventDefault()
    }

    onBtnNavClick(param) {
        let st = this.state.step
        let add = param
        if (st < this.state.word.length) {
            if (st < 1) {
                add = 1
            }
            this.setState({
                step: this.state.step + add
            })
        }
    }

    render() {


        return (
            <div className='container mt-1'>

                <div className="dropdown d-inline">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        From
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioMean" value='mean' onChange={this.onSiteChanged.bind(this)} />
                                <label className="form-check-label" htmlFor="radioMean">
                                    Tiếng Việt
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioRuKanji" value='rukanji' onChange={this.onSiteChanged.bind(this)}
                                    defaultChecked="checked" />
                                <label className="form-check-label" htmlFor="radioRuKanji">
                                    Ru - Kanji
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioRuHiragana" value='ruhiragana' onChange={this.onSiteChanged.bind(this)} />
                                <label className="form-check-label" htmlFor="radioRuHiragana">
                                    Ru - Hiragana
                                </label>
                            </div>
                        </li><li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioMasu" value='masu' onChange={this.onSiteChanged.bind(this)} />
                                <label className="form-check-label" htmlFor="radioMasu">
                                    ます
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioTe" value='te' onChange={this.onSiteChanged.bind(this)} />
                                <label className="form-check-label" htmlFor="radioTe">
                                    て
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioTa" value='ta' onChange={this.onSiteChanged.bind(this)} />
                                <label className="form-check-label" htmlFor="radioTa">
                                    た
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioNai" value='nai' onChange={this.onSiteChanged.bind(this)} />
                                <label className="form-check-label" htmlFor="radioNai">
                                    ない
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioKn" value='kn' onChange={this.onSiteChanged.bind(this)} />
                                <label className="form-check-label" htmlFor="radioKn">
                                    Khả Năng
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioMl" value='ml' onChange={this.onSiteChanged.bind(this)} />
                                <label className="form-check-label" htmlFor="radioMl">
                                    Mệnh Lệnh
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioYh" value='yh' onChange={this.onSiteChanged.bind(this)} />
                                <label className="form-check-label" htmlFor="radioYh">
                                    Ý Hướng
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioBd" value='bd' onChange={this.onSiteChanged.bind(this)} />
                                <label className="form-check-label" htmlFor="radioBd">
                                    Bị Động
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioSk" value='sk' onChange={this.onSiteChanged.bind(this)} />
                                <label className="form-check-label" htmlFor="radioSk">
                                    Sai Khiến
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="radioDk" value='dk' onChange={this.onSiteChanged.bind(this)} />
                                <label className="form-check-label" htmlFor="radioDk">
                                    Điều Kiện
                                </label>
                            </div>
                        </li>

                    </ul>
                </div>




                <div className="dropdown d-inline ml-1">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        To
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">







                        <li className='clickMe'>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"
                                    id="chkMean" checked={this.state.mean}
                                    name="mean"

                                    onChange={(e) => {
                                        this.handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            },
                                        });
                                    }} />
                                <label className="form-check-label" htmlFor="chkMean">Tiếng Việt</label>
                            </div>

                        </li>
                        <li className='clickMe'>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkRuKanji"
                                    name="ruKanji"
                                    defaultChecked={this.state.ruKanji}
                                    onChange={(e) => {
                                        this.handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            },
                                        });
                                    }} />
                                <label className="form-check-label" htmlFor="chkRuKanji">Ru - Kanji</label>
                            </div>

                        </li>
                        <li className='clickMe'>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkRuHiragana"
                                    name="ruHiragana"
                                    defaultChecked={this.state.ruHiragana}
                                    onChange={(e) => {
                                        this.handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            },
                                        });
                                    }} />
                                <label className="form-check-label" htmlFor="chkRuHiragana">Ru - Hiragana</label>
                            </div>

                        </li>
                        <li className='clickMe'>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkMasu"
                                    name="masu"
                                    defaultChecked={this.state.masu}
                                    onChange={(e) => {
                                        this.handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            },
                                        });
                                    }} />
                                <label className="form-check-label" htmlFor="chkMasu">ます</label>
                            </div>

                        </li>
                        <li className='clickMe'>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkTe"
                                    name="te"

                                    onChange={(e) => {
                                        this.handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            },
                                        });
                                    }} />
                                <label className="form-check-label" htmlFor="chkTe">て</label>
                            </div>

                        </li>
                        <li className='clickMe'>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkTa"
                                    name="ta"

                                    onChange={(e) => {
                                        this.handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            },
                                        });
                                    }} />

                                <label className="form-check-label" htmlFor="chkTa">た</label>
                            </div>

                        </li>
                        <li className='clickMe'>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkNai"
                                    name="nai"

                                    onChange={(e) => {
                                        this.handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            },
                                        });
                                    }} />
                                <label className="form-check-label" htmlFor="chkNai">ない</label>
                            </div>

                        </li>
                        <li className='clickMe'>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkKn"
                                    name="kn"

                                    onChange={(e) => {
                                        this.handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            },
                                        });
                                    }} />
                                <label className="form-check-label" htmlFor="chkKn">Khả Năng</label>
                            </div>

                        </li>
                        <li className='clickMe'>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkMl"
                                    name="ml"

                                    onChange={(e) => {
                                        this.handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            },
                                        });
                                    }} />
                                <label className="form-check-label" htmlFor="chkMl">Mệnh Lệnh</label>
                            </div>

                        </li>
                        <li className='clickMe'>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkYh"
                                    name="yh"

                                    onChange={(e) => {
                                        this.handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            },
                                        });
                                    }} />
                                <label className="form-check-label" htmlFor="chkYh">Ý Hướng</label>
                            </div>

                        </li>
                        <li className='clickMe'>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkBd"
                                    name="bd"

                                    onChange={(e) => {
                                        this.handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            },
                                        });
                                    }} />
                                <label className="form-check-label" htmlFor="chkBd">Bị Động</label>
                            </div>

                        </li>
                        <li className='clickMe'>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkSk"
                                    name="sk"

                                    onChange={(e) => {
                                        this.handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            },
                                        });
                                    }} />
                                <label className="form-check-label" htmlFor="chkSk">Sai Khiến</label>
                            </div>

                        </li>
                        <li className='clickMe'>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="chkDk"
                                    name="dk"

                                    onChange={(e) => {
                                        this.handleChange({
                                            target: {
                                                name: e.target.name,
                                                value: e.target.checked,
                                            },
                                        });
                                    }} />
                                <label className="form-check-label" htmlFor="chkDk">Điều Kiện</label>
                            </div>

                        </li>


                    </ul>
                </div>

                <h3 className='d-inline'> <span className="badge badge-dark ml-3">{this.state.step}</span></h3>

                <div className="my-2 ml-3 d-flex justify-content-center">
                    <input id='cdn-input-goto' className="form-control" type="number"
                        min="0" max={this.state.word.length - 1}
                        placeholder="Sô thứ tự" aria-label="Search" onChange={this.inputGotoChange.bind(this)} />
                    <button className="btn btn-outline-warning" onClick={(event) => this.goto(event)}>Go to</button>

                </div>


                <div>
                    <br />
                    <br />
                    <br />
                    <div className='inline-flex'>
                        <span className="badge badge-pill badge-secondary label-verb-question">{this.state.word[this.state.step] ? this.state.word[this.state.step][this.state.question] : ''}</span>
                    </div>

                    <br />
                    <hr className="dropdown-divider" />
                    <br />

                    <div className='inline-flex'>
                        <span className="badge badge-pill badge-secondary label-verb">{this.state.word[this.state.step] && this.state.masu ? this.state.word[this.state.step].masu : ''}</span>
                    </div>
                    <div className='inline-flex' >
                        <span className="badge badge-pill badge-secondary label-verb" >{this.state.word[this.state.step] && this.state.mean ? this.state.word[this.state.step].mean : ''}</span>
                    </div>
                    <div className='inline-flex'>
                        <span className="badge badge-pill badge-secondary label-verb">{this.state.word[this.state.step] && this.state.ruKanji ? this.state.word[this.state.step].rukanji : ''}</span>
                    </div>
                    <div className='inline-flex'>
                        <span className="badge badge-pill badge-secondary label-verb">{this.state.word[this.state.step] && this.state.ruHiragana ? this.state.word[this.state.step].ruhiragana : ''}</span>
                    </div>

                    <div className='inline-flex'>
                        <span className="badge badge-pill badge-secondary label-verb">{this.state.word[this.state.step] && this.state.te ? this.state.word[this.state.step].te : ''}</span>
                    </div>
                    <div className='inline-flex'>
                        <span className="badge badge-pill badge-secondary label-verb">{this.state.word[this.state.step] && this.state.ta ? this.state.word[this.state.step].ta : ''}</span>
                    </div>
                    <div className='inline-flex'>
                        <span className="badge badge-pill badge-secondary label-verb">{this.state.word[this.state.step] && this.state.nai ? this.state.word[this.state.step].nai : ''}</span>
                    </div>
                    <div className='inline-flex'>
                        <span className="badge badge-pill badge-secondary label-verb">{this.state.word[this.state.step] && this.state.kn ? this.state.word[this.state.step].kn : ''}</span>
                    </div>
                    <div className='inline-flex'>
                        <span className="badge badge-pill badge-secondary label-verb">{this.state.word[this.state.step] && this.state.ml ? this.state.word[this.state.step].ml : ''}</span>
                    </div><div className='inline-flex'>
                        <span className="badge badge-pill badge-secondary label-verb">{this.state.word[this.state.step] && this.state.yh ? this.state.word[this.state.step].yh : ''}</span>
                    </div>
                    <div className='inline-flex'>
                        <span className="badge badge-pill badge-secondary label-verb">{this.state.word[this.state.step] && this.state.bd ? this.state.word[this.state.step].bd : ''}</span>
                    </div>
                    <div className='inline-flex'>
                        <span className="badge badge-pill badge-secondary label-verb">{this.state.word[this.state.step] && this.state.sk ? this.state.word[this.state.step].sk : ''}</span>
                    </div>
                    <div className='inline-flex'>
                        <span className="badge badge-pill badge-secondary label-verb">{this.state.word[this.state.step] && this.state.dk ? this.state.word[this.state.step].dk : ''}</span>
                    </div>
                    <br />
                    <div className='d-inline' id='divBtnNav'>
                        <button className='btn btn-primary ml-0 flex btnNav' onClick={() => this.onBtnNavClick(-1)}>
                            Previous
                        </button>
                        <button className='btn btn-success ml-5 btnNav' onClick={() => this.onBtnNavClick(1)}>
                            Next
                        </button>
                    </div>

                </div>

            </div>

        )
    }
};

export default ChiaDongTu;