import React from 'react';


export default class Bomb extends React.Component {
    
        state = {count:0};
    

    componentDidMount() { 
         this.interval = setInterval(() => { this.setState({count:this.state.count + 1})}, 1000)
       
    };


    componentWillUnmount() { 
        console.log('from unmount')
        clearInterval(this.interval) 
    }

    showTickTock(){
        const {count} = this.state
        if ( count  >= 5) {
             clearInterval(this.interval) 
            return 'BOOM' 
        } else if (count %2 ===0 ){
            return 'tick'
        } else { 
            return 'tock';
        }
    }
        


    render() { 

      
            
        return (<div>
        {this.showTickTock()}
        
        </div>
        )
        
    
    }

    

   
}

