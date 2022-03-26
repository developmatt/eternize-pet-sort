const sortButton = document.querySelector("#sort-button");
if (sortButton)
    sortButton.addEventListener("click", function() {
        goToStep2();
        setTimeout(shuffleNumbersInPage, 3000);
    });

function goToStep2() {
    function hideStep1() {
        const step1 = document.querySelector(".step-1");
        step1.classList.add("hidden");
        setTimeout(function() {
            step1.style.display = "none";
        }, 1000);
    }

    function showLoading() {
        const loading = document.querySelector(".loading");
        loading.style.display = "block";
    }

    function hideLoading() {
        const loading = document.querySelector(".loading");
        loading.style.display = "none";
    }

    function showStep2() {
        document.querySelector(".step-2").style.display = "block";
    }

    function hideStep2() {
        const step = document.querySelector(".step-2");
        step.classList.add("hidden");
        setTimeout(function() {
            step.style.display = "none";
        }, 1000);
    }

    function showStep3() {
        const step = document.querySelector(".step-3");
        const comment = getRandomItemFromArray(database);

        const pill = document.createElement("span");
        pill.classList.add("congratulations-pill");
        pill.innerText = comment.author;

        const content = document.createElement("span");
        content.classList.add("congratulations-content");
        content.innerText = comment.content;

        document.querySelector("#victory").insertAdjacentElement("beforeend", pill);
        document
            .querySelector("#victory")
            .insertAdjacentElement("beforeend", content);
        step.style.visibility = "visible";
    }

    hideStep1();
    setTimeout(showLoading, 1000);
    setTimeout(hideLoading, 3000);
    setTimeout(showStep2, 3000);
    setTimeout(hideStep2, 10000);
    setTimeout(showStep3, 11500);
}

function shuffleNumbersInPage() {
    const target = document.querySelector("#sort");
    const shuffleInterval = setInterval(function() {
        const comment = getRandomItemFromArray(database);
        target.innerText = comment.author;
    }, 100);

    setTimeout(function() {
        clearInterval(shuffleInterval);
    }, 10000);
}

function getRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}