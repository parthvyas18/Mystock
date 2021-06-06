import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../App.css'
const Add = () => {
    return (
        <div class="Stocks">
            <span className="PageSubTitle">Add New Stock</span>
            <hr></hr>
            <div id="AddStocks">
                    <Form>
                        <FormGroup className="FormGroup">
                            <Label for="CompanyName">Company Name</Label>
                            <Input className="Input" type="text" id="CompanyName" />
                        </FormGroup>
                        <FormGroup className="FormGroup">
                            <Label for="BuyPrice">Stock Buy Price</Label>
                            <Input className="Input" type="text" id="BuyPrice" />
                        </FormGroup>
                        <Button className="SubmitBtn">Add</Button>
                    </Form>
            </div>
        </div>
    );
}
export default Add;