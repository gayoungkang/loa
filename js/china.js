    $('.modal_apply .popup_btn').click(function() {

        if($('.modal_apply .email').val()== false){ 
        alert("请输入您的电子邮件。");
        return false;
        }
        if($('.modal_apply .wallet_email').val()==false){ 
        alert("请输入钱包地址。");
        return false;
        }
        if($('.modal_apply .wallet_email_check').val()==false){ 
        alert("检查你的钱包地址。");
        return false;
        }
        if($('.modal_apply .password').val()==false){ 
        alert("请输入密码。");
        return false;
        }
        if($('.modal_apply .password_check').val()==false){ 
        alert("请确认密码。");
        return false;
        }
        if($('.modal_apply #invest_agree_check').prop("checked")==false){ 
        alert("请确认投资注意事项及以上内容同意。");
        return false;
        }
        if($('.modal_apply #apply_agree_check').prop("checked")==false){ 
        alert("请确认一下申请注意事项.");
        return false;
        }
        $('.modal_apply').css('display', 'none');
        $('.modal_apply_success').fadeIn();
    });

    var investRead = 0;
    var applyRead = 0;

    $('.accent_investment').click(function(){
        investRead = 1;
    });
    $('#invest_agree_check').click(function(){
        if(investRead == 0){
            alert("请查看投资说明的内容。");
            return false;
        } else {
            $('.agree_invest label').is(':checked');
        }
    });

    $('.accent_application').click(function(){
        applyRead = 1;
    });
    $('#apply_agree_check').click(function(){
        if(applyRead == 0){
            alert("请检查内容申请注意事项。");
            return false;
        } else {
            $('.agree_apply label').is(':checked');
        }
    });

    $('.modal_lookup .popup_btn').click(function(){
        if($('.modal_lookup .email').val()== false){ 
        alert("请输入您的电子邮件。");
        return false;
        }
        if($('.modal_lookup .password').val()== false){ 
        alert("请输入密码。");
        return false;
        }
        $('.modal_lookup').css('display', 'none');
        $('.modal_lookup_success').fadeIn();
    });
