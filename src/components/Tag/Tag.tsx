import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Icon } from '../Icon';
import { TagProps, TagState } from './typing';

const prefixCls = 'k-tag';

class Tag extends PureComponent<TagProps, TagState> {
  public static defaultProps = {
    closable: false,
    line: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      closed: false,
    };
  }
  public render() {
    const { closable, children, color, line, ...others } = this.props;
    const { closed } = this.state;
    const classString = classnames({
      [prefixCls]: true,
      [`${prefixCls}--${color}`]: !!color,
      [`${prefixCls}--line`]: !!line,
    });

    const tag = closed ? null : (
      <CSSTransition timeout={300} classNames="fade">
        <div className={classString} {...others}>
          <span className={`${prefixCls}__text`}>{children}</span>
          {closable ? <Icon type="close" onClick={this.handleClose} /> : null}
        </div>
      </CSSTransition>
    );
    return <TransitionGroup component={React.Fragment}>{tag}</TransitionGroup>;
  }

  private handleClose = () => {
    const { onClose } = this.props;
    if (onClose && onClose() !== false) {
      this.setState({
        closed: true,
      });
    }
  };
}

export default Tag;
