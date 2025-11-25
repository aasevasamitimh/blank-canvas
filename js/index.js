$( document ).ready(function() {
    console.log( "ready!" );


	const swalWithBootstrapButtons = Swal.mixin({
	  customClass: {
	    confirmButton: 'btn btn-aablue m-2 text-light',
	    cancelButton: 'btn btn-aablue m-2 text-light'
	  },
	  buttonsStyling: false
	})

	swalWithBootstrapButtons.fire({
	  imageUrl: "images/ektalogo.png",
	  title: 'भाषा निवडा | Choose Language',
	  //icon: 'info',
	  showCancelButton: true,
	  confirmButtonText: 'मराठी',
	  cancelButtonText: 'English',
	  allowOutsideClick: false,
	}).then((result) => {
	  if (result.value) {
	  	console.log("result : ", result.isConfirmed);
	  	location.href = 'marathi/index.html';
	  } else if (result.dismiss === Swal.DismissReason.cancel) {
	  	location.href = 'english/index.html';
	  }
	})

});