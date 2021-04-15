import { Card } from 'antd';

import './Banner.css'

export default function Banner({formatText}) {

    const textFormatting = (str) => {
        let content = str.split('\n\n').map(item => <p className="formatText" key={item}>{item}</p>);
        return content;
    }

    return (
        <Card title="Форматированный текст:" style={{ width: 800 }}>
            {textFormatting(formatText)}
        </Card>
    )
}