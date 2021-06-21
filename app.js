window.onload = () => {
    //Getting the inline element 'span' by using DOM functions and properties.
    let span = document.getElementById('ourInlineElem');


    //case-001 js
    let case001 = document.getElementById("case-001");
    let resCase001 = document.getElementById("result-001");
    resCase001.innerHTML = case001.offsetHeight;



    //case-002 js
    let case002 = document.getElementById("case-002");
    let resCase002 = document.getElementById("result-002");
    resCase002.innerHTML = case002.clientHeight;

}