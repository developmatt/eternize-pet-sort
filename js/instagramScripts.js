function getAllAuthors() {
    let authors = [];
    const commentBoxes = document.querySelectorAll(".Mr508");
    commentBoxes.forEach(function(commentBox, index) {
        const author = getCommentAuthor(commentBox);
        const content = getCommentContent(commentBox);
        if (author)
            authors.push({
                author: author,
                content: content,
            });
    });
    return authors;
}

function getCommentAuthor(commentBox) {
    const author = commentBox.querySelector("h3");
    return author.innerText;
}

function getCommentContent(commentBox) {
    const content = commentBox.querySelector(".MMzan");
    return content.innerText;
}

function activeRoutineToOpenComments() {
    const openMoreCommentsInterval = setInterval(function() {
        try {
            const commentBox = document.querySelector(".XQXOT");
            if (!commentBox) throw new Error("Comment box not found");
            const moreCommentsButtonContainer = commentBox.lastChild;
            const button = moreCommentsButtonContainer.querySelector("button");
            if (!button) throw new Error("Button not found");

            button.click();
        } catch (err) {
            console.log(err.message);
            clearInterval(openMoreCommentsInterval);
        }
    }, 3000);
}