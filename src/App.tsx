import React from 'react';
import './App.scss';

import Header from "./component/header/Header";
import "./component/fontawesome/fontawesome";
import BuildingDisclaimer from "./component/static/BuildingDisclaimer";
import MyCard from "./component/static/MyCard";

export default class App extends React.Component<any, any>{
  public render() {
    return (
      <div className="App">
        <Header
          leftContent={<BuildingDisclaimer/>}
          rightContent={<MyCard/>}
        />
        <div className={'temp-disclaimer'}>
          <BuildingDisclaimer/>
        </div>
      </div>
    );
  }
}
