import React from 'react'
import {Form ,Col} from "react-bootstrap"
export default function Searchform({params,onParamschange}){
    return (
        <>
        <Form className="mb-4">
        <Form.Row className="align-items-end" >
            <Form.Group as={Col}>
              <Form.Label>Description </Form.Label>
              <Form.Control  onChange={onParamschange} value={params.description}
               name='description' type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Location </Form.Label>
              <Form.Control  onChange={onParamschange} value={params.location}
               name='location' type="text" />
            </Form.Group>
            <Form.Group as={Col} xs="auto" className="ml-2">
        
              <Form.Check  onChange={onParamschange} value={params.full_time}
               name='full_time' id="full-time" label=" only  full Time" 
               type="checkbox" className="mb-2" />
            </Form.Group>
        </Form.Row>

        </Form>

        </>
    )
}