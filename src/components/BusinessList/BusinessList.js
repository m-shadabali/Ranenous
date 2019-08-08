import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className = "BusinessList">
           {this.props.business.map((business) => {
          return <Business key = {business.id} business = {business} />
          })
        }
        </div>
        )
    }
}

export default BusinessList;