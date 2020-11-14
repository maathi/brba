import React, { Component } from 'react'
import Card from './character'



class Characters extends Component {

    state = {chars:[]}

 
    async componentDidMount() {
       let chars = await this.getData()
       this.setState({chars})
    }
    
    async componentDidUpdate(prevProps, prevState) {
        console.log("query in characters:", this.props.query)
        if(this.props.query == prevProps.query)
        return

        console.log("updating...")
        let chars = await this.getData(this.props.query)
        this.setState({chars})
    }
    
    async getData(query=""){
        let url = "https://www.breakingbadapi.com/api/characters?name="+ query
        let res = await fetch(url)
        return res.json()
    }

    render() {
        return (
            <div>
                {this.state.chars.map(c => <Card key={c.char_id} infos={c} ></Card>)}
            </div>
        )
    }
}
export default Characters
