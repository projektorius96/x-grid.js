import './global.css';
import { Row, Column as Col } from "./src/WebComponents/Grid.js";

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
          (new Col({id: `${Row.namespace}${1+k}:${Col.namespace}${1+j}`, shadowHostInner: Row.custom_element_namespace, idx: j}))
      );
    });

})

/* +++ DATA VALUE UPDATE EXAMPLE [SEE BELOW] +++ */
/* 
document.querySelector("#Row_1").shadowRoot.firstChild.shadowRoot.innerHTML = 123; // or even better for more fine-grained control as follows:
document.getElementById("Row_1").shadowRoot.getElementById("Row_1:Column_1")
*/

