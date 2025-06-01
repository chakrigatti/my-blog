import { CSSCodeBlock } from "./ui-elements/CSSCodeBlock.js";


function addMarginAutoCodeBlock(){
    const exmp1 = new CSSCodeBlock();
    const exmp1Div = document.getElementById("code-exmp1");
    if (exmp1Div) {
        exmp1Div.appendChild(exmp1);
        exmp1.setHTMLCode(
`<div class="centered-div">
    Centered Div
</div>`);
        exmp1.setCSSCode(
`.centered-div {
    width: 50%;
    margin: 0 auto;
    background-color: lightblue;
    padding: 20px;
    text-align: center;
    border: 1px solid #ccc;
}  
`
);
        exmp1.setCodeOutput(`<div class="centered-div">Centered Div</div>`);
        exmp1.append(exmp1);
    }
}

addMarginAutoCodeBlock();