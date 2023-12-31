import React from 'react'
import Card from 'react-bootstrap/Card';

function ServicesContent() {
  return (
    <div>        
        <Card className="text-center">
            <Card.Header>Services</Card.Header>
            <Card.Body>
                <Card.Title>Content of Services Page</Card.Title>
                <div className='servicesDiv'>
                    {[
                        'Primary',
                        'Secondary',
                        'Success',
                        'Danger',
                        'Warning',
                        'Info',
                        'Light',
                        'Dark',
                    ].map((variant,index) => (
                    <Card
                        bg={variant.toLowerCase()}
                        key={variant}
                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                        style={{ width: '18rem' }}
                        className="mb-2"
                    >
                        <Card.Header>Service {index+1}</Card.Header>
                        <Card.Body>
                            <Card.Title>Service {index+1} Title </Card.Title>
                            <Card.Text>
                                Some text to Service {index+1} on the card and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    ))}
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ServicesContent