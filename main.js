import './global.css';
import { Row_Constructor as Row, Column_Constructor as Col } from "./src/WebComponents/Grid.js";

const [
  [UNISCALAR, UNIDIMENSIONAL], [MULTISCALAR, MULTIDIMENSIONAL], SHADOWHOST
] = [
  [12, false], [(12*12), true], "shadow-host"
];

/* DEV_NOTE (IMPORTANT) # UNISCALAR has to go hand in hand with UNIDIMENSIONAL, whilst MULTISCALAR hand in hand with MULTIDIMENSIONAL in array_templateN and dimConfig mutually exclusively */
array_template1:
[...new Array(/* UNISCALAR ||  */ MULTISCALAR).fill(0)].forEach((_, j)=>{

    array_template2:
    [...new Array(/* UNISCALAR || */ MULTISCALAR)
    .fill(
          new Row({id: `${Row.namespace}${1+j}`, shadowHost: `#${SHADOWHOST}`, dimConfig: {scalar: MULTISCALAR /*  || MULTISCALAR */, dimension: /* UNIDIMENSIONAL ||  */ MULTIDIMENSIONAL}})
      )
    ]
    .forEach((_, k)=>{
      const eachRow = document.getElementById(SHADOWHOST).children;
      /* DEV_NOTE # shadow root property is not mandatory, although it indicates open shadow dom */
      eachRow[j].shadowRoot.appendChild(
          new Col({id: `${Row.namespace}${1+k}:${Col.namespace}${1+j}`})
        )
    });

})

