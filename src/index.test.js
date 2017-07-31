import React from 'react'
import ReactDOM from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import { shallow } from 'enzyme'
import AnimatedFAB from './index'

const muiTheme = getMuiTheme()
// const shallowWithContext = (node) => shallow(node, {context: {muiTheme}})

it('renders without crash mount AnimatedFAB', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <AnimatedFAB>
        +
      </AnimatedFAB>
    </MuiThemeProvider>
    , div)
})
