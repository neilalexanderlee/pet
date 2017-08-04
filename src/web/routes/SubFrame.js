import React from 'react';
import { NavBar, Icon, Flex } from 'antd-mobile';
import { connect } from 'dva';
import { IndexLink, Link, hashHistory } from 'dva/router';

const SubFrame = ({ children, location, selectTab }) => {
  return (
    <div>
      <NavBar
        iconName={false}
        leftContent={
          <Flex>
            <Icon key="0" type={require('../assets/svg/return.svg')} />
            返回
          </Flex>
        }
        rightContent={[
          <Link to={location.pathname} key="0">
            <Icon type={require('../assets/svg/refresh.svg')} style={{ marginRight: '0.32rem' }} />
          </Link>,
          <IndexLink to="/" key="1">
            <Icon
              type={require('../assets/svg/homepage-o.svg')}
              onClick={
                () => {
                  selectTab('');
                }}
            />
          </IndexLink>,
        ]}
        mode="light"
        onLeftClick={
          () => hashHistory.goBack()
        }
      />
      {children}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    selectTab(selectedTab) {
      dispatch({
        type: 'frame/update',
        payload: { selectedTab },
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(SubFrame);
