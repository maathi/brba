import React, { Component } from 'react'

class Episodes extends Component {

    state = {
        eps : []
    }

    async componentDidMount() {
        let eps = await this.getData()
        this.setState({eps})
    }
    
    async componentDidUpdate(prevProps, prevState) {
        if(this.props.char_name == prevProps.char_name)
        return

        
    }
    
    async getData(){
        let url = "https://breakingbadapi.com/api/episodes?series=Breaking+Bad"
        let res = await fetch(url)
        return res.json()
    }

    getStyle(characters){
        return characters.includes(this.props.char_name) ? {color:"red"} : {}
    }

    render() {
        return (
            <div>
                <h2>my name is {this.props.char_name}</h2>
                <ul>
                    {this.state.eps.map(e => <li style={this.getStyle(e.characters)} key={e.episode_id}>{e.episode_id}</li>)}
                </ul>
            </div>
        )
    }
}

export default Episodes