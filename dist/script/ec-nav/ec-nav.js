/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 13-10-20
 * Time: 下午4:03
 * To change this template use File | Settings | File Templates.
 */
define(function (require){
    require('jquery.scrollTo');
    require('../../style/ec-nav/style.css');
    var template = require('text!../../templates/ec-nav/template.html');

    var $ec_nav = $('#ec_nav');

    $ec_nav.html( template );

    var $content = $ec_nav.find('.content');
    var $nav = $ec_nav.find('.categories .nav');

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
            $content.scrollTo( $this.data('content-id'), 600 );
        }, 15);
    });
});