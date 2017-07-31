$(function () {  
    //兼容不支持placeholder的浏览器[ie浏览器，并且10以下均采用替代方式处理]  
    if ((navigator.appName == "Microsoft Internet Explorer") && (document.documentMode < 10 || document.documentMode == undefined)) {  
        var $placeholder = $("input[placeholder]");  
        for (var i = 0; i < $placeholder.length; i++) { 
            if ($(this).attr("type") == "text") {  
                $placeholder.eq(i).val($placeholder.eq(i).attr("placeholder")).css({"color": "#333"}) 
            } else if ($placeholder.eq(i).attr("type") == "password") {
            	$placeholder.eq(i).val('请输入密码').css({"color": "#333"}) 
            } else {  
                $placeholder.eq(i).val($placeholder.eq(i).attr("placeholder")).css({"color": "#333"})  
            }  
        }
        $placeholder.focus(function () {
        	if ($(this).val() == $(this).attr("placeholder")) {
        		if ($(this).attr("type") == "password" || $(this).attr("type") == "text") {  
	                $(this).val('')
	            } else {
	                if ($(this).val() == $(this).attr("placeholder")) {  
	                    $(this).val("").css({"color": "#333"})  
	                }  
	            }
        	}
              
        })
        $placeholder.blur(function () {
        	if($(this).val() == '') {
				if ($(this).attr("type") == "text") {  
	                $(this).val($(this).attr("placeholder")).css({"color": "#333"}) 
	            } else if ($(this).val() == "" && $(this).attr("type") == "password") {
	            	$(this).val('请输入密码').css({"color": "#333"}) 
	            } else {
	                $(this).val($(this).attr("placeholder")).css({"color": "#333"}) 
	            }
        	}
        });  
    }
});