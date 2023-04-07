import React from 'react'

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'online',
    }
  }

  onCurrentStatus = e => {
    this.setState({
      status: e.type,
    })
  }

  componentDidMount() {
    window.addEventListener('online', this.onCurrentStatus)
    window.addEventListener('offline', this.onCurrentStatus)
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onCurrentStatus)
    window.removeEventListener('offline', this.onCurrentStatus)
  }

  render() {
    const classOfStatus =
      this.state.status === 'offline' ? 'status_offline' : ''

    console.log(this.state.status)

    return <div className={`status ${classOfStatus}`}>{this.state.status}</div>
  }
}

export default ConnectionStatus
