import React, { Fragment } from "react";
import { Route } from "react-router";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function UserTemplate(props) {
  const { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            <div className="lg:flex min-h-screen bg-gray-600 ">
              <div className="lg:flex w-full">
                <Menu></Menu>
                <Header></Header>
                <Component {...propsRoute}></Component>
              </div>
            </div>
          </Fragment>
        );
      }}
    ></Route>
  );
}
