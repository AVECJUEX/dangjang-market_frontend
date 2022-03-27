import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoPath from "../IMG/logo.png";
import Modal from "./Modal/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { authService } from "../firebase";
import Input from "./Input";
import Label from "./Label";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #ffff;
  width: 100%;
  height: 62px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 0px 0px;
  z-index: 10;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
const MainButton = styled.button`
.mainButton {
 
    
}
`;

const HeaderBox = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 100%;

  @media ${(props) => props.theme.tablet} {
    width: 90%;
    margin: 0 auto;
  }

  .Category {
    position: relative;
    height: 100%;
  }

  ul {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul :first-child {
    margin-left: 0px;
  }

  li {
    margin-left: 24px;
    list-style: none;
    white-space: nowrap;
    color: #292a32;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -0.4px;
    line-height: 30px;
    //color : #6667AB;
  }

  .right-content {
    display: flex;
    position: absolute;
    justify-content: flex-end;
    width: 50%;
    right: 0px;
  }

  button {
    cursor: pointer;
    background: transparent;
    color: rgb(116, 116, 123);
    font-size: 14px;
    min-width: 78px;
    width: auto;
    padding: 0px;
    border: 0px;

    
  }
  

  button.mainButton {
    cursor: pointer;
    display: inline-block;
    font-weight: 900;
    line-height: 1.5;
    color: #6667AB;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 3px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    border-color :#6667AB;
    transition: color .15s 
      ease-in-out,background-color .15s 
      ease-in-out,border-color .15s 
      ease-in-out,box-shadow .15s 
      ease-in-out;
    
  }

  button.sign-up {
    text-align: center;
    border-radius: 6px;
    font-weight: 500;
    line-height: 20px;
    box-sizing: border-box;
    width: auto;
    min-width: 86px;
    height: 32px;
    color: rgb(53, 53, 53);
    padding: 5px 14px 6px;
    border: 1px solid rgba(116, 116, 123, 0.5);
  
  }

  img {
    object-fit: cover;
    width: 151px;
    height: 37px;
  }
  li,label{
    backgroundColor :#E6E6FA;
  }
`;
function Header({ history }) {
  const { login, users, inputs } = useSelector((state) => ({
    users: state.reducer.users,
    login: state.reducer.login,
    inputs: state.reducer.inputs,
    movies: state.reducer.movies,
  }));

  const dispatch = useDispatch();

  const handleOpenModal = (modal) => {
    dispatch({
      type: "OPEN_MODAL",
      modal,
    });
  };

  const onClickLogOut = () => {
    authService.signOut();
    alert("logout합니다.");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <HeaderContainer>
      <HeaderBox>
        <div className="Category">
          <ul>
            <li>
              <Link to="/">
                <img src={LogoPath} alt=""></img>
              </Link>
            </li>
            <li>마켓</li>
            <li>왁자지껄</li>
            <li>채팅</li>
            <div className="right-content">
              <ul>
                <li>
                <Label width="300px" padding="12px 15px 11px 46px">
                    <Input
                      history={history}
                      name="search"
                      value={inputs.search}
                      placeholder="물품을 검색해보세요."
                    />
                  </Label>
                </li>
                <li>
               
                  

                  <button className="mainButton"
                    onClick={
                      login
                      ? () => alert("업데이트예정입니다")
                      : () => handleOpenModal(true)
                    }
                    >
                    {login ? `${users.user.userName}님 ` : "로그인"}
                  </button>
                      
                   
                  <Modal />
                </li>
                <li>
                  {login ? (
                   
                    <button className="mainButton" onClick={onClickLogOut} class="btn btn-outline-primary">로그아웃</button>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </HeaderBox>
    </HeaderContainer>
  );
}

export default Header;
