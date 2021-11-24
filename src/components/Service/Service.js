import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {API_GET_CATEGORIES} from "../../config/config"
import {Card, Container, Row, Col} from "react-bootstrap"
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([])

    let params = useParams()

    const getServices = async (id) => {
        const req = await fetch(API_GET_CATEGORIES + id + '/service')
        const res = await req.json()
        setServices(res)
    }

    useEffect(() => {
        getServices(params.id)
    })
    return (

        <Container style={{margin: '0 auto', padding: '80px 0'}}>
            <h2 style={{textAlign :'center', marginBottom : '50px'}}>Services</h2>
            <Row className="justify-content-md-center justify-content-lg-center justify-content-sm-center">
                {services.map((el) => {
                    return (
                        <Col
                            xs lg='12'
                        >
                            <Card

                                key={el.id}
                                className='card'
                            >
                                <Card.Img variant="top" src={el.logo}/>
                                <Card.Body>
                                    <h3
                                        className='card__title'
                                    >{el.title}</h3>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>

        </Container>
    );
};

export default Service;