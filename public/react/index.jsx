import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';


class App extends React.Component{

render(){
  return(
    <h1> Welcome Abi </h1>
  )
}

}
ReactDom.render(<App />,document.getElementById('app'));
