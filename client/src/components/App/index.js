import { Row, Col, List, Skeleton, Avatar } from 'antd';
import styles from './styles.module.css'

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

function App() {
  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col span={14} className={styles.content}>
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
        </Col>
      </Row>
    </div>
  );
}
export default App;
