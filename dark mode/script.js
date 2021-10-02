const toggle = document.querySelector('.toggle-input');
const initialState = localStorage.getItem('toggleState') == 'true';
toggle.checked = initialState;

toggle.addEventListener('change', function() {
  localStorage.setItem('toggleState', toggle.checked);
});

// exercitando jQuery =/
function mod () {
	if ($("#fullpage").hasClass("night")) {
		$("#fullpage").removeClass("night");
		$("#switch").removeClass("switched");
	}
	else {
		$("#fullpage").addClass("night");
		$("#switch").addClass("switched");

	}
};
