import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { List, message, Avatar, Skeleton, Divider } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { fakeData } from "lib/allMassagedData";

const StudentList = ({ massagedBackEndData }) => {
  const dataset = [...massagedBackEndData, ...fakeData];
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <div
      id="scrollableDiv"
      style={{
        height: "100%",
        overflowY: "auto",
        padding: "0 16px",
        border: "1px solid  rgba(140, 140, 140, 0.35)",
        width: "max-content",
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
        style={{
          height: "60rem",
          width: "20rem",
        }}
      >
        <List
          dataSource={dataset}
          style={{
            marginLeft: "1rem",
          }}
          renderItem={(item) => {
            return (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={
                    <a
                      href={`${process.env.REACT_APP_API_URL}/student/${item.id}`}
                    >
                      {item.name}
                    </a>
                  }
                  description={item.bootcampRegion}
                />
                {/* <div>Go to Bootcamper Page</div> */}
              </List.Item>
            );
          }}
        />
      </InfiniteScroll>
    </div>
  );
};

export default StudentList;
