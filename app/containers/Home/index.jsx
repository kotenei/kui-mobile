import React, { Component } from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Block from '../../components/Block';
import { Collapse, CollapsePanel, Cell } from 'kui-mobile';

const prefixCls = 'app-home';
const pageKey = 'kui-mobile-home';
const storage = window.localStorage;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }

  componentDidMount() {
    const val = this.getPageData();
    if (val) {
      this.setState(
        {
          id: val.id,
        },
        () => {
          // setTimeout(() => {
          //   console.log(val.scrollTop);
          //   document.documentElement.scrollTop = val.scrollTop;
          // }, 300);
        },
      );
    }
  }

  componentWillUnmount() {
    this.setPageData();
  }

  renderCells(source) {
    let cells = [];
    source.forEach((item, index) => {
      cells.push(<Cell key={index} to={item.to} title={item.title} border showArrow />);
    });

    return <React.Fragment>{cells}</React.Fragment>;
  }
  render() {
    const header = <Header>KUI-Mobile</Header>;
    const basic = [
      { title: 'Button 按钮', to: '/button' },
      { title: 'Cell 单元格', to: '/cell' },
      { title: 'Icon 图标', to: '/icon' },
      { title: 'Layout 布局', to: '/layout' },
    ];
    const display = [
      { title: 'Card 卡片', to: '/card' },
      { title: 'Avatar 头像', to: '/avatar' },
      { title: 'Badge 徽章', to: '/badge' },
      { title: 'Collapse 折叠面板', to: '/collapse' },
      { title: 'Divider 分隔符', to: '/divider' },
      { title: 'LazyLoad 图片懒加载', to: '/lazyload' },
      { title: 'LoadMore 加载更多', to: '/loadmore' },
      { title: 'NoticeBar 通告栏', to: '/noticebar' },
      { title: 'Swipe 轮播', to: '/swipe' },
      { title: 'Tag 标签', to: '/tag' },
      { title: 'Timeline 时间轴', to: '/timeline' },
    ];
    const nav = [
      { title: 'Drawer 抽屉', to: '/drawer' },
      { title: 'NavBar 导航栏', to: '/navbar' },
      { title: 'Pagination 分页', to: '/pagination' },
      { title: 'Steps 步骤条', to: '/steps' },
      { title: 'TabBar 标签栏', to: '/tabbar' },
      { title: 'Tabs 标签页', to: '/tabs' },
    ];
    const feedback = [
      { title: 'ActionSheet 动作面板', to: '/actionsheet' },
      { title: 'Alert 警告提示', to: '/alert' },
      { title: 'Loading 加载', to: '/loading' },
      { title: 'Message 消息提示', to: '/message' },
      { title: 'Modal 对话框', to: '/modal' },
      { title: 'Progress 进度条', to: '/progress' },
      { title: 'PullRefresh 拉动刷新', to: '/pullrefresh' },
      { title: 'SwipeCell 滑动单元格', to: '/swipecell' },
      { title: 'Toast 轻提示', to: '/toast' },
    ];
    const form = [
      { title: 'Calendar 日历', to: '/calendar' },
      { title: 'Checkbox 复选框', to: '/checkbox' },
      { title: 'DatePicker 日期选择', to: '/datepicker' },
      { title: 'Input 输入框', to: '/input' },
      { title: 'InputNumber 数字输入框', to: '/inputnumber' },
      { title: 'Picker 选择器', to: '/picker' },
      { title: 'Radio 单选框', to: '/radio' },
      { title: 'Rate 评分', to: '/rate' },
      { title: 'SearchBar 搜索栏', to: '/searchbar' },
      { title: 'Slider 滑块', to: '/slider' },
      { title: 'Switch 开关', to: '/switch' },
    ];
    const { id } = this.state;
    const activeIds = id ? [id] : [];

    return (
      <Page header={header} fixedHeader bodySpace className={prefixCls}>
        <Collapse accordion activeIds={activeIds} onChange={this.handleChange}>
          <CollapsePanel header="基础组件" id="1" icon="layout" border={false}>
            {this.renderCells(basic)}
          </CollapsePanel>
          <CollapsePanel header="展示组件" id="2" icon="picture" border={false}>
            {this.renderCells(display)}
          </CollapsePanel>
          <CollapsePanel header="导航组件" id="3" icon="bars" border={false}>
            {this.renderCells(nav)}
          </CollapsePanel>
          <CollapsePanel header="反馈组件" id="4" icon="check-circle" border={false}>
            {this.renderCells(feedback)}
          </CollapsePanel>
          <CollapsePanel header="表单组件" id="5" icon="form" border={false}>
            {this.renderCells(form)}
          </CollapsePanel>
        </Collapse>
      </Page>
    );
  }
  handleChange = id => {
    this.setState(
      {
        id: this.state.id !== id ? id : '',
      },
      () => {
        this.setPageData();
      },
    );
  };

  setPageData() {
    const scrollTop = document.documentElement.scrollTop;
    const { id } = this.state;
    const val = {
      id,
      scrollTop,
    };
    storage && storage.setItem(pageKey, JSON.stringify(val));
  }

  getPageData() {
    let val = storage && storage.getItem(pageKey);
    if (val) {
      return JSON.parse(val);
    }
    return null;
  }
}
