const [
    mode, DIV, UNDERSCORE, NONBRHYPHEN
] = [
    'open', 'div', '\u{005F}', '\u{002D}'
];

class Row_Constructor extends HTMLDivElement{
    static namespace = "Row_";
    constructor(props){
        super()
        ;
        this.attachShadow({mode});
        this.id = props?.id;
        ;
        const shadowHost = document.querySelector( (props?.shadowHost || document.body.tagName) )
        shadowHost.style.display = "grid";
        if (props.dimConfig.dimension){
            shadowHost.style.gridTemplateRows = `repeat(12, minmax(0, 1fr))`;
        }
        else {
            shadowHost.style.gridTemplateRows = `repeat(1, minmax(0, 1fr))`;
        }
        shadowHost.style.gridTemplateColumns = `repeat(12, minmax(0, 1fr))`;
        ;
        shadowHost.appendChild(this);
    }
}

class Column_Constructor extends HTMLDivElement{
    static namespace = 'Column_';
    constructor(props){
        super()
        ;
        this.attachShadow({mode}).innerHTML = Math.random();
        this.id = props?.id;
        this.style.border = "1px solid black";
        this.style.padding = "16px";
    }
}

if (Row_Constructor && Column_Constructor){
    customElements.define(
        Row_Constructor.name.toLowerCase().replace(RegExp(UNDERSCORE).source, RegExp(NONBRHYPHEN).source)
        ,
        Row_Constructor,
        {extends: DIV}
    );
    customElements.define(
        Column_Constructor.name.toLowerCase().replace(RegExp(UNDERSCORE).source, RegExp(NONBRHYPHEN).source)
        ,
        Column_Constructor,
        {extends: DIV}
    )
}

export {
    Row_Constructor as Row, Column_Constructor as Column
}