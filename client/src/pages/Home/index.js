import React from 'react';
import { List, Skeleton, Avatar } from 'antd';

const data = [{
    gender: 'female',
    name: {
        title: 'Mrs',
        first: 'Fatima',
        last: 'Vicente',
    },
    email: 'fatima.vicente@example.com',
    picture: {
        large: "https://randomuser.me/api/portraits/women/30.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/30.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/30.jpg",
    },
    nat: 'ES',
}];
function Home(props) {
    return (
        <div>
            <List
                className="demo-loadmore-list"
                loading={false}
                itemlayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar src={item.picture.large} />}
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description="Ant Design, a design language for background applications, is ref ined by Ant UEI"
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Home;