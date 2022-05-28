import React from "react"
import styles from './TodoList.module.css'

export class TodoList extends React.Component {
    render() {
        return (
            <div >
                {this.props.data.map((el) => {
                    return <li  className= {styles.list} key={el.id}> {el.value.value}
                    {el.date}
                    </li>
                })}
            </div>
        )
    }
}