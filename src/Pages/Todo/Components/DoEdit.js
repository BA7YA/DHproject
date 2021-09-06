import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

function DoEdit() {
    return (
            <div className="card container">
                <Input value={'Edit'} className="card-title"></Input>
                <TextArea rows={5}  className="card-description" value={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a metus blandit, elementum magna vitae, pharetra dolor. Sed mollis, eros non elementum elementum, lectus urna semper risus, eu vulputate enim enim eu dui. Sed dignissim nisl a sollicitudin consectetur. Ut condimentum arcu at porttitor elementum. Vivamus rutrum ante in mi sodales mollis. Phasellus felis mauris, semper in augue id, posuere vulputate orci. Morbi neque diam, venenatis in quam vitae, commodo laoreet'} />
                <Row style={{margin: 5}}>
                    <Col span={5}>
                        <Button type="primary">Сохранить</Button>
                    </Col>
                    <Col span={5}>
                        <Button type="danger">Отменить</Button>
                    </Col>
                </Row>
            </div>
    )
}

export default DoEdit
