import React from 'react';
import {Component} from 'react';
import axios from 'axios';

class FoodProviderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location:'',
            foodproviderList: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({foodproviderList: response.data})
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
    Handler(){

    }

    render() {
        const {foodproviderList} = this.state
        return (
            <div className="FP"><h1>List of Food Provider</h1>{
                    foodproviderList.length?
                    foodproviderList.map(foodprovider=>
                    <div  key={foodprovider.id}>{foodprovider.title}
                        <button>select</button>

                    </div>
                    ):null

            }</div>
        )
    }
}
export default FoodProviderList
