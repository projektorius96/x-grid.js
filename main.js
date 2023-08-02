import './global.css';
import { Row_Constructor as Row, Column_Constructor as Col } from "./src/WebComponents/Grid.js";

const [
  DIMENSION, SHADOWHOST
] = [
  12, "shadow-host"
];[...new Array(DIMENSION).fill(0)].forEach((_, j)=>{

  new Row({id: 1+j, shadowHost: `#${SHADOWHOST}`}) && [...new Array(DIMENSION).fill(0)].forEach((_, k)=>{
    document.getElementById(SHADOWHOST).children[j].appendChild(new Col({id: 1+k}))
  });

})

