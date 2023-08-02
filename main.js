import './global.css';
import { Row_Constructor as Row, Column_Constructor as Col } from "./src/WebComponents/Grid.js";

const [
  DIMENSION, SHADOWHOST
] = [
  12, "shadow-host"
];[...new Array(DIMENSION).fill(0)].forEach((_, j)=>{

  new Row({id: `${Row.namespace}${1+j}`, shadowHost: `#${SHADOWHOST}`}) && [...new Array(DIMENSION).fill(0)].forEach((_, k)=>{
    const eachRow = document.getElementById(SHADOWHOST).children;
    /* DEV_NOTE # shadow root property is not mandatory, although it indicates open shadow dom */
    eachRow[j].shadowRoot.appendChild(
        new Col({id: `${Row.namespace}${1+j}:${Col.namespace}${1+k}`})
      )
  });

})

