import React from 'react';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pushUp: 0,
            plank: 0,
            sidePlank: 0
        }
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value})
    }

    render() {
        return (
            <div>
                <div className="workoutContainer">
                    <img src={require('./images/pushUp.jpg')}/>
                    <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.pushUp}
                           id="pushUp"/>
                </div>

                <div className="workoutContainer">
                    <img src={require('./images/plank.jpg')}/>
                    <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.plank}
                           id="plank"/>
                </div>

                <div className="workoutContainer">
                    <img src={require('./images/sidePlank.jpg')}/>
                    <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.sidePlank}
                           id="sidePlank"/>
                </div>

            </div>
        )
    }
}

export default Main;