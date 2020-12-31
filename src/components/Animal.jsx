import React, {Component} from 'react';

class Animal extends Component {

    //constructor and super aren't necessary in the create-react-app
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         petList: [],
    //         petName: '',
    //         petBreed: '',
    //         petAge: 0
    //     };
    // }
    state={
        petList: [],
        petName: '',
        petBreed: '',
        petAge: 0
    }

    handleNameInput = (event) => {
       //go to the state, target petName, and update the value
        //the value is changed for every letter entered into the input
        this.setState({petName: event.target.value})
        console.log("changed name", this.state.petName);
    };

    handleBreedInput = (event) => {
        this.setState({petBreed: event.target.value})
        console.log("changed breed", this.state.petBreed);
    };

    handleAgeInput = (event) => {
        this.setState({petAge: event.target.value})
        console.log("changed age", this.state.petAge);
    }

    //binding it to the render below
    handleClick = () => {
        console.log("Clicked Add");
        let petObj = {
            petName: this.state.petName, 
            petBreed: this.state.petBreed,
            petAge: this.state.petAge
        };
        this.setState({
            petList: [...this.state.petList, petObj],
            petName:"", petBreed:"", petAge:0
        });
        //console.log()
    };

    render() {
        let petArr = this.state.petList.map((animal, index) => {
            return(
                <div  key={index}>
                    <div>Name:{animal.petName}</div>
                    <div>Breed: {animal.petBreed}</div>
                    <div>Age: {animal.petAge}</div>
                    <hr />
                </div>
            )
        })
        return(
            <div>
                <h4>My Pet Store List</h4>
                {petArr}
                <input value={this.state.petName} onChange={this.handleNameInput} placeholder="Enter Your Pet Name" /><br />
                <input value={this.state.petBreed} onChange={this.handleBreedInput} placeholder="Enter Your Pet Breed" /><br />
                <input value={this.state.petAge} onChange={this.handleAgeInput} placeholder="Enter Your Pet Age" /><br />
                <button onClick={this.handleClick}>Add Animal</button>
            </div>
        )
    }
}
export default Animal;