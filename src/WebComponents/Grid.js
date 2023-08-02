const [
    mode, DIV, UNDERSCORE, NONBRHYPHEN
] = [
    'open', 'div', '\u{005F}', '\u{002D}'
];

class Row_Constructor extends HTMLDivElement{
    constructor(){
        super()
        this.attachShadow({mode})
    }
}

class Column_Constructor extends HTMLDivElement{
    constructor(){
        super()
        this.attachShadow({mode})
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