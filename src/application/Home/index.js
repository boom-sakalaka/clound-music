/*
 * @Author: GZH
 * @Date: 2021-08-06 10:46:15
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-06 10:53:41
 * @FilePath: \cloud-music\src\application\Home\index.js
 * @Description:
 */
import React from 'react';
import { renderRoutes } from 'react-router-config';

function Home(props) {
  const { route } = props;
  return (
    <div>
      <div>Home</div>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default React.memo(Home);
