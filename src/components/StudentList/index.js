import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { List, message, Avatar, Skeleton, Divider } from "antd";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import InfiniteScroll from "react-infinite-scroll-component";
import { fakeData } from "lib/allMassagedData";
import Dropdown from "../DropDown";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import bootcamps from "../../dummyData";

const StudentList = ({
  massagedBackEndData,
  headerColor,
  watchlist,
  setWatchlist,
}) => {
  const dataset = [...massagedBackEndData, ...fakeData];
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [datasetId, setDatasetId] = useState(1);
  const [welcome, setWelcome] = useState(true);

  // checking for defualt bootcamp setting for dashboard line
  if (welcome) {
    setDatasetId(+localStorage.getItem("defaultBootcamp"));
    setWelcome(false);
    if (localStorage.getItem("Watchlist")) {
      setWatchlist([
        ...localStorage
          .getItem("Watchlist")
          .split(",")
          .map((el) => +el),
      ]);
    }
  }

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
    <Card className="min-w-150 ">
      <CardHeader
        color={headerColor}
        contentPosition="left"
        className="-h-10"
        style={{ height: "10px" }}
      >
        <div className="flex">
          <div>
            <h6 className="uppercase text-gray-200 text-xs font-medium ">
              Overview
            </h6>
            <h2 className="text-white text-2xl">Student List</h2>
          </div>
          <div
            style={{
              marginLeft: "1rem",
            }}
          >
            <Dropdown
              state={datasetId}
              setState={setDatasetId}
              label="Bootcamp"
              itemOptions={[
                "All Bootcamps",
                ...bootcamps.map((bootcamp) => {
                  return bootcamp.id + ": " + bootcamp.region;
                }),
                "Watchlist",
              ]}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className={`relative flex justify-center`}>
        <div
          id="scrollableDiv"
          style={{
            height: "40rem",
            overflowY: "auto",
            padding: "16px",
            // border: "1px solid  rgba(140, 140, 140, 0.35)",
            width: "max-content",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length < 50}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={
              <Divider plain>That's all folks, nothing more 🤐</Divider>
            }
            scrollableTarget="scrollableDiv"
            style={{
              height: "auto",
              width: "20rem",
            }}
          >
            <List
              dataSource={dataset.filter(
                (dataset) =>
                  dataset.bootcampId === datasetId ||
                  datasetId === 0 ||
                  (datasetId === 5 && watchlist.includes(dataset.id))
              )}
              style={{
                marginLeft: "1rem",
              }}
              renderItem={(item) => {
                return (
                  <List.Item key={item.id} className="flex">
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={
                        <a href={`${window.location.href}student/${item.id}`}>
                          {item.name}
                        </a>
                      }
                      description={item.bootcampRegion}
                    />
                    <div className="mr-6 mb-1">
                      {watchlist.includes(item.id) ? (
                        <>
                          <VisibilityIcon
                            size="2xl"
                            onClick={() => {
                              const i = watchlist.findIndex(
                                (el) => el === item.id
                              );
                              setWatchlist([
                                ...watchlist.slice(0, i),
                                ...watchlist.slice(i + 1),
                              ]);
                              localStorage.setItem("Watchlist", watchlist);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <VisibilityOffIcon
                            size="2xl"
                            onClick={() => {
                              setWatchlist(
                                Array.from(new Set([...watchlist, item.id]))
                              );

                              localStorage.setItem("Watchlist", watchlist);
                            }}
                          />
                        </>
                      )}
                    </div>
                    {/* <div>Go to Bootcamper Page</div> */}
                  </List.Item>
                );
              }}
            />
          </InfiniteScroll>
        </div>
      </CardBody>
    </Card>
  );
};

export default StudentList;
