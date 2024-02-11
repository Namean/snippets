

// clickStreamObject

stringHash(document.title).slice(5, stringHash(document.title).length);

let clickStreamObject = {
    title: document.title,
    createdAt: new Date().valueOf(),
    url: window.location.href,

    toString: function() {
        
    },

    toMarkdown: function() {
        console.log(`[${this.title}](${this.url})`)
    }
}

const data = {
    url: "https://www.udemy.com/course/math-with-python/learn/lecture/16460386#overview"
}