import React, { Component } from 'react'
import Ganti from './Ganti'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      totebag: 'buku'
    })
  }

  gantiIsi = (isi_tt) => {
    this.setState({
      totebag: isi_tt
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.totebag}</h2>
        <button onClick={() => this.gantiIsi("penggaris")}>Ganti</button>

        <Ganti totebag={this.state.totebag} gantiIsi={this.gantiIsi} />
      </div>
    )
  }
}
