import * as React from 'react'
import { ListView } from 'antd-mobile'

class ListViewDemo extends React.Component {

    // dataSource
    getRowData = (dataBlod, sectionID, rowID) => {
        return `I am data...`
    }

    // state
    state = {
        dataSource: new ListView.DataSource({
            getRowData: this.getRowData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,            
        }),
        sectionIDs: [0],
        rowIDs: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
    }

    // event handlers
    handleScroll = () => {
        console.log('scrolling...')
    }

    handleEndReached = () => {
        console.log('Scroll End!')
    }

    // UI

    row = (rowData, sectionID, rowID) => {
        return (
            <div key={rowID}>
                <h1>{rowData}</h1>
                <h3 style={{ color: 'gray' }}>{`${sectionID} - ${rowID}`}</h3>
            </div>
        )
    }

    separator = (sectionID, rowID) => {        
        return (
            <div key={`${sectionID}-${rowID}`}
                 style={{
                 backgroundColor: '#F5F5F9',
                 height: 8,
                 borderTop: '1px solid #ECECED',
                 borderBottom: '1px solid #ECECED',
            }}
          />
        )        
    }

    body = () => {                
        const b = (props) => (
            <div className="am-list-body my-body">
                <span style={{ display: 'none' }}>you can custom body wrap element</span>
                {props.children}
            </div>
        )
        return <b />
    }

    render() {
        return (
            <div>
                <ListView ref='lv'
                    dataSource={this.state.dataSource.cloneWithRowsAndSections(null, this.state.sectionIDs, this.state.rowIDs)}

                    renderRow={this.row}
                    renderSeparator={this.separator}
                    renderBodyComponent={this.body}

                    // style={{ height: document.documentElement.clientHeight, overflow: 'auto' }}
                    useBodyScroll

                    onScroll={this.handleScroll}
                    scrollRenderAheadDistance={500}       
                    scrollEventThrottle={200} // 滚动事件回调间隔单位是毫秒

                    onEndReached={this.handleEndReached} // 滚动结束回到，头和尾都会调用                    
                    onEndReachedThreshold={10}

                    pageSize={20} // 每页显示几行
                />
            </div>
        )
    }
}

export default ListViewDemo