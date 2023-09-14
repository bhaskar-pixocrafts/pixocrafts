
var accordionButton = document.querySelectorAll('.accordion-button');

accordionButton.forEach(function (el) {
    

    window.addEventListener("load", function () {
        let splitWords = function (selector) {
        let elements = document.querySelectorAll(selector);
    
        elements.forEach(function (el) {
            el.dataset.splitText = el.textContent;
            el.innerHTML = el.textContent
                .split(/\s/)
                .map(function (word) {
                    return word
                    .split("-")
                    .map(function (word) {
                        return '<span class="word">' + word + "</span>";
                    })
                    .join('<span class="hyphen">-</span>');
                })
             .join('<span class="whitespace"> </span>');
            });
        };

    
        let splitLines = function (selector) {
            var elements = document.querySelectorAll(selector);
        
            splitWords(selector);
        
            elements.forEach(function (el) {
                var lines = getLines(el);
        
                var wrappedLines = "";
                lines.forEach(function (wordsArr) {
                    wrappedLines += '<span class="line"><span class="words">';
                    wordsArr.forEach(function (word) {
                        wrappedLines += word.outerHTML;
                    });
                    wrappedLines += "</span></span>";
                });
                el.innerHTML = wrappedLines;
            });
        };
    
        
        let getLines = function (el) {
            var lines = [];
            var line;
            var words = el.querySelectorAll("span");
            var lastTop;
            for (var i = 0; i < words.length; i++) {
                var word = words[i];
                if (word.offsetTop != lastTop) {
                    // Don't start with whitespace
                    if (!word.classList.contains("whitespace")) {
                        lastTop = word.offsetTop;
            
                        line = [];
                        lines.push(line);
                    }
                }
                line.push(word);
            }
            return lines;
        };
    
        splitLines(".reveal-text");

    });
  

})


for (const acbtn of accordionButton) {

    acbtn.addEventListener("click" , function () {
        let splitWords = function (selector) {
        let elements = document.querySelectorAll(selector);
    
        elements.forEach(function (el) {
            el.dataset.splitText = el.textContent;
            el.innerHTML = el.textContent
                .split(/\s/)
                .map(function (word) {
                    return word
                    .split("-")
                    .map(function (word) {
                        return '<span class="word">' + word + "</span>";
                    })
                    .join('<span class="hyphen">-</span>');
                })
                .join('<span class="whitespace"> </span>');
            });
        };

    
        let splitLines = function (selector) {
            var elements = document.querySelectorAll(selector);
        
            splitWords(selector);
        
            elements.forEach(function (el) {
                var lines = getLines(el);
        
                var wrappedLines = "";
                lines.forEach(function (wordsArr) {
                    wrappedLines += '<span class="line"><span class="words">';
                    wordsArr.forEach(function (word) {
                        wrappedLines += word.outerHTML;
                    });
                    wrappedLines += "</span></span>";
                });
                el.innerHTML = wrappedLines;
            });
        };
    
        
        let getLines = function (el) {
            var lines = [];
            var line;
            var words = el.querySelectorAll("span");
            var lastTop;
            for (var i = 0; i < words.length; i++) {
                var word = words[i];
                if (word.offsetTop != lastTop) {
                    // Don't start with whitespace
                    if (!word.classList.contains("whitespace")) {
                        lastTop = word.offsetTop;
            
                        line = [];
                        lines.push(line);
                    }
                }
                line.push(word);
            }
            return lines;
        };
    
        splitLines(".reveal-text");
    })
}
