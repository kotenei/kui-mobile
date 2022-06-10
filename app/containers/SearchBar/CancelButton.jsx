import React, { Component } from 'react';
import { SearchBar } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return <SearchBar placeholder="请输入搜索关键字" showCancelButton />;
  }
}
