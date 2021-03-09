
const windows=()=>
{
        var windows_w = $(window).width();
        var windows_h = $(window).height();
    
        var n_windows_w = (windows_w * 0.1) + windows_w;
        if (n_windows_w < windows_h){
                $("body").removeClass('landscape');
                $("body").addClass('portrait');
                type = 'portrait';
        }else{
                $("body").removeClass('portrait');
                $("body").addClass('landscape');
                type = 'landscape';
        }
    
}
                