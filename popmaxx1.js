$(document).ready(function()
{
    console.log('jquery ready!');

	var popbox = `<div class="popbox hide" id="popbox"><div aria-label='Close' class="pop-overlay" role="button" tabindex="0"/><div class="pop-content"><div class="popcontent" align="center"> <img src="https://1.bp.blogspot.com/-v3C9Oq3LZ68/YOb7CBBNBUI/AAAAAAAAA_E/N34o_vUPxkwupMpwmLFMx8i7spfl-8cngCLcBGAsYHQ/s16000/Copy%2Bof%2BBanner%2B2.jpg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" width="336" height="280" alt="" /> Pendaftaran hanya untuk di bulan July, yuk sebelum di tutup pendaftarannya. Kapan lagi bisa nyari uang gampang hasil jutaan <b>tinggal daftar aja tanpa BIAYA alias Gratis</b>.<br> <br><button class='g_url btn btn-success btn-dwn m-2'>Oke saya mau !!!</button></div> <button class='g_url popbox-close-button'>&times;</button></div></div>`;

	$(document.body).append(popbox);

    if(['.google.', 'bing.', 'yandex.', 'facebook.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s)))
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
