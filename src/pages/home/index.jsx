import React, { useEffect } from 'react';
import { Row, Col, Input } from 'antd';
import { connect } from 'dva';

const Home = props => {
  const { dispatch } = props;
  useEffect(() => {
    dispatch({
      type: 'home/fetchState',
      payload: 1252431,
    });
  }, []);

  const onSearch = value => {
    console.log('value', value);
    // let type = 'query';
    // const abc = parseInt(value);
    // console.log('isNumber', isNumber(abc));
  };

  const arr = [1, 2, 3, 4, 5, 6];

  console.log('props', props);

  return (
    <div className="container">
      <Row>
        <Col xs={24} md={8}>
          <Input.Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Col>
      </Row>
      <Row gutter={32}>
        {arr.map(item => {
          return (
            <Col xs={24} md={4} key={item}>
              {item}
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default connect(({ home }) => ({ home }))(Home);
