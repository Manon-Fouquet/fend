function checkNonEmpty(inputText) {
    const defaultText = getDefaultText()
    console.log("::: Running checkNonEmpty :::");
    if(inputText==="" || inputText==="test") {
        alert("Running default test")
    return defaultText;
    }
    return inputText
}

function getDefaultText(){
    return "The Times is a British daily national newspaper based in London. It began in 1785 under the title The Daily Universal Register, adopting its current name on 1 January 1788. The Times and its sister paper The Sunday Times (founded in 1821) are published by Times Newspapers, since 1981 a subsidiary of News UK, in turn wholly owned by News Corp. The Times and The Sunday Times, which do not share editorial staff, were founded independently, and have only had common ownership since 1966"
    }

export {checkNonEmpty, getDefaultText}