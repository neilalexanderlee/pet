import React from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';

const PlaceHolder = props => (
  <div
    style={{
      backgroundColor: '#ebebef',
      color: '#bbb',
      textAlign: 'center',
      height: '0.6rem',
      lineHeight: '0.6rem',
      width: '100%',
    }}
    {...props}
  >Service</div>
);

const ServicePage = () => (
  <div className="flex-container">
    <div className="sub-title">基本</div>
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
  </div>
);

export default ServicePage;
