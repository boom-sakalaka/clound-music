/*
 * @Author: GZH
 * @Date: 2021-08-06 14:35:51
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-09 15:55:41
 * @FilePath: \clound-music\src\components\list\index.js
 * @Description:
 */
import React from "react";
import { ListWrapper, ListItem, List } from "./style";
import { getCount } from "../../api/utils";
import LazyLoad from "react-lazyload";
import { withRouter } from "react-router-dom";

function RecommendList(props) {
  const enterDetail = (id) => {
    props.history.push(`/recommend/${id}`);
  };
  return (
    <div>
      <ListWrapper>
        <h1 className="title">推荐歌单</h1>
        <List>
          {props.recommendList.map((item, index) => {
            return (
              <ListItem
                key={item.id + index}
                onClick={() => enterDetail(item.id)}
              >
                <div className="img_wrapper">
                  <div className="decorate"></div>
                  {/* 加此参数可以减小请求的图片资源大小 */}
                  <LazyLoad
                    placeholder={
                      <img
                        width="100%"
                        height="100%"
                        src={require("./music.png")}
                        alt="music"
                      />
                    }
                  >
                    <img
                      src={item.picUrl + "?param=300x300"}
                      width="100%"
                      height="100%"
                      alt="music"
                    />
                  </LazyLoad>
                  <div className="play_count">
                    <i className="iconfont play">&#xe885;</i>
                    <span className="count">{getCount(item.playCount)}</span>
                  </div>
                </div>
                <div className="desc">{item.name}</div>
              </ListItem>
            );
          })}
        </List>
      </ListWrapper>
    </div>
  );
}

export default React.memo(withRouter(RecommendList));
