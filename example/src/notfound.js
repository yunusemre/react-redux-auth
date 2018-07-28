// @ts-check
import React from 'react'
import { Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <Row type="flex" justify="center" align="top" className="Layout marT20 text-center">
            <Col className="white" xs={24} sm={24} md={24} lg={24}>
                <h1 className="text-center not-found">Ooooppppssss...!!!</h1>
                <div className="not-found-under-title">
                    I think, You are lost. Keep calm and back to 
                    <div className="clearfix"></div>
                    <Button type="primary" className="marT40"><Link to="/">Home page</Link></Button>
                </div>
            </Col>
        </Row>
    )
}

export default NotFound