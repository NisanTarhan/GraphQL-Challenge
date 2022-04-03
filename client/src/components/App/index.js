import { Routes, Route, Link } from "react-router-dom";
import { Row, Col } from 'antd';
import styles from './styles.module.css'

import HeaderMenu from "./HeaderMenu.js"
import Home from 'pages/Home'
import NewPost from "pages/NewPost";

function App() {
  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col span={14}>
          <HeaderMenu />
          <div className={styles.content}>
            <Routes >
              <Route path="new" element={<NewPost />} />
              <Route path="/" element={<Home />} />
            </Routes >
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default App;
