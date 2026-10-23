// --- ЗАВДАННЯ 1: ВАЛІДАЦІЯ ФОРМИ ---
function validateForm(event) {
    event.preventDefault();

    let fnm = document.getElementById("fnm");
    let variant = document.getElementById("variant");
    let group = document.getElementById("group");
    let idcard = document.getElementById("idcard");
    let email = document.getElementById("email");

    let isValid = true;

    // Регулярні вирази
    let regexFnm = /^[А-ЯІЄҐа-яієґA-Za-z]+\s[А-ЯІЄҐа-яієґA-Za-z]\.[А-ЯІЄҐа-яієґA-Za-z]\.$/; // ТТТТТТ Т.Т.
    let regexVariant = /^\d{2}$/; // ЧЧ
    let regexGroup = /^[А-ЯІЄҐA-Za-z]{2}-\d{2}$/; // ТТ-ЧЧ
    let regexIdcard = /^[А-ЯІЄҐA-Za-z]{2}\s№\d{6}$/; // ТТ №ЧЧЧЧЧЧ
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Пошта

    // Функція перевірки
    function checkField(input, regex) {
        if (!regex.test(input.value)) {
            input.classList.add("error");
            isValid = false;
        } else {
            input.classList.remove("error");
        }
    }

    checkField(fnm, regexFnm);
    checkField(variant, regexVariant);
    checkField(group, regexGroup);
    checkField(idcard, regexIdcard);
    checkField(email, regexEmail);

    if (!isValid) {
        alert("Помилка! Перевірте правильність введених даних у виділених полях.");
        return false;
    }

    // Вивід даних, якщо все правильно
    document.getElementById("resFnm").innerText = "ПІБ: " + fnm.value;
    document.getElementById("resVariant").innerText = "Варіант: " + variant.value;
    document.getElementById("resGroup").innerText = "Група: " + group.value;
    document.getElementById("resIdcard").innerText = "ID-card: " + idcard.value;
    document.getElementById("resEmail").innerText = "E-Mail: " + email.value;
    
    document.getElementById("outputData").style.display = "block";
}

// --- ЗАВДАННЯ 2: ТАБЛИЦЯ 6Х6 ---
document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("interactiveTable");
    const colorPicker = document.getElementById("colorPicker");
    let counter = 1;
    let targetCellNumber = 15; // Клітинка твого варіанта

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            let cell = document.createElement("td");
            cell.innerText = counter;

            // Логіка для клітинки варіанта (№15)
            if (counter === targetCellNumber) {
                // Зміна кольору на випадковий при наведенні
                cell.addEventListener("mouseover", () => {
                    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                    cell.style.backgroundColor = randomColor;
                });

                // Зміна кольору на обраний з палітри при кліку
                cell.addEventListener("click", () => {
                    cell.style.backgroundColor = colorPicker.value;
                });

                // Зміна кольору ВСІХ клітинок ОКРІМ обраної при подвійному кліку (Варіант 5)
                cell.addEventListener("dblclick", () => {
                    let allCells = document.querySelectorAll("#interactiveTable td");
                    allCells.forEach(c => {
                        if (c !== cell) {
                            c.style.backgroundColor = colorPicker.value;
                        }
                    });
                });
            }
            row.appendChild(cell);
            counter++;
        }
        table.appendChild(row);
    }
});