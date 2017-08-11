import React from 'react';
import { NavBar, Icon, Flex } from 'antd-mobile';
import { connect } from 'dva';
import { IndexLink, hashHistory } from 'dva/router';

const SubFrame = ({ children, location }) => {
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
          <Icon
            key="0"
            type={require('../assets/svg/refresh.svg')}
            style={{ marginRight: '0.32rem' }}
            onClick={
              () => {
                hashHistory.push({
                  pathname: location.pathname,
                  query: location.query,
                });
              }
            }
          />,
          <IndexLink to="/" key="1">
            <Icon
              type={require('../assets/svg/homepage-o.svg')}
            />
          </IndexLink>,
        ]}
        mode="light"
        onLeftClick={
          () => hashHistory.goBack()
        }
      >
        {location.query.title}
      </NavBar>
      {children}
    </div>
  );
};

function mapDispatchToProps() {
  return {
  };
}

export default connect(null, mapDispatchToProps)(SubFrame);
