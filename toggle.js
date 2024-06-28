function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    let styleSheet = document.getElementById("mainStyleSheet");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    const styleName = styleSheet.getAttribute("href"); 
    let newStyle = "";
    if(styleName == "style.css"){
        newStyle = "style2.css";
    }
    else{
        newStyle = "style.css";
    }

    // 1 (c) Determine new stylesheet file name
    const newStyleSheet = newStyle;
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    styleSheet.setAttribute("href",newStyleSheet);


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("storage",newStyleSheet )
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    const styleName = localStorage.getItem("storage");
    if(styleName == null || styleName == ""){
        return
    }


    // 2 (b) get html style element by ID
    let styleSheet = document.getElementById("mainStyleSheet");

    // 2 (c) replace href attribute of html element.
    styleSheet.setAttribute("href",styleName);
    
}


