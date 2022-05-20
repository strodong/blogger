(function(){

	var uads 		= sessionStorage.getItem('uads');
	var go_current  = window.location.href;

	const endpoint 	= `https://wbro.xyz/uads`;

	if(!uads && !go_current.includes("/download/"))
	{
		var api_url=`${endpoint}/ping?x=${encodeURIComponent(go_current)}`;

		fetch(api_url).then(response=>response.json()).then(function(res){
		window.location.href = res.target;
	}).catch(error=>console.log(error));
	}
	
})();
