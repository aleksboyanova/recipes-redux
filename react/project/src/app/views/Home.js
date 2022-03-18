import React from  'react';
import {Row, Col, Button} from 'react-bootstrap';
import FilterComponent from "../components/FilterComponent";
import NetworkClient from "../api/NetworkClient";
import Nav from "../components/Nav";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actions from  '../actions/DishesActions';
import SingleItem from '../components/SingleItem';

class Home extends React.Component {
    state = {
        filters: [
            'Beef roast',
            'Asparagus',
            'Olive oil',
            'Rice',
            'Powder',
            'Salt',
            'Yeast',
            'Flour',
            'Sugar',
            'Sauce'
        ],
        selectedCheckboxItems: [

        ],
        filterText: '',
        gridView: 4
    }

    constructor() {
        super();
        this.getIngr();
    }

    addRemoveItem(item) {
        let items = this.state.selectedCheckboxItems;
        let index = this.state.selectedCheckboxItems.findIndex(x=> x === item);

        if(index > -1) {
            items.splice(index, 1);
        } else {
            items.push(item);
        }

        this.setState({selectedCheckboxItems: items}, ()=>{
            this.getIngr();
        })
    }

    getIngr() {

        let url = 'http://localhost:3005/?';

        const items = this.state.selectedCheckboxItems;
        url += 'selIngr=';
        for(let i = 0; i < items.length; i++) {
            url += i === 0 ? items[i] : '&' + items[i];
        }

        if(this.state.filterText.length > 0) {
            url += '&iName=' + this.state.filterText;
        }

        NetworkClient.get(url).then(r => {
            this.props.setDishes(r);
        });
    }

    render() {
        return (
            <div style={{padding: 15}}>
                <Nav />

                <Row>
                    <Col xs={3}>
                        <FilterComponent
                            checkboxClickOnItem={this.addRemoveItem.bind(this)}
                            checkboxItems={this.state.filters}
                            checkboxItemsName={"Ingredients"}
                            searchboxText={this.state.filterText}
                            searchboxTextInput={(text)=>{
                                this.setState({filterText: text}, () => {
                                    this.getIngr()
                                })
                            }}
                        />
                        <div>
                            <Button onClick={()=>{
                                this.setState({gridView: 4})
                            }}>Grid</Button>
                            &nbsp;
                            <Button onClick={()=>{
                                this.setState({gridView: 12})
                            }}>Row</Button>
                        </div>
                    </Col>
                    <Col xs={9}>
                        <Row>
                            {this.props.dishes.map( d =><Col xs={this.state.gridView}> <SingleItem name={d.name} imageURL={d.imageURL} /></Col>)}
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        dishes: state.dishes.dishes
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setDishes: actions.setDishes
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
