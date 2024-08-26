import React, { Component } from 'react';

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: [],
    }

  };

  componentDidMount() {

    const courses = window.location.pathname.slice(-2)
    const st = localStorage.getItem(`w-${courses}`)
    const data = JSON.parse(st)
    this.setState({ word: data });


  };


  render() {

    return (
      <div id='word-background'>

        <table className='table' id='word-container' >
          <thead>
            <tr>
              <td >#</td>
              <td >Kanji</td>
              <td >Hiragana</td>
              <td >Nghĩa</td>
              <td >English</td>

            </tr>
          </thead>

          <tbody>
            {this.state.word.map(item => (

              <tr className='tr-list-word' key={item.stt}>
                <td >{item.stt}</td>
                <td>{item.kanji}</td>
                <td>{item.hiragana}</td>
                <td>{item.mean}</td>
                <td>{item.end}</td>

              </tr>
            ))}



          </tbody>
        </table>
      </div>
    )
  }
};

export default Word;