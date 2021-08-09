/*
 * @Author: GZH
 * @Date: 2021-08-09 15:56:02
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-09 16:07:30
 * @FilePath: \clound-music\src\application\Album\index.js
 * @Description:
 */
//src/application/Album/index.js
//Album/index.js
import React, { useState } from "react";
import { Container } from "./style";
import { CSSTransition } from "react-transition-group";
import Header from "./../../baseUI/header/index";
function Album(props) {
  const [showStatus, setShowStatus] = useState(true);
  const handleBack = () => {
    setShowStatus(false);
  };
  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={props.history.goBack}
    >
      <Container>
        <Header title={"返回"} handleClick={handleBack}></Header>
      </Container>
    </CSSTransition>
  );
}

export default React.memo(Album);
