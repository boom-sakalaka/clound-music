/*
 * @Author: GZH
 * @Date: 2021-08-09 16:06:34
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-09 16:06:34
 * @FilePath: \clound-music\src\baseUI\header\index.js
 * @Description:
 */
import React from "react";
import styled from "styled-components";
import style from "../../assets/global-style";
import PropTypes from "prop-types";

const HeaderContainer = styled.div`
  position: fixed;
  padding: 5px 10px;
  padding-top: 0;
  height: 40px;
  width: 100%;
  z-index: 100;
  display: flex;
  line-height: 40px;
  color: ${style["font-color-light"]};
  .back {
    margin-right: 5px;
    font-size: 20px;
    width: 20px;
  }
  > h1 {
    font-size: ${style["font-size-l"]};
    font-weight: 700;
  }
`;
// 处理函数组件拿不到 ref 的问题，所以用 forwardRef
const Header = React.forwardRef((props, ref) => {
  const { handleClick, title } = props;
  return (
    <HeaderContainer ref={ref}>
      <i className="iconfont back" onClick={handleClick}>
        &#xe655;
      </i>
      <h1>{title}</h1>
    </HeaderContainer>
  );
});

Header.defaultProps = {
  handleClick: () => {},
  title: "标题",
};

Header.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
};

export default React.memo(Header);
