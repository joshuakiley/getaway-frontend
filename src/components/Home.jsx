import React, { Component } from 'react'
import axios from 'axios';
import NewForm from './NewForm.jsx'
import Show from './Show.jsx'

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3003'
} else {
    baseURL = 'https://fathomless-sierra-68956.herokuapp.com'//we need to change this once deployed 
}
console.log(baseURL)
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: []
        }
        this.getLocation = this.getLocation.bind(this);
        this.deleteLocation = this.deleteLocation.bind(this);
        this.handleAddLocation = this.handleAddLocation.bind(this);
    }
    async getLocation() {
        try {
            const response = await axios(`${baseURL}/locations`);
            const data = response.data;
            this.setState({
                location: data,
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleAddLocation(bm) {
        this.setState({
            location: [...this.state.location, bm]
        })
    }

    async deleteLocation(id) {
        console.log(id);
        await axios.delete(`${baseURL}/locations/${id}`);
        const filterLocation = this.state.location.filter((location) => {
            return location._id !== id
        });
        this.setState({
            location: filterLocation
        })
    }

    componentDidMount() {
        this.getLocation();
    }


    render() {

        console.log(this.state.location)
        return (

            <div>

                <div className='NewForm'>

                    <NewForm handleAddLocation={this.handleAddLocation} baseURL={baseURL} />
                </div>

                <div >
                    <Show baseURL={baseURL}
                        location={this.state.location}
                        month={this.state.month}
                        notes={this.state.notes}
                        budget={this.state.budget}
                        sights={this.state.sights}
                        img={this.state.img}


                    />
                </div>
                <br />
                <br />
            </div>
        );
    }
}

export default Home;
