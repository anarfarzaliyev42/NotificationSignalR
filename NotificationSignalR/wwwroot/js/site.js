$(document).ready(function () {
    var connection = new signalR.HubConnectionBuilder().withUrl("/StudentHub").build();
    connection.start();
    
    $(document).on("click", "#send", function () {
        var message = $("#message").val();


        connection.invoke("SendMessage", message).catch(function (err) {
            return console.error(err.toString());
        });
    })
    var notfMes;
    connection.on("ReceiveMessage", function (message) {

        //var list = $("#messageDropdown");
        //var li = $(`<li>${message}</li>`)
        //$(li).appendTo(list);
        notfMes = message;

    })
    $(document).on("click", "#badgeButton", function () {
        $("#messageBox").notify(`${notfMes}`);
    })


})

