import React from 'react';


class HelloWorld extends React.Component {
    constructor(props) { 
        super(props);
        this.state = { who: 'World'}
        this.handleClick = (newString) => {
            this.setState({
                who: newString
            });
        }
    }
 
   
    // render() { 
    //     return <div><p>Hello {this.state.who}</p>
    //     <button onClick= {()=> this.setState({who: 'Friend'})}>Friend</button>
    //     <button onClick= {()=> this.setState({who: 'React'})}>React</button>
    //     <button onClick= {()=> this.setState({who: 'World'})}>World</button>
    //     </div>
    // }

    render() { 
        return (<div><p>Hello {this.state.who}</p>
        <button onClick= {()=> this.handleClick('Friend')}>Friend</button>
        <button onClick= {()=> this.handleClick('React')}>React</button>
        <button onClick= {()=> this.handleClick('World')}>World</button>
        </div>
        )
    }

   
}
export default HelloWorld;