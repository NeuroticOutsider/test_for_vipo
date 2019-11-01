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
		if (this.value.match(/[^а-яА-Яa-zA-Z\s]/g)) {
			$(this).addClass('inputError');
			inputErrorTitle.addClass('feedback__error-titleShow');
		} else {
			$(this).removeClass('inputError');
			inputErrorTitle.removeClass('feedback__error-titleShow');
		}
	});

	inputPhone.bind("change keyup input click", function() {
		if (this.value.match(/[^0-9()\-+ ]/g)) {
			$(this).addClass('inputError');
			inputErrorTitle.addClass('feedback__error-titleShow');
		} else {
			$(this).removeClass('inputError');
			inputErrorTitle.removeClass('feedback__error-titleShow');
		}
	});

	// if (inputName.hasClass('inputError') || inputPhone.hasClass('inputError')) { НЕ РАБОТАЕТ ПОЧЕМУ-ТО
	// 	console.log("Все фигова!!!");
	// 	inputErrorTitle.addClass('feedback__error-titleShow');
	// };

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
});

