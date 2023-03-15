document.addEventListener('DOMContentLoaded', function(){

    /* Dropdown Menu */

    let itemMenu = document.querySelector(".header__item-menu");
    let dropdownMenu = document.querySelector(".header__dropdown-menu");

    itemMenu.addEventListener('click', function(event){
        event.isClick = true;
        dropdownMenu.classList.toggle('header__dropdown-menu_open');
    });

    /* Dropdown Menu - Клик вне блока */

    document.body.addEventListener('click', function(event){
        if (event.isClick == true ||
            event.target.classList.contains('header__item-menu') == true) 
            return

        dropdownMenu.classList.remove('header__dropdown-menu_open');
    });

    /* ------------------------------------------------------------------------------------------------------------------------- */



    /* Overlay & Popup */

    let overlay = document.querySelector('.overlay');
    let popup = document.querySelector('.popup-container');

    function showPopup(){
        overlay.classList.remove('overlay-none');
        popup.classList.remove('popup-none');

        setTimeout("document.querySelector('.popup-container').classList.add('popup-none')", 4500);
        setTimeout(() => {
            if(!overlay.classList.contains('overlay-none')){
                overlay.classList.add('overlay-none');
            }
        }, 4500);
        
        return popup, overlay;
    };

    /* Popup Close btn */

    let closeBtn = document.querySelector('.popup-close');

    closeBtn.addEventListener('click', function(){
        popup.classList.add('popup-none');
        overlay.classList.add('overlay-none')
    })

    /* ------------------------------------------------------------------------------------------------------------------------- */



    /* CONSULTATION MESSAGE --> TG */

    let consultationBtn = document.getElementById('consultation-btn');
    let consultationName = document.getElementById('consultation-name');
    let consultationTel = document.getElementById('consultation-tel');
    let consultationEmail = document.getElementById('consultation-email');
    let consultationLink = document.getElementById('consultation-link');
    let privacyPolicy = document.getElementById('consultation-checkbox');
    let valideName = document.querySelector('.valide-name');
    let valideTel = document.querySelector('.valide-tel');
    let valideCheckbox = document.querySelector('.valide-check');

    const TOKEN = "6228022982:AAHyXdWb1OSkxdtmvESSt5sgQEm4WCRwmC0";
    const CHAT_ID = "-1001875662852";
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

    consultationBtn.addEventListener('click', function (e){
        e.preventDefault();

        if(consultationName.value !== ""){
            consultationName.classList.remove("form-input-valid");
            valideName.style.display = "none";
        } if(consultationTel.value !== ""){
            consultationTel.classList.remove("form-input-valid");
            valideTel.style.display = "none";
        } if(privacyPolicy.checked == true){
            valideCheckbox.style.display = "none";
        }

        let message = `<b>Заявка на консультацию</b>\n`;
            message += `<b>Имя: </b> ${ consultationName.value }\n`;
            message += `<b>Номер телефона: </b> ${ consultationTel.value }\n`;
            if (consultationEmail.value !== ""){
                message += `<b>Email: </b> ${ consultationEmail.value }\n`;
            }
            if (consultationLink.value !== ""){
                message += `<b>Ссылка: </b> ${ consultationLink.value }`;
            }

            if(consultationName.value == ""){
                consultationName.classList.add("form-input-valid");
                valideName.style.display = "inline";
            } if(consultationTel.value == ""){
                consultationTel.classList.add("form-input-valid");
                valideTel.style.display = "inline";
            } if(privacyPolicy.checked == false){
                valideCheckbox.style.display = "inline";
            } else if (consultationName.value !== "" && consultationTel.value !== "" && privacyPolicy.checked == true) {
                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message 
                })
                .then((res) => {
                    consultationName.value = "";
                    consultationTel.value = "";
                    consultationEmail.value = "";
                    consultationLink.value = "";
                    consultationName.classList.remove("form-input-valid");
                    valideName.style.display = "none";
                    consultationTel.classList.remove("form-input-valid");
                    valideTel.style.display = "none";
                    valideCheckbox.style.display = "none";

                    showPopup()
                })
                .catch((err) => {
                    console.warn(err);
                })
                .finally(() => {
                    console.log('Конец');
                })
            }  
    });

    /* ------------------------------------------------------------------------------------------------------------------------- */



    /* Hero btn & Request & Step btn */

    let heroBtn = document.querySelector('.section-hero__btn')
    let request = document.querySelector('.request-container');
    let stepBtn = document.querySelector('.section-steps__btn')

    heroBtn.addEventListener('click', function(){
        request.classList.remove('request-none');
        overlay.classList.remove('overlay-none');
    })

    stepBtn.addEventListener('click', function(){
        request.classList.remove('request-none');
        overlay.classList.remove('overlay-none');
    })

    let closeBtnRequest = document.querySelector('.request-close');

    closeBtnRequest.addEventListener('click', function(){
        request.classList.add('request-none');
        overlay.classList.add('overlay-none');
        requestName.classList.remove("form-input-valid");
        valideNameReq.style.display = "none";
        requestTel.classList.remove("form-input-valid");
        valideTelReq.style.display = "none";
        valideCheckboxReq.style.display = "none";
    })

    /* ------------------------------------------------------------------------------------------------------------------------- */



    /* REQUEST MESSAGE --> TG */

    let requestBtn = document.getElementById('request-btn');
    let requestName = document.getElementById('request-name');
    let requestTel = document.getElementById('request-tel');
    let requestEmail = document.getElementById('request-email');
    let privacyPolicyRequest = document.getElementById('request-checkbox');
    let valideNameReq = document.querySelector('.valide-name-request');
    let valideTelReq = document.querySelector('.valide-tel-request');
    let valideCheckboxReq = document.querySelector('.valide-check-request');

    requestBtn.addEventListener('click', function (e){
        e.preventDefault();

        if(requestName.value !== ""){
            requestName.classList.remove("form-input-valid");
            valideNameReq.style.display = "none";
        } if(requestTel.value !== ""){
            requestTel.classList.remove("form-input-valid");
            valideTelReq.style.display = "none";
        } if(privacyPolicyRequest.checked == true){
            valideCheckboxReq.style.display = "none";
        }

        let message = `<b>Заявка на консультацию</b>\n`;
            message += `<b>Имя: </b> ${ requestName.value }\n`;
            message += `<b>Номер телефона: </b> ${ requestTel.value }\n`;
            if (requestEmail.value !== ""){
                message += `<b>Email: </b> ${ requestEmail.value }\n`;
            }
            if (consultationLink.value !== ""){
                message += `<b>Ссылка: </b> ${ consultationLink.value }`;
            }

            if(requestName.value == ""){
                requestName.classList.add("form-input-valid");
                valideNameReq.style.display = "inline";
            } if(requestTel.value == ""){
                requestTel.classList.add("form-input-valid");
                valideTelReq.style.display = "inline";
            } if(privacyPolicyRequest.checked == false){
                valideCheckboxReq.style.display = "inline";
            } else if (requestName.value !== "" && requestTel.value !== "" && privacyPolicyRequest.checked == true) {
                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message 
                })
                .then((res) => {
                    requestName.value = "";
                    requestTel.value = "";
                    requestEmail.value = "";
                    requestName.classList.remove("form-input-valid");
                    valideNameReq.style.display = "none";
                    requestTel.classList.remove("form-input-valid");
                    valideTelReq.style.display = "none";
                    valideCheckboxReq.style.display = "none";

                    request.classList.add('request-none')

                    showPopup()
                })
                .catch((err) => {
                    console.warn(err);
                })
                .finally(() => {
                    console.log('Конец');
                })
            }
    });

    /* ------------------------------------------------------------------------------------------------------------------------- */

    /* FUNCFION CHECK CHECKBOX */

    function checkCheckbox(name, id){
        if(id.checked){
            name = 'Требуется';
        } else{
            name = 'Не требуется';
        };

        return name; 
    };

    /* ------------------------------------------------------------------------------------------------------------------------- */



    /* Services BTN & Calc */

    let servicesBtn = document.querySelector('.section-services__btn')
    let calc = document.querySelector('.calc-container');

    servicesBtn.addEventListener('click', function(){
        calc.classList.remove('calc-none');
        overlay.classList.remove('overlay-none');
    })

    let closeBtnCalc = document.querySelector('.calc-close');

    closeBtnCalc.addEventListener('click', function(){
        calc.classList.add('calc-none');
        overlay.classList.add('overlay-none');
        calcName.value = "";
        calcTel.value = "";
        calcEmail.value = "";
        calcArticle.value = "";
        calcProducts.value = "";
        calcName.classList.remove("form-input-valid");
        valideNameCalc.style.display = "none";
        calcTel.classList.remove("form-input-valid");
        valideTelCalc.style.display = "none";
        valideCheckboxCalc.style.display = "none";
    })

    /* CALC MESSAGE --> TG */

    let calcBtn = document.getElementById('calc-btn');
    let calcName = document.getElementById('calc-name');
    let calcTel = document.getElementById('calc-tel');
    let calcEmail = document.getElementById('calc-email');
    let calcArticle = document.getElementById('calc-article');
    let calcProducts = document.getElementById('calc-products');
    let calcCheckSEO = document.getElementById('calc-check-SEO');
    let calcCheckVIDEO = document.getElementById('calc-check-VIDEO');
    let calcCheckPHOTOONMODELS = document.getElementById('calc-check-PHOTO-ON-MODELS');
    let calcCheckIMAGEPHOTO = document.getElementById('calc-check-IMAGE-PHOTO');
    let calcCheckCARDDESIGN = document.getElementById('calc-check-CARD-DESIGN');
    let calcCheckSUBJECTPHOTO = document.getElementById('calc-check-SUBJECT-PHOTO');
    let calcCheckPHOTO360 = document.getElementById('calc-check-PHOTO-360');
    let calcCheckPHOTOMANNEQUIN = document.getElementById('calc-check-PHOTO-MANNEQUIN');
    let calcCheckPHOTOPRODUCT = document.getElementById('calc-check-PHOTO-PRODUCT');
    let privacyPolicyCalc = document.getElementById('calc-checkbox');
    let valideNameCalc = document.querySelector('.valide-name-calc');
    let valideTelCalc = document.querySelector('.valide-tel-calc');
    let valideCheckboxCalc = document.querySelector('.valide-check-calc');

    let SEO,
        VIDEO,
        PHOTOONMODELS,
        IMAGEPHOTO,
        CARDDESIGN,
        SUBJECTPHOTO,
        PHOTO360,
        PHOTOMANNEQUIN,
        PHOTOPRODUCT;

    calcBtn.addEventListener('click', function (e){
        e.preventDefault();

        if(calcName.value !== ""){
            calcName.classList.remove("form-input-valid");
            valideNameCalc.style.display = "none";
        } if(calcTel.value !== ""){
            calcTel.classList.remove("form-input-valid");
            valideTelCalc.style.display = "none";
        } if(privacyPolicyCalc.checked == true){
            valideCheckboxCalc.style.display = "none";
        }

        let message = `<b>Заявка на расчет стоимости</b>\n`;
            message += `<b>Имя: </b> ${ calcName.value }\n`;
            message += `<b>Номер телефона: </b> ${ calcTel.value }\n`;
            if (calcEmail.value !== ""){
                message += `<b>Email: </b> ${ calcEmail.value }\n`;
            }
            if (calcArticle.value !== ""){
                message += `<b>Кол-во артикулов: </b> ${ calcArticle.value }\n`;
            }
            if (calcProducts.value !== ""){
                message += `<b>Продукция: </b> ${ calcProducts.value }\n`;
            }
            if(calcCheckSEO.checked){
                message += `<b>SEO оптимизированные тексты: </b> ${ checkCheckbox(SEO, calcCheckSEO) }\n`;
            }
            if(calcCheckVIDEO.checked){
                message += `<b>Видео: </b> ${ checkCheckbox(VIDEO, calcCheckVIDEO) }\n`;
            }
            if(calcCheckPHOTOONMODELS.checked){
                message += `<b>Фото на моделях: </b> ${ checkCheckbox(PHOTOONMODELS, calcCheckPHOTOONMODELS) }\n`;
            }
            if(calcCheckIMAGEPHOTO.checked){
                message += `<b>Имиджевая фотосъемка: </b> ${ checkCheckbox(IMAGEPHOTO, calcCheckIMAGEPHOTO) }\n`;
            }
            if(calcCheckCARDDESIGN.checked){
                message += `<b>Дизайн карточек товара и инфографика: </b> ${ checkCheckbox(CARDDESIGN, calcCheckCARDDESIGN) }\n`;
            }
            if(calcCheckSUBJECTPHOTO.checked){
                message += `<b>Предметное фото: </b> ${ checkCheckbox(SUBJECTPHOTO, calcCheckSUBJECTPHOTO) }\n`;
            }
            if(calcCheckPHOTO360.checked){
                message += `<b>Фото 360: </b> ${ checkCheckbox(PHOTO360, calcCheckPHOTO360) }\n`;
            }
            if(calcCheckPHOTOMANNEQUIN.checked){
                message += `<b>Фото на невидимом манекене: </b> ${ checkCheckbox(PHOTOMANNEQUIN, calcCheckPHOTOMANNEQUIN) }\n`;
            }
            if(calcCheckPHOTOPRODUCT.checked){
                message += `<b>Фото раскладки товара: </b> ${ checkCheckbox(PHOTOPRODUCT, calcCheckPHOTOPRODUCT) }\n`;
            }

            if(calcName.value == ""){
                calcName.classList.add("form-input-valid");
                valideNameCalc.style.display = "inline";
            } if(calcTel.value == ""){
                calcTel.classList.add("form-input-valid");
                valideTelCalc.style.display = "inline";
            } if(privacyPolicyCalc.checked == false){
                valideCheckboxCalc.style.display = "inline";
            } else if (calcName.value !== "" && calcTel.value !== "" && privacyPolicyCalc.checked == true) {
                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message 
                })
                .then((res) => {
                    calc.classList.add('calc-none');

                    calcName.value = "";
                    calcTel.value = "";
                    calcEmail.value = "";
                    calcArticle.value = "";
                    calcProducts.value = "";
                    calcName.classList.remove("form-input-valid");
                    valideNameCalc.style.display = "none";
                    calcTel.classList.remove("form-input-valid");
                    valideTelCalc.style.display = "none";
                    valideCheckboxCalc.style.display = "none";

                    showPopup()
                })
                .catch((err) => {
                    console.warn(err);
                })
                .finally(() => {
                    console.log('Конец');
                })
            }    
    });

    /* ------------------------------------------------------------------------------------------------------------------------- */

    /* Header BTN & Call */

    let headerBtn = document.querySelector('.header__item-btn');
    let call = document.querySelector('.call-container');

    headerBtn.addEventListener('click', function() {
        call.classList.remove('call-none');
        overlay.classList.remove('overlay-none');
    });

    let closeBtnCall = document.querySelector('.call-close');

    closeBtnCall.addEventListener('click', function(){
        call.classList.add('call-none');
        overlay.classList.add('overlay-none');
        callName.value = "";
        callTel.value = "";
        callName.classList.remove("form-input-valid");
        valideNameCall.style.display = "none";
        callTel.classList.remove("form-input-valid");
        valideTelCall.style.display = "none";
        valideCheckboxCall.style.display = "none";
    })


    /* ------------------------------------------------------------------------------------------------------------------------- */



    /* CALL MESSAGE --> TG */

    let callBtn = document.getElementById('call-btn');
    let callName = document.getElementById('call-name');
    let callTel = document.getElementById('call-tel');
    let privacyPolicyCall = document.getElementById('call-checkbox');
    let valideNameCall = document.querySelector('.valide-name-call');
    let valideTelCall = document.querySelector('.valide-tel-call');
    let valideCheckboxCall = document.querySelector('.valide-check-call');

    callBtn.addEventListener('click', function (e){
        e.preventDefault();

        if(callName.value !== ""){
            callName.classList.remove("form-input-valid");
            valideNameCall.style.display = "none";
        } if(callTel.value !== ""){
            callTel.classList.remove("form-input-valid");
            valideTelCall.style.display = "none";
        } if(privacyPolicyCall.checked == true){
            valideCheckboxCall.style.display = "none";
        }

        let message = `<b>Обратный звонок</b>\n`;
            message += `<b>Имя: </b> ${ callName.value }\n`;
            message += `<b>Номер телефона: </b> ${ callTel.value }\n`;

            if(callName.value == ""){
                callName.classList.add("form-input-valid");
                valideNameCall.style.display = "inline";
            } if(callTel.value == ""){
                callTel.classList.add("form-input-valid");
                valideTelCall.style.display = "inline";
            } if(privacyPolicyCall.checked == false){
                valideCheckboxCall.style.display = "inline";
            } else if (callName.value !== "" && callTel.value !== "" && privacyPolicyCall.checked == true) {
                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message 
                })
                .then((res) => {
                    callName.value = "";
                    callTel.value = "";
                    callName.classList.remove("form-input-valid");
                    valideNameCall.style.display = "none";
                    callTel.classList.remove("form-input-valid");
                    valideTelCall.style.display = "none";
                    valideCheckboxCall.style.display = "none";

                    call.classList.add('call-none');

                    showPopup()
                })
                .catch((err) => {
                    console.warn(err);
                })
                .finally(() => {
                    console.log('Конец');
                })
            }
    });

    /* ------------------------------------------------------------------------------------------------------------------------- */
});