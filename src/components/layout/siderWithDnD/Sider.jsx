import { Layout,Card , Statistic, List , Typography, Tag} from 'antd';
import { ArrowUpOutlined , ArrowDownOutlined} from '@ant-design/icons';
import {useContext} from "react";
import {capitalize} from "../../../utils.js";
import {CryptoContext} from "../../../context/cripto-context.jsx";
import {Droppable, Draggable} from "react-beautiful-dnd";


const siderStyle = {
    padding: '1rem'
};

export const Sider = ()=>{
    const {assets} = useContext(CryptoContext)

    return(
        <Layout.Sider width="25%" style={siderStyle}>
            <Droppable droppableId="assets">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {assets.map((asset, index) => (
                            <Draggable key={asset.id} draggableId={asset.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Card key = {asset.id} style={{marginBottom:'1rem'}}>
                                            <Statistic
                                                title={capitalize(asset.id)}
                                                value={asset.totalAmount}
                                                precision={2}
                                                valueStyle={{
                                                    color: asset.grow ? '#3f8600': '#cf1322',
                                                }}
                                                prefix={asset.grow ? <ArrowUpOutlined />: <ArrowDownOutlined/>}
                                                suffix="$"
                                            />
                                            <List
                                                size="small"
                                                dataSource={[
                                                    {title:'Total Profit', value: asset.totalProfit, withTag:true},
                                                    {title:'Asset Amount', value: asset.amount, isPlain:true},
                                                ]}
                                                renderItem={(item) => (
                                                    <List.Item>
                                                        <span>{item.title}</span>
                                                        <span>
                                    {item.withTag && <Tag color={asset.grow ? 'green': 'red'}>{asset.growPercent}%</Tag>}
                                                            {item.isPlain
                                                                ? item.value.toFixed(2)
                                                                : <Typography.Text type={asset.grow ? 'success': 'danger'}>{(item.value.toFixed(2))}$</Typography.Text>}


                                </span>

                                                    </List.Item>
                                                )}
                                            />
                                        </Card>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Layout.Sider>
    )}

