import React, { lazy, Suspense } from 'react';
import { AnimationRouter } from 'kui-mobile';
import { Route } from 'react-router-dom';

import FallBack from './containers/FallBack';

const ActionSheet = lazy(() => import('./containers/ActionSheet'));
const Alert = lazy(() => import('./containers/Alert'));
const Avatar = lazy(() => import('./containers/Avatar'));
const Badge = lazy(() => import('./containers/Badge'));
const Button = lazy(() => import('./containers/Button'));
const Calendar = lazy(() => import('./containers/Calendar'));
const Card = lazy(() => import('./containers/Card'));
const Cell = lazy(() => import('./containers/Cell'));
const Checkbox = lazy(() => import('./containers/Checkbox'));
const Collapse = lazy(() => import('./containers/Collapse'));
const DatePicker = lazy(() => import('./containers/DatePicker'));
const Divider = lazy(() => import('./containers/Divider'));
const Drawer = lazy(() => import('./containers/Drawer'));
const Home = lazy(() => import('./containers/Home'));
const Icon = lazy(() => import('./containers/Icon'));
const Input = lazy(() => import('./containers/Input'));
const InputNumber = lazy(() => import('./containers/InputNumber'));
const Layout = lazy(() => import('./containers/Layout'));
const LazyLoad = lazy(() => import('./containers/LazyLoad'));
const Loading = lazy(() => import('./containers/Loading'));
const LoadMore = lazy(() => import('./containers/LoadMore'));
const Message = lazy(() => import('./containers/Message'));
const Modal = lazy(() => import('./containers/Modal'));
const NavBar = lazy(() => import('./containers/NavBar'));
const NoticeBar = lazy(() => import('./containers/NoticeBar'));
const Pagination = lazy(() => import('./containers/Pagination'));
const Picker = lazy(() => import('./containers/Picker'));
const Progress = lazy(() => import('./containers/Progress'));
const PullRefresh = lazy(() => import('./containers/PullRefresh'));
const Radio = lazy(() => import('./containers/Radio'));
const Rate = lazy(() => import('./containers/Rate'));
const SearchBar = lazy(() => import('./containers/SearchBar'));
const Slider = lazy(() => import('./containers/Slider'));
const Steps = lazy(() => import('./containers/Steps'));
const TabBar = lazy(() => import('./containers/TabBar'));
const Switch = lazy(() => import('./containers/Switch'));
const Swipe = lazy(() => import('./containers/Swipe'));
const SwipeCell = lazy(() => import('./containers/SwipeCell'));
const Tabs = lazy(() => import('./containers/Tabs'));
const Tag = lazy(() => import('./containers/Tag'));
const Timeline = lazy(() => import('./containers/Timeline'));
const Toast = lazy(() => import('./containers/Toast'));

const Router = props => {
  return (
    <AnimationRouter {...props} fallback={<FallBack/>}>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/actionsheet" render={() => <ActionSheet />} />
      <Route exact path="/alert" render={() => <Alert />} />
      <Route exact path="/avatar" render={() => <Avatar />} />
      <Route exact path="/badge" render={() => <Badge />} />
      <Route exact path="/button" render={() => <Button />} />
      <Route exact path="/calendar" render={() => <Calendar />} />
      <Route exact path="/card" render={() => <Card />} />
      <Route exact path="/cell" render={() => <Cell />} />
      <Route exact path="/checkbox" render={() => <Checkbox />} />
      <Route exact path="/collapse" render={() => <Collapse />} />
      <Route exact path="/datepicker" render={() => <DatePicker />} />
      <Route exact path="/divider" render={() => <Divider />} />
      <Route exact path="/drawer" render={() => <Drawer />} />
      <Route exact path="/icon" render={() => <Icon />} />
      <Route exact path="/input" render={() => <Input />} />
      <Route exact path="/inputnumber" render={() => <InputNumber />} />
      <Route exact path="/layout" render={() => <Layout />} />
      <Route exact path="/lazyload" render={() => <LazyLoad />} />
      <Route exact path="/loading" render={() => <Loading />} />
      <Route exact path="/loadmore" render={() => <LoadMore />} />
      <Route exact path="/message" render={() => <Message />} />
      <Route exact path="/modal" render={() => <Modal />} />
      <Route exact path="/navbar" render={() => <NavBar />} />
      <Route exact path="/noticebar" render={() => <NoticeBar />} />
      <Route exact path="/pagination" render={() => <Pagination />} />
      <Route exact path="/picker" render={() => <Picker />} />
      <Route exact path="/progress" render={() => <Progress />} />
      <Route exact path="/pullRefresh" render={() => <PullRefresh />} />
      <Route exact path="/radio" render={() => <Radio />} />
      <Route exact path="/rate" render={() => <Rate />} />
      <Route exact path="/searchbar" render={() => <SearchBar />} />
      <Route exact path="/slider" render={() => <Slider />} />
      <Route exact path="/steps" render={() => <Steps />} />
      <Route exact path="/switch" render={() => <Switch />} />
      <Route exact path="/swipe" render={() => <Swipe />} />
      <Route exact path="/swipecell" render={() => <SwipeCell />} />
      <Route exact path="/tabbar" render={() => <TabBar />} />
      <Route exact path="/tabs" render={() => <Tabs />} />
      <Route exact path="/tag" render={() => <Tag />} />
      <Route exact path="/timeline" render={() => <Timeline />} />
      <Route exact path="/toast" render={() => <Toast />} />
    </AnimationRouter>
  );
};

export default Router;
