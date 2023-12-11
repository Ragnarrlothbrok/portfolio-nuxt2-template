<template>
    <div>
        <Nav />

        <Nuxt />
    </div>
</template>

<link rel="preconnect" href="https://dev.visualwebsiteoptimizer.com" />
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  head() {
    return {
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
            f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){return typeof cc.hE==='string'?cc.hE:hide_element},getVersion:function(){return version},finish:function(){if(!f){f=true;var e=d.getElementById('_vis_opt_path_hides');if(e)e.parentNode.removeChild(e)}},finished:function(){return f},load:function(e){var t=this.getSettings(),n=d.createElement('script'),i=this;if(t){n.textContent=t;d.getElementsByTagName('head')[0].appendChild(n);if(!w.VWO||VWO.caE){stT.removeItem(cK);i.load(e)}}else{n.fetchPriority='high';n.src=e;n.type='text/javascript';n.onerror=function(){_vwo_code.finish()};d.getElementsByTagName('head')[0].appendChild(n)}},getSettings:function(){try{var e=stT.getItem(cK);if(!e){return}e=JSON.parse(e);if(Date.now()>e.e){stT.removeItem(cK);return}return e.s}catch(e){return}},init:function(){if(d.URL.indexOf('__vwo_disable__')>-1)return;var e=this.settings_tolerance();w._vwo_settings_timer=setTimeout(function(){_vwo_code.finish();stT.removeItem(cK)},e);var t=d.currentScript,n=d.createElement('style'),i=this.hide_element(),r=t&&!t.async&&i?i+this.hide_element_style():'',c=d.getElementsByTagName('head')[0];n.setAttribute('id','_vis_opt_path_hides');v&&n.setAttribute('nonce',v.nonce);n.setAttribute('type','text/css');if(n.styleSheet)n.styleSheet.cssText=r;else n.appendChild(d.createTextNode(r));c.appendChild(n);this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&vn='+version)}};w._vwo_code=code;code.init();})();
          `
        }
      ]
    };
  },
});
</script>

<style lang="scss">
$mobileBreakpoint: 600px;
$tabletBreakpoint: 1367px;

:root {
    --black: #101010;
    --highlight-color: #ff142e;
}

* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    transition: 0.4s;
    line-height: 1.6;
    color: var(--black);

    &::before,
    &::after {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 1.6;
    }
}

body,
html {
    scroll-behavior: smooth;
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    padding-top: 0;
    width: 100%;
    color: var(--black);
}

h1,
h2,
h3,
h4,
h5 {
    font-family: 'Montserrat', sans-serif;
}

#homepage {
    margin: auto;
    background-image: url('./assets/background.svg');
    background-repeat: no-repeat;
    background-position: top;
}

h1 {
    font-size: clamp(1rem, -0.875rem + 8.333vw, 3.5rem);
    margin-bottom: 1rem;
    text-transform: uppercase;

    @media screen and (max-width: $tabletBreakpoint) {
        font-size: 2rem;
    }
}

h2 {
    font-size: 1.7rem;
    @media screen and (min-width: $tabletBreakpoint) {
        font-size: 2rem;
    }
}

.subheading {
    font-size: 1.2rem;
}

.default-width {
    margin: 0 6% 5rem 6%;

    @media screen and (min-width: $tabletBreakpoint) {
        margin: 0 10% 5rem 10%;
    }
}

.highlight-color {
    color: var(--highlight-color);
}
</style>
