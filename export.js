const jsdom = require("jsdom");
const fs = require("node:fs");

const ex = {
    "books": {},
    "options": {}
};

const sources = [
    "public/index.html",
    "public/endeavored.html"
]

for (const source of sources){
    const { window } = new jsdom.JSDOM(
        fs.readFileSync(source, {"encoding": "utf-8"}),
        {"url": "https://snotskie.com/ttrpg/"}
    );

    const book_title = window.document.querySelector("h1").textContent.trim();
    const book_guid = book_title.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
    ex.books[book_guid] = {
        "title": book_title,
        "pages": {}
    }

    for (const page of window.document.querySelectorAll("svg > foreignObject > section")){
        const page_title = page.querySelector("h3")?.textContent.trim();
        if (page_title && ["Contents", "About", "At a Glance", "Specialization Options", "Tables", "Options"].indexOf(page_title) < 0){
            const page_html = page.innerHTML;
            const page_guid = page_title.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
            ex.books[book_guid].pages[page_guid] = {
                "title": page_title,
                "html": page_html
            };
        }
    }

    for (const opt of window.document.querySelectorAll("section.ability table")){
        const name = opt.querySelector("thead").textContent.trim();
        const effect = opt.querySelector("tbody").textContent.trim();
        const guid = name.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
        ex.options[guid] = {
            "name": name,
            "effect": effect
        };
    }
}

fs.writeFileSync("public/export.json", JSON.stringify(ex));
