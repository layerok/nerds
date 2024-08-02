var length = $('input[name="grid"],[name="checkbox"]').length;
var res = '';
var arr = [];
var arr2 = [];

function checking(){

	res = [];
	arr = [];
	
	for(i=0;i<arr2.length;i++){
		$( "#all-items" ).append(arr2[i]);
	}

	for(i=0;i<length;i++){
		if($('input[name="grid"],[name="checkbox"]').eq(i).is(':checked')){
			var itype = $('input[name="grid"],[name="checkbox"]').eq(i).data('choice');
			res = res + '[type~='+itype+']';
		};
	};

	arr.push($(res));
	arr2.push($('.catalog-item'));

	for(i=0;i<arr2.length;i++){
		$(arr2[i]).remove();
	};

	for(i=0;i<arr.length;i++){
		$( "#all-items" ).append(arr[i]);
	}

};

$('input[name="grid"],[name="checkbox"]').on('click',checking);


