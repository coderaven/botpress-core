import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import style from './PageHeader.scss'
import classnames from 'classnames'

class PageHeader extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    const hasHeader = this.props.viewMode <= 2
    const hasSidebar = this.props.viewMode < 1

    if (!hasHeader) {
      return null
    }

    const classNames = classnames({
      [style.header]: true,
      'bp-page-header': true,
      [style.noSidebar]: !hasSidebar,
      'bp-page-header-no-sidebar': !hasSidebar
    })

    if (this.props.children && this.props.children.props && this.props.children.props.children) {
      // console.log(this.props.children.props.children[0]);
      if (this.props.children.props.children[0].trim() == ''){
        return <div className={classNames}><span>BlessedBot</span></div>
      } else {
        return <div className={classNames}><span>{this.props.children.props.children[0]}</span></div>
      }
    } else {
      return <div className={classNames}>{this.props.children}</div>
    }
  }
}

const mapStateToProps = state => ({ viewMode: state.ui.viewMode })

export default connect(mapStateToProps)(PageHeader)
