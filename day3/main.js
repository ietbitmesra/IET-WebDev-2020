console.log("connected")
let counter = 1;
$("#fibForm").on("submit", function(e) {
    e.preventDefault();

    console.log("Form submitted");

    const val = $("#fibNumber").val();

    $.ajax({
        method: "POST",
        url: "http://localhost:3000/fib/" + val,
        success: function(res) {
            console.log(res);
            $("#dataTable").append(`
            <tr>
                <td>${counter}</td>
                <td>${val}</td>
                <td>${res.value}</td>
            </tr>
            `);
            counter++;

            $("#fibNumber").val("");
        },
        error: function(err) {
            alert(err.statusText);
        }
    });
});