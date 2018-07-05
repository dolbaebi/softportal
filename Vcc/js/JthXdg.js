if (!('xep' in window)) {
    //console.log('asasas');
    window.xep=1;

    // показываем другую рекламу
    try {
        var block = document.getElementById('EcpXfLZX');
        if (block == null) {
            throw "Нет блока с id EcpXfLZX";
        }

        var data = block.dataset;
        var blockId = data.gyzdSoeu;
        var show = Number(data.miMuMo);

        if (!show) {
            throw "Не показываем блок";
        }

        // показываем просто баннер
        block.innerHTML = '<div><a href="prog2.htm" target="_blank" rel="nofollow"><span><img src="/img/adg_rnb.png" style="width:313px; height:261px;"></span></a></div>';
        //block.innerHTML = '<div><a href="prog3.phml" target="_blank" rel="nofollow" style="bottom:0; left:0; position:absolute; right:0; top:0;"><div style="width:336px; height:280px; background:url(/img/sport.png);"></a></div>';

/*
        // в зависиости от страницы показываем разные баннеры
        if (blockId == 'freedownload') {
            block.innerHTML = '<div><a href="prog3.phml" target="_blank" rel="nofollow" style="bottom:0; left:0; position:absolute; right:0; top:0;"><div style="width:336px; height:280px; background:url(/img/sport.png);"></a></div>';
        }
        else {
            block.innerHTML = '<div><a href="prog2.phml" target="_blank" rel="nofollow" style="bottom:0; left:0; position:absolute; right:0; top:0;"><div style="width:313px; height:261px; background:url(/img/adg_rnb.png);"></a></div>';
        }
*/
        throw 'Показали просто баннер';

        // выбираем заглушку вместо адсенса в зависимости от текущего блока для рекламы
        var url = 'ajax.php';
        var pars = {dj: 0, response_xml: true, module: 'get_xep_data', blockId: blockId};

        jQuery.get( url, pars )
            .done( function( xml ) {
                try {
                    var root = xml.getElementsByTagName("root")[0];

                    if (root.getElementsByTagName("error")[0] && root.getElementsByTagName("error")[0].childNodes[0]) {
                        throw root.getElementsByTagName("error")[0].childNodes[0].nodeValue;
                    }

                    var result = root.getElementsByTagName("result")[0];

                    if (result.getElementsByTagName("error")[0] && result.getElementsByTagName("error")[0].childNodes[0]) {
                        throw result.getElementsByTagName("error")[0].childNodes[0].nodeValue;
                    }

                    if (result.getElementsByTagName("element")[0] && result.getElementsByTagName("element")[0].childNodes[0]) {
                        var element = result.getElementsByTagName("element")[0];

                        if (element.getElementsByTagName("id")[0] && element.getElementsByTagName("id")[0].childNodes[0]) {
                            var id = element.getElementsByTagName("id")[0].childNodes[0].nodeValue;
                        }

                        if (element.getElementsByTagName("youtube_id")[0] && element.getElementsByTagName("youtube_id")[0].childNodes[0]) {
                            var youtube_id = element.getElementsByTagName("youtube_id")[0].childNodes[0].nodeValue;
                        }

                        if (element.getElementsByTagName("image")[0] && element.getElementsByTagName("image")[0].childNodes[0]) {
                            var image = element.getElementsByTagName("image")[0].childNodes[0].nodeValue;
                        }

                        if (element.getElementsByTagName("img_w")[0] && element.getElementsByTagName("img_w")[0].childNodes[0]) {
                            var img_width = element.getElementsByTagName("img_w")[0].childNodes[0].nodeValue;
                        }

                        if (element.getElementsByTagName("img_w_a")[0] && element.getElementsByTagName("img_w_a")[0].childNodes[0]) {
                            var img_width_auto = element.getElementsByTagName("img_w_a")[0].childNodes[0].nodeValue;
                        }

                        if (element.getElementsByTagName("img_h")[0] && element.getElementsByTagName("img_h")[0].childNodes[0]) {
                            var img_height = element.getElementsByTagName("img_h")[0].childNodes[0].nodeValue;
                        }

                        if (element.getElementsByTagName("img_h_a")[0] && element.getElementsByTagName("img_h_a")[0].childNodes[0]) {
                            var img_height_auto = element.getElementsByTagName("img_h_a")[0].childNodes[0].nodeValue;
                        }

                        if (element.getElementsByTagName("icon")[0] && element.getElementsByTagName("icon")[0].childNodes[0]) {
                            var icon = element.getElementsByTagName("icon")[0].childNodes[0].nodeValue;

                            var icons_arr = new Array('', 'ytslicnred', 'ytslicnblack');
                        }

                        //block.innerHTML = '<a href="http://www.youtube.com/watch?v=' + youtube_id + '" target="_blank" id="leftinlinevideo" onclick="clickStarlabsVideo(' + id + ')"><img src="/img/starlabs/' + image + '" width="' + img_w + '" height="' + img_h + '"></a>';

                        block.innerHTML = '<a href="http://www.youtube.com/watch?v=' + youtube_id + '" target="_blank" onclick="clickSLV(' + id + ')"><img src="https://i.ytimg.com/vi/' + youtube_id + '/mqdefault.jpg" style="width:' + (img_width_auto > 0 ? 'auto' : img_width + 'px') + '; height:' + (img_height_auto > 0 ? 'auto' : img_height + 'px') + ';" class="ytslimg">' + (icon > 0 ? '<div class="ytslicn ' + icons_arr[icon] + '"></div>' : '') + '</a>';
                    }
                }
                catch (e) {
                    //console.log(e);
                }
            })
            .fail( function( jqxhr, textStatus, error ) {
                //console.log( error );
            });
    }
    catch (e) {
        //console.log(e);
    }
}
else {
    //console.log('zxzxzx');
}


function clickSLV(id)
{
    try {
        var url = 'ajax.php';
        var pars = {dj: 0, jquery: 1, module: 'click_youtube_vs_adsense', id: id};

        jQuery.getJSON( url, pars )
            .done( function( json ) {
                try {
                    if (json.error != '') {
                        throw json.error;
                    }

                    if (typeof json.result.error != 'undefined' && json.result.error) {
                        throw json.result.error;
                    }
                }
                catch (e) {
                    console.log(e);
                }
            })
            .fail( function( jqxhr, textStatus, error ) {
                //console.log( error );
            });

    }
    catch (e) {
        console.log(e);
    }
}