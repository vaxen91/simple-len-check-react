import React, { Component } from 'react'
import './App.css'
import Input from './Input/Input'
import Validation from './Validation/Validation'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputs: [
        {id: 1, name: 'Mattia'},
        {id: 2, name: 'Marta'}
      ]
    }

    this.findInputLenght = (len) => {
      return len > 5 ? '> 5 ' : '< 6'
    }

    this.changeName = (event, id) => {
      const inputIndex = this.state.inputs.findIndex(user => {
        return user.id === id
      })

      const input = {
        ...this.state.inputs[inputIndex]
      }

      input.name = event.target.value
      const inputs = [...this.state.inputs]
      inputs[inputIndex] = input
      this.setState({inputs: inputs})
    }

    this.findDiff = (id) => {

    }
  }
  render () {
    return (
      <div className='App'>
        {this.state.inputs.map((input, index) => {
          return <div>
            <Input
              key={input.id}
              name={input.name}
              length={input.name.length}
              change={(event) => this.changeName(event, input.id)}
            />
            <Validation length={this.findInputLenght(input.name.length)} />
          </div>
        })}
      </div>
    )
  }
}

export default App
