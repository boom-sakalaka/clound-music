/*
 * @Author: GZH
 * @Date: 2021-08-09 13:41:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-09 13:49:18
 * @FilePath: \clound-music\src\application\Singers\data.js
 * @Description:
 */

import React, { createContext, useReducer } from "react";
import { fromJS } from "immutable";

export const CategoryDataContext = createContext();

// 相当于之前的 constants

// 相当于之前的 constants
export const CHANGE_CATEGORY = "singers/CHANGE_CATEGORY";
export const CHANGE_ALPHA = "singers/CHANGE_ALPHA";

//reducer 纯函数
const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return state.set("category", action.data);
    case CHANGE_ALPHA:
      return state.set("alpha", action.data);
    default:
      return state;
  }
};

// Provider
export const Data = (props) => {
  const [data, dispatch] = useReducer(
    reducer,
    fromJS({
      category: "",
      alpha: "",
    })
  );
  return (
    <CategoryDataContext.Provider value={{ data, dispatch }}>
      {props.children}
    </CategoryDataContext.Provider>
  );
};
