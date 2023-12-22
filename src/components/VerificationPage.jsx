import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { Spin, Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const VerificationPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
    const {rut} = useParams();
    useEffect(() => {
        verifyRUT(rut);
    }, [rut]);
  const navigate = useNavigate();

  const verifyRUT = async (rut) => {
    setLoading(true);
    try {
      const response = await fetch('/asistencia_test.xlsx'); // Ruta relativa al archivo Excel en la carpeta public
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);
        console.log(data);
      const rutRecord = data.find(record => record.Rut === rut);
      if (!rutRecord) {
        setMessage('RUT no encontrado en los registros.');
        navigate("/UnverifiedUser");
      } else {
          setMessage('Entrada verificada.');
          navigate("/VerifiedUser");
        //   rutRecord['Asistencia (1/0)'] = 1;
         //  XLSX.utils.sheet_add_json(sheet, [rutRecord], { skipHeader: true, origin: -1 });
        //  XLSX.writeFile(workbook, 'asistencia_test.xlsx');
        
      }
    } catch (error) {
      console.error('Error al verificar el RUT:', error);
      setMessage('Error al verificar el RUT.');
    }
    setLoading(false);
  };

  // Lógica para obtener el RUT y llamar a verifyRUT...

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {loading ? (
        <Spin size="large" />
      ) : (
        <>
          <p>{message}</p>
          {/* Botón para descargar el archivo Excel modificado, si es necesario
          {message === 'Entrada verificada.' && (
            <Button href="/lista_modificada.xlsx" download>
              Descargar Excel Actualizado
            </Button> */}
         
        </>
      )}
    </div>
  );
};

export default VerificationPage;