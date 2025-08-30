function bwbeforeprint(){
    document.querySelectorAll('section').forEach(
        (e) => e.classList.add('bw')
    );
}

function bwafterprint(){
    document.querySelectorAll('section').forEach(
        (e) => e.classList.remove('bw')
    );
}

function bwprint(){
    window.setTimeout(() => {
      window.addEventListener("beforeprint", bwbeforeprint);
      window.addEventListener("afterprint", bwafterprint);
      window.addEventListener("afterprint", () => {
          // window.removeEventListener("beforeprint", bwbeforeprint);
          // window.removeEventListener("afterprint", bwafterprint);
          // window.removeEventListener("afterprint", this);
          history.go(0);
      });
      
      window.print();
    }, 200); // Timeout to let the CSS class changes for print render
}

function restyleIndexEntry(name){
    name = name.replace(/ (d6|d8|d10|One Free)/, "");
    const parts = name.trim().split(" ");
    if (parts.length < 2){
        return name;
    }

    const last = parts[parts.length-1];
    const first = parts.slice(0, parts.length-1).join(" ");
    return `${last}, ${first}`;
}

function restyleIndexEntries(records){
  for (const {anchor} of records){
    anchor.innerText = restyleIndexEntry(anchor.innerText);
  }
}

function perfectReorderPages(){
  let pages = document.querySelectorAll("body > svg");
  if (pages.length % 4 !== 0){
    for (let i=0; i < 4 - pages.length % 4; ++i){
      document.body.appendChild(pages[0].cloneNode());
    }
  }

  pages = document.querySelectorAll("body > svg");
  const pageOrder = [];
  for (let i=0; pageOrder.length < pages.length; i += 2){
    pageOrder.push(i);
    pageOrder.push(i + pages.length/2);
    pageOrder.push(i + pages.length/2 + 1);
    pageOrder.push(i + 1);
  }

  const sideClass = ["print-right", "print-right", "print-left", "print-left"];
  for (let i=0; i < pageOrder.length; ++i){
    const page = pages[pageOrder[i]];
    page.classList.add(sideClass[i % sideClass.length]);
    document.body.appendChild(page);
  }
}

function saddleReorderPages(){
  let pages = document.querySelectorAll("body > svg");
  if (pages.length % 4 !== 0){
    for (let i=0; i < 4 - pages.length % 4; ++i){
      document.body.appendChild(pages[0].cloneNode());
    }
  }

  pages = document.querySelectorAll("body > svg");
  const pageOrder = [];
  for (let i=0; pageOrder.length < pages.length; i += 2){
    pageOrder.push(pages.length - 1 - i);
    pageOrder.push(i);
    pageOrder.push(i + 1);
    pageOrder.push(pages.length - 1 - i - 1);
  }

  const sideClass = ["print-left", "print-right"];
  for (let i=0; i < pageOrder.length; ++i){
    const page = pages[pageOrder[i]];
    page.classList.add(sideClass[i % sideClass.length]);
    document.body.appendChild(page);
  }
}

window.addEventListener("load", function(){
    let toc = document.querySelector(".toc"),
        tablist = document.querySelector(".tablist"),
        abix = document.querySelector(".abix");
  
    MarpShims.autoScale();
    MarpShims.withTOC(toc, "h2,h3", (toc_records) => {
      MarpShims.breakPages();
    });
      
    MarpShims.withTOC(tablist, "h4", (tab_records) => {
      MarpShims.breakPages();
    });
  
    MarpShims.withTOC(abix, ".ability th", (ab_records) => {
      restyleIndexEntries(ab_records);
      MarpShims.breakPages();
    });

    // grow/shrink svgs automatically
    // but need to de-shrink manually during printing back to post-grow size
    // and then back again to final size after printing
    MarpShims.growPages();
    // const svgs = document.querySelectorAll("svg[data-marpit-svg]");
    // for (const svg of svgs){
    //   (function(svg){
    //     const page = svg.children[0].children[0];
    //     const fo = page.closest("foreignObject");
    //     const viewBox = svg.getAttribute("viewBox");
    //     const height = fo.getAttribute("height");
    //     const style_height = svg.style.height;
    //     window.addEventListener("beforeprint", () => {
    //       svg.setAttribute("viewBox", viewBox);
    //       fo.setAttribute("height", height);
    //       svg.style.height = style_height;
    //       page.style.height = style_height;
    //     });
    //   })(svg);
    // }
    // MarpShims.shrinkPages();
    // for (const svg of svgs){
    //   (function(svg){
    //     const page = svg.children[0].children[0];
    //     const fo = page.closest("foreignObject");
    //     const viewBox = svg.getAttribute("viewBox");
    //     const height = fo.getAttribute("height");
    //     const style_height = svg.style.height;
    //     window.addEventListener("afterprint", () => {
    //       svg.setAttribute("viewBox", viewBox);
    //       fo.setAttribute("height", height);
    //       svg.style.height = style_height;
    //       page.style.height = style_height;
    //     });
    //   })(svg);
    // }
  
    MarpShims.autoTheme();
    MarpShims.anchorHeadings("h1,h2,h3,h4,.ability th");

    MarpShims.scrollToHash();
});
