import React from "react"
import { useState } from "react";
import Filho from "./Filho";

function Pai(props) {

let x = 15;
let y = 200;

return (
    <>
        <Filho a={x} b={y}/>
        <Filho a={x + 100} b={y + 200}/>
    </>
    )
}

export default Pai