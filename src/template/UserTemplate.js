import React, { Fragment } from "react";
import { Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { ReactComponent as Menua } from "../assets/svg/menua.svg";
import { TOGGLE_MENU } from "../redux/const/const";
import Header2 from "../components/Header2";

export default function UserTemplate(props) {
  const { Component, ...restRoute } = props;

  const dispatch = useDispatch();
  const { toggleMenu } = useSelector((state) => state.MenuReducer);

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            <div className="lg:flex min-h-screen bg-gray-600 ">
              <div className="lg:flex w-full">
                <div
                  className="bg-yellow-400 lg:hidden right-0 fixed rounded-full z-20"
                  style={{ width: "50px", height: "50px" }}
                >
                  <Menua
                    fill="#F3F4F6"
                    className="fixed lg:hidden right-0 mt-2.5 mr-2.5"
                    width={30}
                    height={30}
                    onClick={() => {
                      dispatch({
                        type: TOGGLE_MENU,
                        booleanMenu: !toggleMenu
                      });
                    }}
                  ></Menua>
                </div>
                <Menu></Menu>
                <div className="hidden lg:block lg:w-1/3">
                  <Header></Header>
                </div>
                {toggleMenu ? <Header2></Header2> : ""}
                <Component {...propsRoute}></Component>
              </div>
            </div>
          </Fragment>
        );
      }}
    ></Route>
  );
}
