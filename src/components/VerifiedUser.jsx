import React from 'react';
import { Result, Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const VerifiedUser = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Result
        status="success"
        title="Entrada Validada"
        subTitle="¡Felicidades! Su entrada ha sido validada con éxito."
        // extra={[
        //   <Button type="primary" key="console">
        //     Ver Detalles
        //   </Button>,
        //   <Button key="buy">Comprar Más Entradas</Button>,
        // ]}
        icon={<CheckCircleOutlined className="text-6xl" />}
      />
    </div>
  );
};

export default VerifiedUser;
