$('a[href^="https://amisolution.herokuapp.com"]').click(function () {
    fbq('track', 'Slack', {
        content_name: 'SlackClick',
    });
});

$('a[href^="https://twitter.com/amis_erc20"]').click(function () {
    fbq('track', 'Twitter', {
        content_name: 'TwitterClick',
    });
});

$('a[href^="https://www.reddit.com/r/amis_erc20"]').click(function () {
    fbq('track', 'Reddit', {
        content_name: 'RedditClick',
    });
});

$('a[href^="https://www.facebook.com/amis.token"]').click(function () {
    fbq('track', 'Facebook', {
        content_name: 'FacebookClick',
    });
});


