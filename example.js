import React from 'react'
import ReactDOM from 'react-dom'
import ReactTransitionGroup from 'react-addons-transition-group'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import AnimatedFAB from 'material-ui-animated-fab'

const style = {
  marginRight: 20
}

class transitionDiv extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render () {
    return (
      <div
        style={{
          display: 'inline-block',
          position: 'relative',
          boxSizing: 'border-box',
          height: 56
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

export default class FloatingActionButtonExampleSimple extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tabIndex: 0,
      showMainFAB: true,
      fab: (
        <AnimatedFAB
          key={1}
          style={style}
          onClick={this.handleFabClicked}
          onDidLeave={this.handleDidLeave}
        >
          <ContentAdd />
        </AnimatedFAB>
      )
    }
  }

  handleFabClicked = () => {
    this.setState({
      showMainFAB: !this.state.showMainFAB,
      fab: ''
    })
  }

  handleDidLeave = () => {
    let fab
    if (this.state.showMainFAB) {
      fab = (
        <AnimatedFAB
          key={1}
          style={style}
          onClick={this.handleFabClicked}
          onDidLeave={this.handleDidLeave}
        >
          <ContentAdd />
        </AnimatedFAB>
      )
    } else {
      fab = (
        <AnimatedFAB
          key={2}
          secondary
          mini
          style={Object.assign({}, style, {
            position: 'absolute',
            left: 76,
            top: 16
          })}
          onClick={this.handleFabClicked}
          onDidLeave={this.handleDidLeave}
        >
          <ContentAdd />
        </AnimatedFAB>
      )
    }
    this.setState({
      fab: fab
    })
  }

  render () {
    return (
      <div>
        <FloatingActionButton style={style}>
          <ContentAdd />
        </FloatingActionButton>

        <FloatingActionButton mini style={style}>
          <ContentAdd />
        </FloatingActionButton>

        <FloatingActionButton secondary style={style}>
          <ContentAdd />
        </FloatingActionButton>

        <FloatingActionButton mini secondary style={style}>
          <ContentAdd />
        </FloatingActionButton>

        <FloatingActionButton disabled style={style}>
          <ContentAdd />
        </FloatingActionButton>

        <FloatingActionButton mini disabled style={style}>
          <ContentAdd />
        </FloatingActionButton>

        <ReactTransitionGroup component={transitionDiv}>
          {this.state.fab}
        </ReactTransitionGroup>
      </div>
    )
  }
}
