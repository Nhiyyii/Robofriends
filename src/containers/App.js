import React from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './app.css';
import Scroll from '../components/Scroll';
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
               return response.json();
            })
            .then(users => {
                this.setState({robots:users})
            });
    }

    render() {

        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                <Cardlist robots={filteredRobots} />
                </Scroll>
                
            </div>

        );
    }


}

export default App;
