function rateSoft(vote, softId) {
    var url = 'ajax.php';
    var pars = {dj: 0, module: 'rate_soft', soft_id: softId, vote: vote};

    var myAjax = new Ajax.Request(
	    url, 
        {
		    method: 'get', 
		    parameters: pars,
            asynchronous: false,
            onFailure: function() {
                //$('divLoadingNewVersion').hide();
                alert("Запрос AJAX закончился неудачей");
            },
            onSuccess: function(transport, json) {

                //$('divLoadingNewVersion').hide();

                if (json.error != '') {
                    alert("Произошла ошибка:\n\n"+json.error);
                }
                else if (json.result != '') {
                    alert(json.result);
                }

                //$('divResultNewVersion').show();
                //$('btnCloseResultNewVersion').focus();
                //resetNewVersionForm();
            }
        }
    );

    //var element = document.getElementById('unit_long'+id_num);
	//new Effect.Fade(element);

    //element.innerHTML = '<div class="loading"></div>';
}