$(function() {
  $('.hamburger').on('click', function () {
		$(this).toggleClass('is-active');
	});

	var inputName = $("#feedback__name");
	var inputPhone = $("#feedback__phone");
	var inputTextarea = $("#feedback__textarea");
	var inputErrorTitle = $(".feedback__error-title")

	inputPhone.focus(function() {
		if ($(this).val() === '') {
			$(this).val("+375 ");
		}
	});

	inputName.bind("change keyup input click", function() {
		if (inputPhone.hasClass('inputError')) {
			inputErrorTitle.addClass('feedback__error-titleShow');
			if (this.value.match(/[^а-яА-Яa-zA-Z\s]/g)) {
				$(this).addClass('inputError');
			} else {
				$(this).removeClass('inputError');
			}
		} else if (this.value.match(/[^а-яА-Яa-zA-Z\s]/g)) {
			$(this).addClass('inputError');
			inputErrorTitle.addClass('feedback__error-titleShow');
		} else {
			$(this).removeClass('inputError');
			inputErrorTitle.removeClass('feedback__error-titleShow');
		}
	});

	inputPhone.bind("change keyup input click", function() {
		if (inputName.hasClass('inputError')) {
			inputErrorTitle.addClass('feedback__error-titleShow');
			if (this.value.match(/[^0-9()\-+ ]/g)) {
				$(this).addClass('inputError');
			} else {
				$(this).removeClass('inputError');
			}
		} else if (this.value.match(/[^0-9()\-+ ]/g)) {
			$(this).addClass('inputError');
			inputErrorTitle.addClass('feedback__error-titleShow');
		} else {
			$(this).removeClass('inputError');
			inputErrorTitle.removeClass('feedback__error-titleShow');
		}
	});

	//	Unfocus fields event

	function formInputBg (nameInput) {
		nameInput.on('keyup',function(){
			var val = $(this).val();
			
			if (val.length >= 1) {
				nameInput.addClass('form__input-bg');
			} else {
					nameInput.removeClass('form__input-bg');
			}
		});
	};

	formInputBg (inputName);
	formInputBg (inputPhone);
	formInputBg (inputTextarea);

	////////////////////////////////////////////////	

	// Request accept event

	var feedbackSendButton = $(".feedback__button"),
			 requestBlock = $(".request"),
			 requestBlockClose = $(".request__button");

	feedbackSendButton.on('click', function(event) {
		event.preventDefault()
		if ( (!(inputName.hasClass('inputError')) && !(inputPhone.hasClass('inputError')) ) 
			&& ( !(inputName.val() === '') && !(inputPhone.val() === '')) ) {
			requestBlock.addClass('request--show');
			if ( requestBlock.hasClass('request--show') ) {
				inputName.val('');
				inputPhone.val('');
				inputTextarea.val('');
			}
		} else if ( inputName.val() === '' ) {
				inputName.addClass('inputError');
				inputErrorTitle.addClass('feedback__error-titleShow');
			} else if ( inputPhone.val() === '' ) {
					inputPhone.addClass('inputError');
					inputErrorTitle.addClass('feedback__error-titleShow');
				};
	});

	requestBlockClose.on('click', function() {
		requestBlock.removeClass('request--show');
	});

	/////////////////////////////////////////////////

	$('.news__image').hover(function() {
		$(this).closest('.news__item').find('.news__item-title').toggleClass('news__item-title--red');
	});

});