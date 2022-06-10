```jsx
import React, { Component } from 'react';
import { Icon, Button, presetIcon, Tabs, TabPanel } from 'kui-mobile';

const ButtonGroup = Button.Group;
const outline = Icon.outline;
const filled = Icon.filled;
const icons = [
  { key: 'direction', title: '方向性图标' },
  { key: 'tips', title: '提示建议性图标' },
  { key: 'edit', title: '编辑类图标' },
  { key: 'data', title: '数据类图标' },
  { key: 'common', title: '网站通用图标' },
  { key: 'brand', title: '品牌和标识' },
];

export default class Demo extends Component {
  state = {
    iconTheme: '',
    typeIndex: -1,
    iconName: '',
  };
  renderIcons(theme) {
    const { typeIndex, iconName, iconTheme } = this.state;
    let source = theme == 'outline' ? presetIcon.outline : presetIcon.filled;
    let content = [];
    for (let i = 0; i < icons.length; i++) {
      const item = icons[i];
      let items = [];
      content.push(
        <h3 key={`title_${i}`}>
          {item.title}
          {typeIndex === i && iconName && iconTheme === theme ? `:${iconName}` : ''}
        </h3>,
      );
      for (const key in source[item.key]) {
        if (source[item.key].hasOwnProperty(key)) {
          const element = source[item.key][key];
          items.push(
            <li
              key={key}
              className={iconName === key && typeIndex === i ? 'active' : ''}
              onClick={this.handleClick.bind(this, i, key, theme)}
            >
              <Icon type={key} className="anticon" theme={theme} />
              {/* <span>{key}</span> */}
            </li>,
          );
        }
      }
      content.push(
        <ul className="icon-list" key={`ul_${i}`}>
          {items}
        </ul>,
      );
    }
    return content;
  }
  handleClick = (typeIndex, key, theme) => {
    this.setState({
      typeIndex,
      iconName: key,
      iconTheme: theme,
    });
  };
  handleChange = a => {
    this.setState({
      iconName: '',
    });
  };
  render() {
    return (
      <Tabs onTabClick={this.handleChange}>
        <TabPanel tab="线框风格">{this.renderIcons('outline')}</TabPanel>
        <TabPanel tab="实底风格">{this.renderIcons('filled')}</TabPanel>
      </Tabs>
    );
  }
}

```
