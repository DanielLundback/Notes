import React from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'

import {getNote, notes1} from './Utils/noteHelper'

const reformattedTitle = notes1.map((obj) => {
  const rObj = []
  rObj[obj.id] = <tr>{obj.title}</tr>

  return rObj
})

const titleBody = notes1.map((note) => {
  const {title, body} = note
  return (
    <thead>
      <div style={{padding: 10}}>
        <tr style={{fontWeight: 'bold'}}> {title} </tr>
      </div>
      <div style={{padding: 10, backgroundColor: 'white'}}>
        <tr>{body} </tr>
      </div>
      <tr>
        <Button style={{margin: 5}} variant="secondary" size="sm">
          Update
        </Button>

        <Button style={{margin: 5, backgroundColor: 'red'}} variant="secondary" size="sm">
          Update
        </Button>
      </tr>
    </thead>
  )
})

console.log(titleBody)

function App() {
  return (
    <div>
      <Container></Container>
      <Container>
        <row>
          <Col
            style={{
              backgroundColor: '#D4D68D',
              fontSize: 100,
              display: 'flex',
              justifyContent: 'center',
            }}
            xs={12}
            md={12}
          >
            <p>Notes</p>
          </Col>
        </row>
      </Container>
      <Container>
        <Row>
          <Col style={{height: 100}} xs={12} md={12}>
            <Button style={{marginTop: 15}} variant="primary" size="lg" block>
              Add Note
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{margin: 3}}>
          <Col style={{backgroundColor: '#C3F0D4', fontSize: 25}} xs={12} md={4}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>My notes</th>
                </tr>
              </thead>
              <tbody>{reformattedTitle}</tbody>
            </Table>
          </Col>
          <Col style={{backgroundColor: '#C7E5FF'}} xs={12} md={8}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>{titleBody}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
getNote(0)
const styles = {
  heading: {
    fontSize: 100,
  },
}
