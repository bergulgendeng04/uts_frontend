import React, { Component } from 'react'

export default class Ganti extends Component {
    render() {
        const {totebag, gantiIsi} = this.props
        return (
            <div>
               <h2>rubah state ke props = {totebag}</h2>
               <button onClick={() => gantiIsi("penggaris")}>Ganti</button>
            </div>
        )
    }
}
