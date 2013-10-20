/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 13-10-20
 * Time: 下午10:28
 * To change this template use File | Settings | File Templates.
 */
define(function(require){
    var $trigger = $('#ec_nav_trigger');
    var $ec_nav = $('#ec_nav');

    $trigger.on('click', function(e){
        var $this = $(this);

        $this.toggleClass('active');

        if( $this.hasClass('active') ){
            $ec_nav.removeClass('hidden');
            require.async('./ec-nav/ec-nav');
        } else {
            $ec_nav.addClass('hidden');
        }

        e.preventDefault();
    });
});