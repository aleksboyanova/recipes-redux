import React from 'react';


export default class SingleItem extends React.Component{
    render() {
        return (
            <div>
                {this.props.name}<br/>
                <img src={this.props.imageURL}  style={{width: '200px'}}/>
            </div>
        );
    }
}
