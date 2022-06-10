import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import domUtils from 'kui-mobile/utils/domUtils';

const prefixCls = 'page';

export class Page extends Component {
  state = {
    marginTop: 0,
    marginBottom: 0,
  };
  static propTypes = {
    fixedHeader: PropTypes.bool,
    fixedFooter: PropTypes.bool,
    bodySpace: PropTypes.bool,
  };
  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
  renderHeader() {
    const { header, fixedHeader } = this.props;
    return (
      header && (
        <div
          className={classnames({
            [`${prefixCls}-header`]: true,
            [`${prefixCls}-header--fixed`]: fixedHeader,
          })}
          ref="header"
        >
          {header}
        </div>
      )
    );
  }
  renderFooter() {
    const { footer, fixedFooter } = this.props;
    return (
      footer && (
        <div
          className={classnames({
            [`${prefixCls}-footer`]: true,
            [`${prefixCls}-footer--fixed`]: fixedFooter,
          })}
          ref="footer"
        >
          {footer}
        </div>
      )
    );
  }
  render() {
    const { children, className, style, bodySpace } = this.props;
    const { marginTop, marginBottom } = this.state;
    return (
      <div
        className={classnames(
          {
            [prefixCls]: true,
          },
          className,
        )}
        style={style}
      >
        {this.renderHeader()}
        <div
          className={classnames({
            [`${prefixCls}-body`]: true,
            [`${prefixCls}-body--spacing`]: bodySpace,
          })}
          style={{ marginTop, marginBottom }}
        >
          {children}
        </div>
        {this.renderFooter()}
      </div>
    );
  }

  resize = () => {
    const { fixedHeader, fixedFooter } = this.props;
    const elmHeader = ReactDOM.findDOMNode(this.refs.header);
    const elmFooter = ReactDOM.findDOMNode(this.refs.footer);
    let top = 0,
      bottom = 0;

    if (elmHeader) {
      top = domUtils.height(elmHeader);
    }

    if (elmFooter) {
      bottom = domUtils.height(elmFooter);
    }

    if (fixedHeader) {
      this.setState({
        marginTop: top,
      });
    }

    if (fixedFooter) {
      this.setState({
        marginBottom: bottom,
      });
    }
  };
}

export default Page;
