/*
 * @Author: GZH
 * @Date: 2021-08-06 10:46:15
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-06 11:39:55
 * @FilePath: \cloud-music\src\application\Home\index.js
 * @Description:
 */
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Top, Tab, TabItem } from './style';
import { NavLink } from 'react-router-dom'; // 利用 NavLink 组件进行路由跳转

function Home(props) {
  const { route } = props;
  return (
    <div>
      <Top>
        <span className='iconfont menu'>&#xe65c;</span>
        <span className='title'>WebApp</span>
        <span className='iconfont search'>&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to='/recommend' activeClassName='selected'>
          <TabItem>
            <span> 推荐 </span>
          </TabItem>
        </NavLink>
        <NavLink to='/singers' activeClassName='selected'>
          <TabItem>
            <span> 歌手 </span>
          </TabItem>
        </NavLink>
        <NavLink to='/rank' activeClassName='selected'>
          <TabItem>
            <span> 排行榜 </span>
          </TabItem>
        </NavLink>
      </Tab>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default React.memo(Home);
