import React from 'react';

import { Card } from 'antd';

export default function InputText({handlerAddTextArea, areaText}) {

  return (
    <Card title="Введите текст:" style={{ width: 800 }}>
        <textarea id="textfield" value={areaText} onChange={handlerAddTextArea} rows="5" cols="45"/>
    </Card>
  );
}
