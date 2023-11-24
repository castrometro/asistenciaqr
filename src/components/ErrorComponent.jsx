import React from 'react';
import { Result, Button } from 'antd';
import { WarningOutlined } from '@ant-design/icons';

const ErrorComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Result
        status="warning"
        title="Usuario ya ingresó"
        //subTitle=""
        //extra={<Button type="primary">Reintentar</Button>}
        icon={<WarningOutlined className="text-6xl" />}
      />
    </div>
  );
};

export default ErrorComponent;
