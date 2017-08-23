import * as React from 'react'
import { Button, List } from 'antd-mobile'
import styles from './Button.css'

class ButtonDemo extends React.Component {    
    render() {
        return (
            <div className={styles.container}>
                <Button className={styles.item} type='primary'>Primary Button</Button>
                <Button className={styles.item} loading>Loading Button</Button>                
                <Button className={styles.item} disabled onClick={()=>{console.log('🤡🤡🤡🤡🤡🤡')}}>Disabled Button</Button>
                <Button className={styles.item} icon='check-circle-o'>Icon Button</Button>
                <Button className={styles.item} type='warning'>Warning Button</Button>
                <Button className={styles.item} icon={require('../assets/yay.jpg')}>
                    With Local Icon
                </Button>

                <div className={styles.item} style={{ height: '0.16rem' }} />
                <p className={styles.item} style={{ margin: '30px 10px 18px 10px', color: '#999' }}>inline / small</p>

                <div className={styles.item} style={{ display: 'flex', alignItems: 'center' }} >
                    <Button type="primary" inline style={{ marginRight: '0.08rem' }}>Inline</Button>
                    <Button type='ghost' inline size='small' style={{ marginRight: '0.08rem' }}>Inline Small</Button>
                    <Button type='primary' inline size='small'>Inline Small</Button>
                </div>





                
                <div className={styles.item} style={{ height: '0.16rem' }} />
                <p className={styles.item} style={{ margin: '30px 10px 18px 10px', color: '#999' }}>Button In List</p>

                <List style={{ margin: '0.1rem 0', backgroundColor: 'white' }}>
                    <List.Item extra={
                        <Button type='ghost' size='small' inline>Small</Button>
                    } 
                               multipleLine>
                        这是标题 这是标题 这是标题 这是标题 这是标题 这是标题 
                        <List.Item.Brief>
                            这是简介 这是简介 这是简介 这是简介 这是简介 这是简介 这是简介 
                        </List.Item.Brief>
                    </List.Item>

                    <List.Item extra={
                        <Button type='primary' size='small' inline>Small</Button>
                    } 
                               multipleLine>
                        这是标题 这是标题 这是标题 这是标题 这是标题 这是标题 
                        <List.Item.Brief>
                            这是简介 这是简介 这是简介 这是简介 这是简介 这是简介 这是简介 
                        </List.Item.Brief>
                    </List.Item>

                    <List.Item extra={
                        <Button type='warning' inline>Large</Button>
                    } 
                               multipleLine>
                        这是标题 这是标题 这是标题 这是标题 这是标题 这是标题 
                        <List.Item.Brief>
                            这是简介 这是简介 这是简介 这是简介 这是简介 这是简介 这是简介 
                        </List.Item.Brief>
                    </List.Item>
                </List>
            </div>
        )
    }
}

export default ButtonDemo
