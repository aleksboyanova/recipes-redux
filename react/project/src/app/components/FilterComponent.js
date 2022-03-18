import React from  'react';
import {Row, Col, Button} from 'react-bootstrap';

class FilterComponent extends React.Component {
    render() {
        const method = this.props.checkboxClickOnItem;
        return (
            <div>
                <Row>
                    <Col>
                        <label htmlFor="">Търсене</label>
                        <input
                            type={"text"}
                            className={"form-control"}
                            value={this.props.searchboxText}
                            onChange={(event)=> {
                                this.props.searchboxTextInput(event.target.value)
                            }}
                        />
                        {this.props.checkboxItems.map(item => <div>
                            <input onClick={()=>{method(item)}} type="checkbox" /> {item}
                        </div>)}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FilterComponent;
