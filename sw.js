importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"9a5d51ed24d13560cba45ea90f09c952","url":"contributors.html"},{"revision":"a4a37e728f10d82374c8714ef4740309","url":"feedback.html"},{"revision":"3ddafe276446c59a6b5e5fa47f1d75f8","url":"images/theory1.png"},{"revision":"3bcc2009050a63446b7bbdaebf8220c7","url":"images/theory2.png"},{"revision":"1ac2a629f275a4fa292518534cf4f840","url":"images/theory3.png"},{"revision":"9ac9b973eae26fc296d69fd52ec02deb","url":"images/theory4.png"},{"revision":"1285ea5ce489a4b3d585410385553e59","url":"images/theory5.png"},{"revision":"acac1b01443d7b3b743c8a4eaa6e5438","url":"index.html"},{"revision":"8817d60ec0f6c23b6a2b5596c0922629","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"0974222619eed4c6743e4f6ef72f93bc","url":"posttest.html"},{"revision":"b2c357987e709125ad7a620f9638f297","url":"posttest.json"},{"revision":"1ea02e057d3e5a9e9a47e218a1297bdf","url":"pretest.html"},{"revision":"cb6b160529c08ad425fc2e98e2f03b7f","url":"pretest.json"},{"revision":"c52b47236fd338e93aeacaed1bdc71d9","url":"procedure.html"},{"revision":"b635db10a6f1819d8d4fa53af775c1b4","url":"references.html"},{"revision":"8c04fa7fb3da19920868d88b0b75a004","url":"simulation.html"},{"revision":"bf47bc40c9a8d7da194d6718be06fc0f","url":"simulation/css/general.css"},{"revision":"3e795b8e5867cd06a70b638f3d58d4fa","url":"simulation/css/jquery-ui.css"},{"revision":"53341bf9c63a14ddb4a60e3df2ae24b9","url":"simulation/css/query.css"},{"revision":"aa1c33a31590c0ad65bec3667b4255ee","url":"simulation/css/style.css"},{"revision":"e6157ec9c2cbea499fe4e223a5fc0fe6","url":"simulation/images/apparatus.png"},{"revision":"26970cd3176b752cd0e550749a477c6f","url":"simulation/images/arrow.png"},{"revision":"2a7c5ed822159ae0e118d1c15738ef02","url":"simulation/images/bluecwdull.svg"},{"revision":"caa2c9607b55ea3cb98c2db89796744b","url":"simulation/images/breadboard.png"},{"revision":"6eccc02d102147b04188e990a0cd0935","url":"simulation/images/capacitor.png"},{"revision":"b2502b148f2e393bb639337821127b40","url":"simulation/images/circuit1.png"},{"revision":"27ea18e885996d61a1b6dbc85218a26b","url":"simulation/images/circuit2.png"},{"revision":"f751213277795c2558d2a3bb34becf34","url":"simulation/images/circuit3.png"},{"revision":"9fa3e255c9f8c95e8313c13bc4ae5a99","url":"simulation/images/circuit4.png"},{"revision":"8ba8c2b3493aba99147cbf344b78639b","url":"simulation/images/diode.png"},{"revision":"076e992ad34f581e89ab184d4fc5587a","url":"simulation/images/help.svg"},{"revision":"4cecbeb42d61e6d973413b81475285b3","url":"simulation/images/help1.png"},{"revision":"8fd3022865145500c341e469948a3244","url":"simulation/images/logo_nitk.png"},{"revision":"7e742eb10d63b8c002715dd897ac3628","url":"simulation/images/objective.png"},{"revision":"cb6004321b642c8e312f40637a049bf1","url":"simulation/images/opamp.png"},{"revision":"1980db6d8eb2d4b41534a0ad3708051d","url":"simulation/images/oscilloscope.png"},{"revision":"939ecea00fbddca264eeda21f6da257a","url":"simulation/images/resistor.png"},{"revision":"6d9627893394a46e7aaabb052bda8f2d","url":"simulation/images/slider_handles.png"},{"revision":"aaa2a64b825fe3988aef7cba4001f63c","url":"simulation/images/solution.png"},{"revision":"fb56d7a5af63c316bbde48ddce9afb52","url":"simulation/images/transistor.png"},{"revision":"ace730d201f6f2d2bcd3de0d3803ab1e","url":"simulation/index.html"},{"revision":"84ca747eb5f076445ff836de49608628","url":"simulation/js/jquery-3.6.0.js"},{"revision":"5da2fa2a91f7059b60e7fd508be63d02","url":"simulation/js/jquery-ui.js"},{"revision":"08a481084856867d371586cbf8e835ef","url":"simulation/js/jquery.ui.touch-punch.js"},{"revision":"9b9e5df5ef16f8fdd3e65c14e2149f1f","url":"simulation/js/jquery.ui.touch-punch.min.js"},{"revision":"5e0ba4859df43da75c958938570a1220","url":"simulation/js/script.js"},{"revision":"c98bf1427cf1bac09337a078e413a6b3","url":"theory.html"},{"revision":"86c6d2408ae3efa3bbe9fefd770e8ee4","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );