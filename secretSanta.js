const submitButton = document.querySelector(".submitNames");
const container = document.querySelector("#container");

const matchmakeNames = () => {
    var senders = document.querySelector('#inputNames').value.split(/\r?\n/);

    var currentIndex = senders.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = senders[currentIndex];
        senders[currentIndex] = senders[randomIndex];
        senders[randomIndex] = temporaryValue;
    }

    var sendersAndReceivers = [];

    for (var i = 0; i+1 < senders.length; i++) {
        sendersAndReceivers.push([senders[i], senders[i+1]]);
    }
    sendersAndReceivers.push([senders[senders.length - 1], senders[0]]);


    // Create table of Senders & Receivers, and replace the input forms with this table.

    var tableData = "<table><tr><th>Sender</th><th>Receiver</th></tr>";

    sendersAndReceivers.forEach(e => {
        tableData += "<tr><td>" + e[0] + "</td><td>" + e[1] + "</td></tr>"
    });

    tableData += "</table>"
    container.innerHTML = tableData;
}

submitButton.addEventListener("click", matchmakeNames);