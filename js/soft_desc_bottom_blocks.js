activeId = 'tdBestSoftTab';

function switchSoftDescBottomBlocks( params ) {
    if (params.reload != true && activeId == params.elementId) {
        return;
    }

    if ($(activeId)) {
        $(activeId).className = 'Menu2ETd menu2AN';
        if ($(activeId +'_sectionName')) {
            $(activeId +'_sectionName').innerHTML = '';
        }
    }

    if ($(params.elementId)) {
        $(params.elementId).className = 'Menu2ETdThis';
        if ($(params.elementId +'_sectionName')) {
            $(params.elementId +'_sectionName').innerHTML = ' "'+ params.sectionName +'"';
        }
    }

    activeId = params.elementId;

    var url = 'ajax.php';
    if (params.sectionId != null) {
        var pars = {dj: 0, module: 'soft_desc_bottom_blocks', elementId: params.elementId, sectionId: params.sectionId};
    }
    else {
        var pars = {dj: 0, module: 'soft_desc_bottom_blocks', elementId: params.elementId};
    }

    var divDims = $('divFloatContent').getDimensions();

    if (BrUserAgent == 'ie') {
        $('divFloatContentLoading').style.height = divDims.height;
        $('divFloatContentLoading').style.width  = divDims.width;
    }
    else {
        $('divFloatContentLoading').style.height = divDims.height +"px";
        $('divFloatContentLoading').style.width  = divDims.width +"px";
    }

    $('divFloatContent').hide();
    $('divFloatContentLoading').show();

    var myAjax = new Ajax.Request(
	    url, 
        {
		    method: 'post', 
		    parameters: pars,
            asynchronous: false,
            onFailure: function() {
                alert("Запрос AJAX закончился неудачей");
                $('divFloatContentLoading').hide();
                $('divFloatContent').show();
            },
            onSuccess: function(transport, json) {
                $('divFloatContentLoading').hide();
                $('divFloatContent').show();

                if (json.error != '') {
                    alert(json.error);
                }
                else {
                    //alert(json.result);
                    $('divFloatContent').innerHTML = json.result;
                }
            }
        }
    );

}