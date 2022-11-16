import React from "react";
import { Container } from "react-bootstrap";
import "./Mypage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import mainLogo from "./images/logo.png";
import { Link } from "react-router-dom";

const Mypage = () => {
  return (
    <div className="containers">
      <Container>
        <div className="mainheader">
          <img className="mainLogo" src={mainLogo} />
          <div className="mainHeaderButtons">
            <button>회원가입</button>
            <button>로그인</button>
          </div>
        </div>
        <div className="MainScreen">
          <div className="Mypagebox">마이페이지</div>
          <div>최근 검사 결과</div>
          <div className="SebScreen"></div>
          <div></div>
        </div>
        <div className="Homepage-Nav">
          <Link to="/">홈페이지</Link>
          <Link to="/testgame">테스트</Link>
          <Link to="/mypage">마이페이지</Link>
        </div>
      </Container>
    </div>
  );
};

export default Mypage;
