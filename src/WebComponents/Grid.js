const [
    mode, DIV, UNDERSCORE, NONBRHYPHEN
] = [
    'open', 'div', '\u{005F}', '\u{002D}'
];

class Row_Constructor extends HTMLDivElement{
    static namespace = 'Row_';
    constructor(props){
        super()
        this.attachShadow({mode});
        this.id = props?.id;
        this.style.cssText = "border: 2px solid black; padding: 16px";
        document.querySelector( (props?.shadowHost || document.body.tagName) ).appendChild(this);
    }
}

class Column_Constructor extends HTMLDivElement{
    static namespace = 'Column_';
    constructor(props){
        super()
        this.attachShadow({mode})
        this.id = props?.id;
        this.style.cssText = "border: 1px dashed red; padding: 8px";
        document.body.appendChild(this)
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
    Row_Constructor, Column_Constructor
}