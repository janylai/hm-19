import React from "react";
import styles from './Todo.module.css'


 class ToDo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

        addValue(e){
            this.setState(()=>{
                return{
                   value: e.target.value
                }
            })
        }

        SubmitHandler = (e) =>{
            e.preventDefault()

            if (this.state.value.trim().length === 0) {
                return
            }

            const text = {
                value: this.state.value,
                id: Math.random().toString(),
                date: new Date().toLocaleDateString()
            }
            this.setState({
                value: ''
            })
            this.props.onData(text)
        }
    
    render(){
        return(
            <form onSubmit={this.SubmitHandler} className= {styles.container}>
                <input type="text" placeholder="Vveddite text" onChange={this.addValue.bind(this)} value={this.state.value}/>
                <button className= {styles.btn} >Add</button>
            </form>
        )
    }
}

export default ToDo