import React from 'react';


class Bomb extends React.Component {
    constructor(props) { // Called before component mounts
        super(props);
        this.state = {count:0}
    }

    componentDidMount() { 
        setInterval(() => { this.setState({count:this.state.count + 1})}, 1000)};


    componentWillUnmount() { 
        clearInterval(this.interval) }


        


    render() { 

        const showTick = () => {
            {this.state.count  >= 8 ? 'BOOM' :
            this.state.count %2 ===0 ? 'tick':'tock'};}
        return <div>{this.state.count}
        
        </div>;
    
        
    
    }

    

   
}

export default Bomb;