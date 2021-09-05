import React from 'react';
import { Button, Col, Row } from 'antd';

function Do() {
    return (
            <div className="card container">
                <div className="card-title">Show</div>
                <div className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a metus blandit, elementum magna vitae, pharetra dolor. Sed mollis, eros non elementum elementum, lectus urna semper risus, eu vulputate enim enim eu dui. Sed dignissim nisl a sollicitudin consectetur. Ut condimentum arcu at porttitor elementum. Vivamus rutrum ante in mi sodales mollis. Phasellus felis mauris, semper in augue id, posuere vulputate orci. Morbi neque diam, venenatis in quam vitae, commodo laoreet</div>
                <Row style={{margin: 5}}>
                    <Col span={5}>
                        <Button type="primary">Изменить</Button>
                    </Col>
                    <Col span={5}>
                        <Button type="danger">Удалить</Button>
                    </Col>
                </Row>
            </div>
    )
}

export default Do
