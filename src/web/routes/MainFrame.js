import React from 'react';
import { TabBar, Icon } from 'antd-mobile';
import { connect } from 'dva';
import { hashHistory } from 'dva/router';

const MainFrame = ({ children, location }) => {
  return (
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#33A3F4"
      barTintColor="white"
    >
      <TabBar.Item
        icon={<Icon type={require('../assets/svg/homepage-o.svg')} size="md" />}
        selectedIcon={<Icon type={require('../assets/svg/homepage.svg')} size="md" />}
        title="首页"
        key="home"
        selected={location.pathname === '/'}
        onPress={() => {
          hashHistory.push({
            pathname: '/',
          });
        }}
      >
        {children}
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon type={require('../assets/svg/service-o.svg')} size="md" />}
        selectedIcon={<Icon type={require('../assets/svg/service.svg')} size="md" />}
        title="服务"
        key="service"
        selected={location.pathname === '/service'}
        onPress={() => {
          hashHistory.push({
            pathname: 'service',
          });
        }}
      >
        {children}
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon type={require('../assets/svg/people-o.svg')} size="md" />}
        selectedIcon={<Icon type={require('../assets/svg/people.svg')} size="md" />}
        title="我的"
        key="user"
        selected={location.pathname === '/user'}
        onPress={() => {
          hashHistory.push({
            pathname: 'user',
          });
        }}
      >
        {children}
      </TabBar.Item>
    </TabBar>
  );
};

MainFrame.propTypes = {
};

function mapStateToProps({ user }) {
  const isAuthenticated = !!user.userName || false;
  return {
    isAuthenticated,
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainFrame);
