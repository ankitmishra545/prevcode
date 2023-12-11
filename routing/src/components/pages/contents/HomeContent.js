import React from 'react'
import Card from 'react-bootstrap/Card';

function HomeContent() {
  return (
    <div>
        <Card className="text-center">
            <Card.Header>Home</Card.Header>
            <Card.Body>
                <Card.Title>Content of Home Page</Card.Title>
                <Card.Text>
                    A home page is the primary web page that a visitor will view when they navigate to a website via a search engine, and it may also function as a landing page to attract visitors.[3] In some cases, the home page is a site directory, particularly when a website has multiple home pages.

                    Good home page design is usually a high priority for a website;[4] for example, a news website may curate headlines and first paragraphs of top stories, with links to full articles.[5][6] According to Homepage Usability, the homepage is the "most important page on any website" and receives the most views of any page.[7] A poorly designed home page can overwhelm and deter visitors from the site.[6] One important use of home pages is communicating the identity and value of a company.
                </Card.Text>
                <Card.Text>
                    A home page (or homepage) is the main web page of a website.[1] The term may also refer to the start page shown in a web browser when the application first opens.[2] Usually, the home page is located at the root of the website's domain or subdomain. For example, if the domain is example.com, the home page is likely located at www.example.com/.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default HomeContent