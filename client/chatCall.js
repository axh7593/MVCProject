"use strict";

$(document).ready(function(){
   function postMess(message){
       var post = "<p class=\sent\">You: " + message + "</p>";
       $("#chatWindow").append(post);
   }
    
    function handleError(message) {
		console.log("Error: " + message);
		$("#errorMessage").text(message);
	}
    
    
    function sendAjax(action, data) {
		$.ajax({
			cache: false,
			type: "POST",
			url: action,
			data: data,
			dataType: "json",
			success: function(result, status, xhr){
				var response = result.word;
				var responseWrapped = "<p class=\"received\">" + response + "</p>";
				$("#chatWindow").append(responseWrapped);
            },
            
            error: function(xhr, status, error) {
				var messageObject = JSON.parse(xhr.responseText);
				handleError(messageObject.error);
			}

    
    
        });
    }
    
    $("#sendMessage").on("click", function(e) {
		e.preventDefault();
		postMess($("#message").val());
		sendAjax($("#Chat").attr("action"), $("#Chat").serialize());
	});
});