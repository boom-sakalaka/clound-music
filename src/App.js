/*
 * @Author: GZH
 * @Date: 2021-08-06 10:22:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-06 10:58:54
 * @FilePath: \cloud-music\src\App.js
 * @Description: https://juejin.cn/book/6844733816460804104
 */
import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import { renderRoutes } from 'react-router-config'; //renderRoutes 读取路由配置转化为 Route 标签
import routes from './routes/index.js';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
