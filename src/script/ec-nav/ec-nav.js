/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 13-10-20
 * Time: 下午4:03
 * To change this template use File | Settings | File Templates.
 */
define(function (require){
    require('jquery.scrollTo');

    var $trigger = $('#ec_nav_trigger');
    var $ec_nav = $('#ec_nav');
    var $content = $ec_nav.find('.content');
    var $nav = $ec_nav.find('.categories .nav');

    $trigger.on('click', function(e){
        var $this = $(this);

        $this.toggleClass('active');

        if( $this.hasClass('active') ){
            $ec_nav.removeClass('hidden');
        } else {
            $ec_nav.addClass('hidden');
        }

        e.preventDefault();
    });


    $ec_nav.on('click', '.categories .nav a', function ( e ){
        e.preventDefault();

        var $this = $(this),
            $parent = $this.parent();

        if( $parent.is('.active') ){
            return;
        }

        $nav.find('.active').removeClass('active');
        $parent.addClass('active');

        window.setTimeout(function (){
            $content.scrollTo( $this.data('content-id'), 300 );
        }, 15);
    });
});