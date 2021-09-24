import React, { Fragment } from "react";
import { Route } from "react-router";
import Menu from "../components/Menu";

export default function UserTemplate(props) {
  const { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            <div className="lg:flex">
              <div className="lg:flex">
                <Menu>123</Menu>
                <div>Ngoc</div>
              </div>
              <div>
                <Component {...propsRoute}></Component>
              </div>
            </div>
          </Fragment>
        );
      }}
    ></Route>
  );
}
