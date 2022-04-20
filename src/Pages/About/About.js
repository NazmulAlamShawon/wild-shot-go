import React from 'react';
import { Button, Card } from 'react-bootstrap';


const About = () => {
    return (
        <>

            <h2>About me</h2>
            <Card className='mx-auto' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://lh3.googleusercontent.com/a-/AOh14Gi9mxXAt1RF0ElVbM_5u9cpQlGxaBaJeXPj6ayl=s288-p-rw-no" />
                <Card.Body>
                    <Card.Title>Nazmul Alam</Card.Title>
                    <Card.Text>
                        <p> My name's Nazmul. I am a junior front end developer. I have a goal for next few year's. I want to a pure professional developer to persue myself and take a lot of challange.So I decided to go for long race. Short term is not good result for career.I want to learn node.js mondgo db also express and want to profession marn developer. I will work it at least two or three year and my Main dream set up my mind a bloackchain developeror web3 developer depend on market situtaion and my comfortable zone. </p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>

    );
};

export default About;