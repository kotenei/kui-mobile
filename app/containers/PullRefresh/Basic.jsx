import React, { Component } from 'react';
import { PullRefresh, CellGroup, Cell, LoadMore } from 'kui-mobile';

export default class Demo extends Component {
  state = {
    data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    pullupText: '上拉加载更新',
  };
  componentDidMount() {
    this.init();
  }
  render() {
    const { data, pullupText } = this.state;
    return (
      <React.Fragment>
        <PullRefresh
          style={{
            height: '400px',
            overflow: 'hidden',
            position: 'relative',
            border:'1px solid #dddee1'
          }}
          pullDownRefresh
          pullUpload
          pullUpWrapperProps={{
            pullupText,
          }}
          onPullingDown={this.onPullingDown}
          onPullingUp={this.onPullingUp}
        >
          <CellGroup>
            {data.map((item, index) => {
              return <Cell key={index} title={`item ${index + 1}`} />;
            })}
          </CellGroup>
        </PullRefresh>
      </React.Fragment>
    );
  }
  init() {}
  onPullingDown = callback => {
    setTimeout(() => {
      let data = [];
      for (let i = 0; i < 20; i++) {
        data.push(i);
      }
      this.setState(
        {
          data,
          pullupText: '上拉加载更新',
        },
        () => {
          callback({
            status: 'success',
          });
        },
      );
    }, 2000);
  };
  onPullingUp = callback => {
    // 模拟更新数据
    setTimeout(() => {
      const { data } = this.state;
      let last = data.length > 0 ? data[data.length - 1] : 0;
      if (last >= 40) {
        callback({
          status: 'success',
        });
        this.setState({
          pullupText: '暂无相关记录',
        });
        return;
      }
      for (let i = 1; i <= 20; i++) {
        data.push(last + i);
      }
      this.setState(
        {
          data,
        },
        () => {
          callback({
            status: 'success',
          });
        },
      );
    }, 2000);
  };
}
