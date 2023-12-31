import React from 'react';
import { Result, Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const UnverifiedUser = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Result
        status="error"
        title="Rut no Registrado"
        subTitle="Lo sentimos, su entrada no ha sido validada en nuestro sistema."
        icon={<CloseCircleOutlined className="text-6xl" />}
      />
    </div>
  );
};

export default UnverifiedUser;
