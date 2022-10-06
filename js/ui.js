function menuToggle() {
	$('.wrapper').toggleClass('menuOn');
}

$('nav.lnb .body a').on('click',function () {

	$('nav.lnb .body li').removeClass('on');
	$(this).parents('li').addClass('on');
});


$('article.mapControl .droneBtn').on('click',function () {
	$(this).toggleClass('on');
});

$('article.mapControl .setBtn').on('click',function () {
	$(this).toggleClass('active');
})


$('article.mapControl .btnMenu a').on('click',function () {

	var _parents = $(this).parents('.row')
	var _btn = $(this).data('btn');

	console.log(_btn)
	console.log(_parents)

	_parents.find('.setBtn').attr("data-btn",_btn);
	_parents.find('.setBtn').removeClass('active');

});


$('aside.right .asideToggleBtn').on('click',function () {



	$(this).siblings('.asideGroup').toggleClass('active');

	if($('.asideSubBox').length == 1){
		$('.asideSubBox').toggle();
	}


})


$('aside.right .tabsList a').on('click',function () {

	var _tabs = $(this).data('tabs');

	$('aside.right .tabsList a').removeClass('on');
	$(this).addClass('on');

	$('.tabsWrap .tabsBox').hide();
	$('.tabsWrap .tabsBox[data-tabs=' + _tabs +']').show();

});

$('.mapControl .row a.toggle').on('click',function () {
	$(this).toggleClass('on');
})



// 팝업 닫기
function closePop(e){
	$(e).parents('.popup').hide();
	popupBgClose()
}

// 팝업에 팝업인 경우
function closePopByInner(e) {
	$(e).parents('.popup').hide();
}


function popupShow(name) {

	$('.popup-'+name).show();
	$('.wrapper').addClass('overlay');


}


function popupBgOpen(){

	$('.wrapper').addClass('overlay');

}

function popupBgClose(){
	$('.wrapper').removeClass('overlay');

}

$('.firePointBtn').on('click',function () {

	$(this).toggleClass('on');
})


$('.toggleBtn').on('click', function () {

	$(this).toggleClass('on');

})


// 언어변경
// 모바일 메뉴 열기
function mobileMenuOpen() {
	$('.container').addClass('overlay')
	$('nav.lnb').show("slide", {direction: "left"});
	scrollDisable();
}

// 모바일 메뉴 닫기
function mobileMenuClose() {

	$('nav.lnb').hide("slide", {direction: "left"});
	$('.container').removeClass('overlay');
	scrollAble();
}

function scrollDisable(){
	$('html, body').addClass('scrollHidden').on('scroll touchmove mousewheel', function(e){
		e.preventDefault();
	});
}
function scrollAble(){
	$('html, body').removeClass('scrollHidden');
}