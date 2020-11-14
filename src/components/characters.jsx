import React, { Component } from 'react'

class Characters extends Component {

    state = {data:['f']}

    // constructor(props){
    //     console.log("constoctor starting...")
    //     super(props)
    //     this.init()
    //     console.log("constuctor ending...", this.state.data)
    // }

    async componentWillMount() {
        let data = await this.init()
        this.setState({data})
        console.log("cwm:" , this.state.data)
    }

    componentDidMount() {
        console.log("cdm:", this.state.data)
    }
    
    
    async init(){
        let url = "https://www.breakingbadapi.com/api/characters"
        let res = await fetch(url)
        return res.json()
    }

    render() {
        return (
            <div>
                walter white, jesse pinkman
                <ul>
        {this.state.data.map(c => <li>{c.name}
        <img style={{width:"150px",   borderRadius: "4px"}} src={c.img}></img>
        </li>)}
                </ul>
            </div>
        )
    }
}
export default Characters