function respRatingChange( responseId, move ) {
    if (!responseId || !move) {
        return false;
    }

    var url = 'ajax.php';
    var pars = {dj: 0, module: 'rate_response', response_id: responseId, move: move, response_xml: true};

    var myAjax = new Ajax.Request(
	    url, 
        {
		    method: 'post', 
		    parameters: pars,
            asynchronous: false,
            onFailure: function() {
                alert("Запрос AJAX закончился неудачей");
            },
            onSuccess: function(transport) {
                var xmlDoc = transport.responseXML;
                var root = xmlDoc.getElementsByTagName("root")[0];

                if (root.getElementsByTagName("error")[0] && root.getElementsByTagName("error")[0].childNodes[0]) {
                    alert(root.getElementsByTagName("error")[0].childNodes[0].nodeValue);
                }

                var result = root.getElementsByTagName("result")[0];

                if (result.getElementsByTagName("error")[0] && result.getElementsByTagName("error")[0].childNodes[0]) {
                    alert(result.getElementsByTagName("error")[0].childNodes[0].nodeValue);
                }


                if (result.getElementsByTagName("message")[0] && result.getElementsByTagName("message")[0].childNodes[0]) {
                    alert(result.getElementsByTagName("message")[0].childNodes[0].nodeValue);
                }


                if (result.getElementsByTagName("pro")[0] && result.getElementsByTagName("pro")[0].childNodes[0]) {
                    pro = result.getElementsByTagName("pro")[0].childNodes[0].nodeValue;
                    $('spanRespRatingPro_'+ responseId).innerHTML = '&nbsp;&nbsp;'+ pro +'&nbsp;&nbsp;';

                    if (pro == 0) {
                        if (!$('spanRespRatingPro_'+ responseId).hasClassName('FBRatingGray')) {
                            $('spanRespRatingPro_'+ responseId).toggleClassName('FBRatingGray');
                            $('spanRespRatingPro_'+ responseId).removeClassName('FBRatingGreen');
                        }
                    }
                    else {
                        if (!$('spanRespRatingPro_'+ responseId).hasClassName('FBRatingGreen')) {
                            $('spanRespRatingPro_'+ responseId).toggleClassName('FBRatingGreen');
                            $('spanRespRatingPro_'+ responseId).removeClassName('FBRatingGray');
                        }
                    }
                }


                if (result.getElementsByTagName("contra")[0] && result.getElementsByTagName("contra")[0].childNodes[0]) {
                    contra = result.getElementsByTagName("contra")[0].childNodes[0].nodeValue;
                    $('spanRespRatingContra_'+ responseId).innerHTML = '&nbsp;&nbsp;'+ contra +'&nbsp;&nbsp;';

                    if (contra == 0) {
                        if (!$('spanRespRatingContra_'+ responseId).hasClassName('FBRatingGray')) {
                            $('spanRespRatingContra_'+ responseId).toggleClassName('FBRatingGray');
                            $('spanRespRatingContra_'+ responseId).removeClassName('FBRatingRed');
                        }
                    }
                    else {
                        if (!$('spanRespRatingContra_'+ responseId).hasClassName('FBRatingRed')) {
                            $('spanRespRatingContra_'+ responseId).toggleClassName('FBRatingRed');
                            $('spanRespRatingContra_'+ responseId).removeClassName('FBRatingGray');
                        }
                    }
                }

                if (json.error != '') {
                    alert(json.error);
                }
                else {
                    alert(json.result);
                }
            }
        }
    );
}