/*
 * @Author: GZH
 * @Date: 2021-08-06 10:22:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-06 13:45:15
 * @FilePath: \cloud-music\src\App.js
 * @Description: https://juejin.cn/book/6844733816460804104
 */
import React from 'react';
import { Provider } from 'react-redux';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import { renderRoutes } from 'react-router-config'; //renderRoutes 读取路由配置转化为 Route 标签
import routes from './routes/index.js';
import store from './store/index';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
