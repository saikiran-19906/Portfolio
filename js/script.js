$(document).ready(function () {

    // Filter thumbnails
    $('.filter-btn').click(function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        let filter = $(this).data('filter');

        $('.thumb').each(function () {
            if (filter === 'all' || $(this).data('category') === filter) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Load project details
    $('.thumb').click(function () {
        let project = $(this).data('project');

        $('.media-viewer').html(`
            <video controls width="100%">
                <source src="YOUR_ONEDRIVE_VIDEO_LINK" type="video/mp4">
            </video>
        `);

        $('.idea').html('<strong>Idea:</strong> Minimal motion storytelling.');
        $('.insight').html('<strong>Insight:</strong> Clean visuals improve brand recall.');
        $('.execution').html('<strong>Execution:</strong> Designed & animated using After Effects.');
    });

});
