export default {
    target: 'static',

    head: {
        title: 'Mads Hougesen | Software Developer',

        htmlAttrs: {
            lang: 'en',
        },

        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Software developer from Denmark. Lover of all things JavaScript - but I am always learning new stuff.',
            },
            {
                hid: 'og:title',
                name: 'og:title',
                content: 'Mads Hougesen | Software Developer',
            },
            {
                hid: 'og:description',
                name: 'og:description',
                content:
                    'Software developer from Denmark. Lover of all things JavaScript - but I am always learning new stuff.',
            },
            { name: 'format-detection', content: 'telephone=no' },
        ],

        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
            {
                rel: 'preconnect',
                crossorigin: '',
                href: 'https://fonts.gstatic.com',
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400&display=swap',
            },
            { rel: 'preconnect', href: 'https://dev.visualwebsiteoptimizer.com' },
        ],
        script: [
            {
                id: 'vwoCode',
                innerHTML: `
                window._vwo_code || (function() {
                var account_id=735612,
                version=2.0,
                settings_tolerance=2000,
                hide_element='body',
                hide_element_style = 'opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important',
                /* DO NOT EDIT BELOW THIS LINE */
                f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=this.getSettings(),n=d.createElement('script'),i=this;if(t){n.textContent=t;d.getElementsByTagName('head')[0].appendChild(n);if(!w.VWO||VWO.caE){stT.removeItem(cK);i.load(e)}}else{n.fetchPriority='high';n.src=e;n.type='text/javascript';n.onerror=function(){_vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(n)}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){_vwo_code.finish();stT.removeItem(cK)},e);var t=d.currentScript,n=d.createElement('style'),i=this.hide_element(),r=t&&!t.async&&i?i+this.hide_element_style():'',c=d.getElementsByTagName('head')[0];n.setAttribute('id','_vis_opt_path_hides');v&&n.setAttribute('nonce',v.nonce);n.setAttribute('type','text/css');if(n.styleSheet)n.styleSheet.cssText=r;else n.appendChild(d.createTextNode(r));c.appendChild(n);this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&vn='+version)}};w._vwo_code=code;code.init();})();`,
            },
        ],
    },

    components: true,

    eslint: {
        fix: true,
    },

    css: [],

    plugins: [],

    sitemap: {
        hostname: 'https://mhouge.dk',
        gzip: true,
    },

    googleAnalytics: {
        // Remember to set your own google analytics ua id if you forked this project
        id: 'UA-45233401-2',
    },

    buildModules: ['@nuxt/typescript-build', '@nuxtjs/dotenv', '@nuxtjs/stylelint-module', '@nuxtjs/google-analytics'],

    modules: ['@nuxt/content', '@nuxtjs/sitemap'],

    content: {},

    build: {},
};
