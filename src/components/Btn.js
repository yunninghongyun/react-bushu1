import React, { Component } from 'react'
import propTypes from 'prop-types'
class Btn extends Component {
  render() {
    // const text = this.props.text || '默认按钮'
    const text = this.props.text
    return (
      <div>
        <button>{text}</button>
        <br />
      </div>
    )
  }
}

export default Btn
//做类型检查
Btn.propTypes = {
  text: propTypes.string
}
//设置默认值
Btn.defaultProps = {
  text: '默认按钮'
}
