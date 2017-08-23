import * as React from 'react'
import { Button } from 'antd-mobile'
import styles from './Button.css'

class ButtonDemo extends React.Component {    
    render() {
        return (
            <div className={styles.container}>
                <Button className={styles.item} type='primary'>Primary Button</Button>
                <Button className={styles.item} loading>Loading Button</Button>                
            </div>
        )
    }
}

export default ButtonDemo
