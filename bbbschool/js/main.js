$(function() {
    $('.hamburger').on('click',function(){// .btnをクリックすると〜
        $('.hamburger,.menu-lists').toggleClass('active');
        $('menu-lists').fadeToggle(500);// navの表示・非表示切り替わる
      });

    $('.menu-lists .btn').on('click',function(){// .btnをクリックすると〜
      $('.hamburger,.menu-lists').removeClass('active');
      $('menu-lists').fadeToggle(500);// navの表示・非表示切り替わる
    });
});