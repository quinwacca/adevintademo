import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class BaconFrito extends Component {
  render() {
    const imgContainerClasses = cx({
      'sktest-BaconFrito': true,
      [`sktest-BaconFrito--${this.props.size}`]: this.props.size
    })
    return <button className={imgContainerClasses}>{this.props.name}</button>
  }
}

BaconFrito.displayName = 'BaconFrito'

// Remove these comments if you need
// BaconFrito.contextTypes = {i18n: PropTypes.object}
BaconFrito.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}
// BaconFrito.defaultProps = {}

export default BaconFrito
