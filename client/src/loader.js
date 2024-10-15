import React from 'react';
import { Alert, Flex, Spin } from 'antd';
const contentStyle = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
const Loader = () => (
  <Flex gap="small" vertical>
    <Flex gap="small">
      <Spin tip="Loading" size="large">
        {content}
      </Spin>
    </Flex>
  </Flex>
);
export default Loader;