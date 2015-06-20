jQuery(function($) {
    $('#ajaxGet').on('click', function() {
        $.get('/index', function(data, status) {
            alert("Data: {a:" + data.a + ', b:' + data.b + "}\nStatus: " + status);
        });
    });

    $('#ajaxPost').on('click', function() {
        $.post('/index',
        {
            name:"Donald Duck",
            city:"Duckburg"
        },
        function(data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});