import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

function DoCreate() {
    return (
            <div className="card container">
                <Input value={''} placeholder={'Название'} className="card-title"></Input>
                <TextArea rows={5}  className="card-description" value={''} placeholder={'Описание'} />
                <Row style={{margin: 5}}>
                    <Col span={5}>
                        <Button type="primary">Создать</Button>
                    </Col>
                    <Col span={5}>
                        <Button type="danger">Отменить</Button>
                    </Col>
                </Row>
            </div>
    )
}

export default DoCreate
