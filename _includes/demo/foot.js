$(document).ready(function() {
    $('form').on('success.form.fv', function(e) {
        e.preventDefault();
    });

    $(window).on('load', function() {
        var $iframe = $(window.parent.document).find('iframe[src="/{{ page.path }}"]');
        if ($iframe.length) {
            $('body').addClass('demo-frame-body').find('.demo-ad').hide();

            // Adjust the height of iframes containing the demo for specific frameworks
            var $container = $('#demoContainer');
            setTimeout(function() {
                $iframe.height($container.height()).css('visibility', 'visible').fadeIn('fast');
            }, 1000);

            $container
                .find('form')
                .on('status.field.fv', function(e, data) {
                    $iframe.height($container.height());
                });
        }
    });
});