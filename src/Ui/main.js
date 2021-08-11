import React from "react";
import Form from "./form";
import Showdata from "./showdata";
import Header from './header'

export default class main extends React.Component {
   render() {
      return(
         <div>
            <Header/>
            <Form/>
            <Showdata/>   
         </div>
      )
   }
}