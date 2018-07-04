function updateBlocksStat(block_type)
{
    try {
        var url = 'ajax.php';
        var pars = {dj: 0, jquery: true, module: 'click_blocks_stat', blockType: block_type};

        jQuery.get( url, pars )
            .done( function( json ) {
                try {
                    //console.log(json);
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
        //console.log(e);
    }
}