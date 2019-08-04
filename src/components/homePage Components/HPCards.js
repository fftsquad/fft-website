import React from 'react';
import { Card, CardDeck, Button} from "react-bootstrap";

export default function HPCards() {
    return (
      <div>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src="https://ton.twitter.com/1.1/ton/data/dm/1158094925000404996/1158094919648464896/DN2fi3Us.jpg:medium"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info">Learn More</Button>
              {/* <small className="text-muted" /> */}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://pbs.twimg.com/card_img/1157635560003067905/ucoZzlCX?format=jpg&name=medium"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info">Learn More</Button>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://ton.twitter.com/1.1/ton/data/dm/1158096006614941701/1158096003410493440/m0V2fe1M.jpg:medium"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer
                content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info">Learn More</Button>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
}
