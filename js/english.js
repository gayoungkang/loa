    $('.modal_apply .popup_btn').click(function() {

        if($('.modal_apply .email').val()== false){ 
        alert("Please enter your email.");
        return false;
        }
        if($('.modal_apply .wallet_email').val()==false){ 
        alert("Enter Wallet address.");
        return false;
        }
        if($('.modal_apply .wallet_email_check').val()==false){ 
        alert("Check the wallet address.");
        return false;
        }
        if($('.modal_apply .password').val()==false){ 
        alert("Please enter Password.");
        return false;
        }
        if($('.modal_apply .password_check').val()==false){ 
        alert("Please check Password.");
        return false;
        }
        if($('.modal_apply #invest_agree_check').prop("checked")==false){ 
        alert("Please check the investment notice and consent above.");
        return false;
        }
        if($('.modal_apply #apply_agree_check').prop("checked")==false){ 
        alert("Please check the application instructions.");
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
            alert("Please check the details of investment precautions.");
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
            alert("Please check the contents of application.");
            return false;
        } else {
            $('.agree_apply label').is(':checked');
        }
    });

    $('.modal_lookup .popup_btn').click(function(){
        if($('.modal_lookup .email').val()== false){ 
        alert("Please enter your email.");
        return false;
        }
        if($('.modal_lookup .password').val()== false){ 
        alert("Please enter Password.");
        return false;
        }
        $('.modal_lookup').css('display', 'none');
        $('.modal_lookup_success').fadeIn();
    });
