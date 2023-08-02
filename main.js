import './global.css';
import { Row_Constructor as Row, Column_Constructor as Col } from "./src/WebComponents/Grid.js";

console.log("#describe('construct Shadow DOM from exported classes as follows:')@PASSED"
  ,
  new Row()
  , 
  new Col()
)

