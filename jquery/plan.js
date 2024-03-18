$(document).ready(function () {

    $("#save").click(function () {
        alert('button clicked')
        var plan_name = $("#plan-name").val();
        var validity = $("#validity").val();
        var amount = $("#amount").val();
        console.log(plan_name, validity, amount);
        // $.post("http://localhost:8085/addPlan",
        //     {
        //         'planName': plan_name,
        //         'validityInDays': validity,
        //         'amount': amount
        //     }
        //     , function (data, status) {
        //         alert("data saved: ");
        //     });

        // $.ajax({
        //     crossDomain: true,
        //     type: 'POST',
        //     dataType: 'jsonp',
        //     contentType: 'jsonp',
        //     url: 'http://localhost:8085/addPlan',
        //     data: {
        //         'planName': plan_name,
        //         'validityInDays': validity,
        //         'amount': amount
        //     },
        //     success: function (data, status) {
        //         alert("data saved: ");
        //     }
        // });


        // $.ajax('http://localhost:8085/addPlan', {
        //     type: 'POST',  // http method
        //     dataType: 'jsonp',
        //     data: JSON.stringify({
        //         'planName': plan_name,
        //         'validityInDays': validity,
        //         'amount': amount
        //     }),
        //     success: function (data, status, xhr) {
        //         alert('success');
        //     },
        //     error: function (jqXhr, textStatus, errorMessage) {
        //         alert('error');
        //     }
        // });
        var data = {
            'planName': plan_name,
            'validityInDays': validity,
            'amount': amount
        };
        $.ajax({
            url: 'http://localhost:8085/addPlan',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            dataTYpe: 'json',
            data: data, // Convert the data to JSON string,
            success: function (response) {
                // Handle the successful response
                console.log("Success:", response);
            },
            error: function (xhr, status, error) {
                // Handle errors
                console.error("Error:", error);
            }
        });


    });

});



