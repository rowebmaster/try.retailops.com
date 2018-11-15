module.exports = {
    plugins: [
        require('@fullhuman/postcss-purgecss')({
            content: [
                'layouts/**/*.html',
                'themes/try/layouts/**/*.html',
                'static/js/**/*.js'
            ],
            fontFace: true,
            whitelist: [
                'active',
                'plyr',
                'fade',
                'd-none',
                'collapse', 'collapsed', 'collapsing',
                'lazyload', 'lazyloading', 'lazyloaded',
                'avbar-transparent',
                'navbar',
                'navbar-main',
                'navbar-expand-lg',
                'navbar-transparent',
                'navbar-light',
                'fixed-top',
                'headroom',
                'headroom--not-bottom',
                'headroom--not-top',
                'headroom--pinned',
                'text-white-75'
            ],
            whitelistPatterns: [
                /order(-[a-zA-Z]+)?/,
                /col(-[a-zA-Z]+)?/,
            ],
            whitelistPatternsChildren: [
                /js/,
                /\w\.in/,
                /nav(-[a-zA-Z]+)?/,
                /navbar(-[a-zA-Z]+)?/,
                /hs(-[a-zA-Z]+)?/,
                /plyr(__[a-zA-Z]+)?/, /plyr(--[a-zA-Z]+)?/,
                /dropdown(-[a-zA-Z]+)?/,
                /(open)/,
                /no-js/,
                /defer/,
                /disabled/,
                /([a-zA-Z]-)page/,
            ],
            rejected: true
        }),
        require('autoprefixer')({
            browsers: ['ie >= 8', 'last 3 versions']
        })
    ]
};