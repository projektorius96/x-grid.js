import './global.css';
import { Row_Constructor as Row, Column_Constructor as Col } from "./src/WebComponents/Grid.js";

const [
  [UNISCALAR, UNIDIMENSIONAL], [MULTISCALAR, MULTIDIMENSIONAL], SHADOWHOST
] = [
  [12, false], [(12*12), true], "shadow-host"
];

matrix_label:; 
/* DEV_NOTE # UNISCALAR has to go hand in hand with UNIDIMENSIONAL, whilst MULTISCALAR hand in hand with MULTIDIMENSIONA */
[...new Array(/* UNISCALAR ||  */MULTISCALAR).fill(0)].forEach((_, j)=>{

  new Row({id: `${Row.namespace}${1+j}`, shadowHost: `#${SHADOWHOST}`, dimConfig: {scalar: MULTISCALAR/*  || MULTISCALAR */, dimension: /* UNIDIMENSIONAL ||  */MULTIDIMENSIONAL}}) && [...new Array(/* UNISCALAR || */ MULTISCALAR).fill(0)].forEach((_, k)=>{
    const eachRow = document.getElementById(SHADOWHOST).children;
    /* DEV_NOTE # shadow root property is not mandatory, although it indicates open shadow dom */
    eachRow[j].shadowRoot.appendChild(
        new Col({id: `${Row.namespace}${1+j}:${Col.namespace}${1+k}`})
      )
  });

})

