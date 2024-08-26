import React, { Component } from 'react';


class NoRemember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: [],
    }

  };

  componentDidMount() {

    const courses = window.location.pathname.slice(-2)
    if (localStorage.hasOwnProperty(window.location.pathname.slice(-2))) {
      const listNoRemember = localStorage.getItem(window.location.pathname.slice(-2))
      const listArray = listNoRemember.split(",")

      const st1 = localStorage.getItem(`w-${courses}`)
      const data = JSON.parse(st1)
      let temp = []
      data.forEach(element => {
        if (listArray.indexOf(element.stt.toString()) > -1) {
          temp.push(element)
        }
      });
      this.setState({ word: temp });

      let st = localStorage.getItem(window.location.pathname.slice(-2))

      // xoa trung lap trong array
      if (st) {
        let temp = st.split(',')
        temp = temp.filter((value, index, array) =>
          array.indexOf(value) === index
        )
        localStorage.setItem(window.location.pathname.slice(-2), temp)
      }
    }

  };
  onClickDeleteALL(e) {
    e.preventDefault();
    localStorage.removeItem(window.location.pathname.slice(-2));
    e.target.parentNode.parentNode.parentNode.parentNode.className = 'bHidden'
  }
  onClickDelete(e, stt) {

    let st = localStorage.getItem(window.location.pathname.slice(-2))
    let temp = st.split(',')

    temp = temp.filter((value, index, array) =>
      array.indexOf(value) === index
    )

    var index = temp.indexOf(stt.toString());
    temp.splice(index, 1);



    localStorage.setItem(window.location.pathname.slice(-2), temp)

    e.target.parentNode.parentNode.className = 'bHidden'
    e.preventDefault();
  }

  render() {

    return (
      <>

        <table className='table root' id='NoRemember-Container'  >
          <thead>
            <tr>
              <td >#</td>
              <td >Nghĩa</td>
              <td >Hiragana</td>
              <td >Kanji</td>
              <td>

                <button className='btn btn-warning'
                  onClick={(event) => this.onClickDeleteALL(event)}
                >Xóa Tất Cả </button>

              </td>


            </tr>
          </thead>

          <tbody>
            {this.state.word.map(item => (

              <tr className='tr-list-word ' key={item.stt}>
                <td >{parseInt(item.stt) + 1}</td>
                <td>{item.kanji}</td>
                <td>{item.hiragana}</td>
                <td>{item.mean}</td>
                <td><button type="button" className="btn btn-outline-warning"
                  onClick={(event) => this.onClickDelete(event, item.stt)}
                >Xóa</button></td>

              </tr>
            ))}



          </tbody>
        </table>
      </>
    )
  }
};

export default NoRemember;