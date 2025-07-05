import { CSSCodeBlock } from "./ui-elements/CSSCodeBlock.js";


function addMarginAutoCodeBlock(){
    const exmp1 = new CSSCodeBlock();
    const exmp1Div = document.getElementById("code-exmp1");
    if (exmp1Div) {
        exmp1Div.appendChild(exmp1);
        const htmlString = `
<div class="centered-div">
    .element
</div>`;
        const cssString = 
`.centered-div {
    width: 50%;
    margin: 0 auto;
    background-color: white;
    padding: 20px;
    text-align: center;
    border: 2px solid #525F7A;
}  
`;
        exmp1.setHTMLAndCSSCode(htmlString, cssString);
        exmp1.append(exmp1);
    }
}

addMarginAutoCodeBlock();