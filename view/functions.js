const API_URL = "http://localhost:3003"

document.getElementById('card-information').addEventListener('submit', handleSubmit)

function showResponse(message, color, textColor) {
    const JResponse = $("#response")
    const JResponseText = $("#response-text")
    JResponseText.text(message)
    JResponse.css("background-color", color)
    JResponse.css("color", textColor)
    JResponse.show()
}

function hideResponse(e) {
    $("#response").hide()
}

function validationSuccess(response) {
    showResponse(response.message, "#4BB543", "#FFFFFF")
}

function serverError(response) {
    showResponse(response.message, "#FC100D", "#FFFFFF")
}

function validationFail(response) {
    showResponse(response.message, "#ECE81A", "#3D3D3D")
}

function handleSubmit(e) {
    const pan = $("#card-information input[name='pan']").val()
    const cvv = $("#card-information input[name='cvv']").val()
    const expiration = $("#card-information input[name='expiration']").val()

    const panNumbers = pan.replace(/\D/g, '')

    $.ajax({
        url: API_URL + "/validate-credit-card",
        type: 'POST',
        data: JSON.stringify({
            pan: panNumbers,
            cvv: cvv,
            expiryDate: expiration
        }),
        contentType: 'application/json; charset=utf-8',

        error: function (error, status) {
            console.error(error)
            serverError(new Error("Error: Failed to retrieve data from the server."))
            return
        },

        success: function (data) {
            console.log(data)

            if (!data.valid) {
                validationFail(data)
                return
            }

            validationSuccess(data)
            return
        }
    })
}