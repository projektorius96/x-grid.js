const [
    mode, UNDERSCORE, NONBRHYPHEN
] = [
    'open', '\u{005F}', '\u{002D}'
];

class Row_Constructor extends HTMLElement{
    static namespace = "Row_";
    static custom_element_namespace = Row_Constructor.name.toLowerCase().replace(RegExp(UNDERSCORE).source, RegExp(NONBRHYPHEN).source)
    constructor(props){
        super()
        ;
        this.attachShadow({mode});
        this.id = props?.id;
        ;
        const shadowHost = document.querySelector( (props?.shadowHost || document.body.tagName) )
        this.style.display = "grid";
        if (props.dimConfig.dimension){
            this.style.gridTemplateRows = `repeat(12, minmax(0, 1fr))`;
        }
        else {
            this.style.gridTemplateRows = `repeat(1, minmax(0, 1fr))`;
        }
        this.style.gridTemplateColumns = `repeat(12, minmax(0, 1fr))`;
        ;
        shadowHost.appendChild(this);
    }
}

class Column_Constructor extends HTMLElement{
    static namespace = 'Column_';
    constructor(props){
        super()
        ;
        this.attachShadow({mode});
        this.id = props?.id;
        this.style.border = "1px solid black";
        this.style.padding = "16px";
        const shadowHostInner = document.querySelectorAll(props.shadowHostInner)[props.idx];
        shadowHostInner.appendChild(this)
    }
}

if (Row_Constructor && Column_Constructor){
    customElements.define(
        Row_Constructor.name.toLowerCase().replace(RegExp(UNDERSCORE).source, RegExp(NONBRHYPHEN).source)
        ,
        Row_Constructor
    );
    customElements.define(
        Column_Constructor.name.toLowerCase().replace(RegExp(UNDERSCORE).source, RegExp(NONBRHYPHEN).source)
        ,
        Column_Constructor
    )
}

export {
    Row_Constructor as Row, Column_Constructor as Column
}