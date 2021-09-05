import React from 'react';

export default class App extends React.Component{
  componentDidMount() {
    var hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?42d240fca999939e5fbe6db9f1157bad'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  }
  render() {
    return(
        <div id="call">
        </div>
    )
  }
}