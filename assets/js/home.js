/**
 * Display the entries in the page. 
 */
((entires) => {

    const main = document.querySelector('.post-container');
    
    entries.map((entry) => {
        main.innerHTML += `
        <div class="article">
            <h2 class="title black">${entry.title}</h2>
            <span class="date medium">${entry.date}</span>
            <img class="banner" src="${entry.banner}"/>
            <div class="content light">${entry.content}</div>
        </div>
        `;
    });

})(entries);