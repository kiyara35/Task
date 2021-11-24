import React, {useState, useEffect} from 'react';
import {API_GET_CATEGORIES} from "../../config/config"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap"
import {Link} from 'react-router-dom'
import './Home.css'
import {Container, Row, Col} from "react-bootstrap"


const Home = () => {

    const [category, setCategory] = useState([])

    const getCategories = async () => {
        const req = await fetch(API_GET_CATEGORIES)
        const res = await req.json()
        setCategory(res)
    }

    useEffect(() => {
        getCategories()
    }, [])


    return (
        <Container style={{padding : '80px 0'}}>

            <Row className="justify-content-md-between justify-content-lg-between justify-content-sm-between">
                <h2 style={{textAlign :'center', marginBottom : '50px'}}>Categories</h2>
                {category.map((el) => {
                    return (
                        <Col
                            xs lg="3"

                        >
                            <Link
                                key={el.id}
                                to={el.id + '/services/'}
                            >
                                <Card
                                    className='card'
                                >
                                    <Card.Img variant="top" src={el.logo}/>
                                    <Card.Body>
                                        <h3
                                            className='card__title'
                                        >{el.title}</h3>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
};

export default Home;