// let meigenData = {};

// meigenData = fetch("https://animechan.vercel.app/api/random")
//     .then((response) => response.json())
//     .then((quote) => console.log(quote));




function fetchUserInfo() {
    fetch(`https://animechan.vercel.app/api/random`)
        .then(response => {
            if (!response.ok) {
                console.error("エラーレスポンス", response);
            } else {
                return response.json().then(userInfo => {
                    // HTMLの組み立て
                    const view = escapeHTML
                    `

                    <h2>${userInfo.anime}</h2>
                    <div>
                    <p>${userInfo.character}</p>
                    </div>
                    <div>
                    <p>${userInfo.quote}</p>
                    </div>
                    `;
                    // HTMLの挿入
                    const result = document.getElementById("result");
                    result.innerHTML = view;
                });
            }
        }).catch(error => {
            console.error(error);
        });
}

function escapeSpecialChars(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function escapeHTML(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i - 1];
        if (typeof value === "string") {
            return result + escapeSpecialChars(value) + str;
        } else {
            return result + String(value) + str;
        }
    });
}
