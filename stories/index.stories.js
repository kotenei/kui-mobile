require('./index.scss');

import ActionSheet from './ActionSheet';
import Alert from './Alert';
import Avatar from './Avatar';
import Badge from './Badge';
import Button from './Button';
import Calendar from './Calendar';
import Card from './Card';
import Cell from './Cell';
import Checkbox from './Checkbox';
import Collapse from './Collapse';
import DatePicker from './DatePicker';
import Divider from './Divider';
import Drawer from './Drawer';
import Icon from './Icon';
import Input from './Input';
import InputNumber from './InputNumber';
import Layout from './Layout';
import LazyLoad from './LazyLoad';
import Loading from './Loading';
import LoadMore from './LoadMore';
import Message from './Message';
import Modal from './Modal';
import NavBar from './NavBar';
import NoticeBar from './NoticeBar';
import Pagination from './Pagination';
import Picker from './Picker';
import Progress from './Progress';
import PullRefresh from './PullRefresh';
import Radio from './Radio';
import Rate from './Rate';
import SearchBar from './SearchBar';
import Slider from './Slider';
import Steps from './Steps';
import Swipe from './Swipe';
import SwipeCell from './SwipeCell';
import Switch from './Switch';
import TabBar from './TabBar';
import Tabs from './Tabs';
import Tag from './Tag';
import Timeline from './Timeline';
import Toast from './Toast';

const componentList = {
  ActionSheet,
  Alert,
  Avatar,
  Badge,
  Button,
  Calendar,
  Card,
  Cell,
  Checkbox,
  Collapse,
  DatePicker,
  Divider,
  Drawer,
  Icon,
  Input,
  InputNumber,
  Layout,
  LazyLoad,
  Loading,
  LoadMore,
  Message,
  Modal,
  NavBar,
  NoticeBar,
  Pagination,
  Picker,
  Progress,
  PullRefresh,
  Radio,
  Rate,
  SearchBar,
  Slider,
  Steps,
  Swipe,
  SwipeCell,
  Switch,
  TabBar,
  Tabs,
  Tag,
  Timeline,
  Toast,
};

Object.keys(componentList).forEach(key => {
  console.log(key)
  componentList[key]();
});
