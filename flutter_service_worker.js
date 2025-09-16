'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eea4c92593a1576353edf8489be19105",
".git/config": "6197096430f51590d7212641be0b89ab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "970cad536c1f0cc125e38602fb83849f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d29bb33df745d0ee3a65739ffdfcb6e4",
".git/logs/refs/heads/main": "c4460c5086692541799adfe61b659478",
".git/logs/refs/remotes/origin/main": "ef4feda11320e30f583c61930334e30c",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/6051935e8926b54dbb35e007a8b77c183024b3": "d230c3c1f23f555ae75009ac69a59b73",
".git/objects/06/84bbe4e1b7ccfae262a9535af884a703d1b14d": "ee74b9f1ea0e12436ec0266832baf63d",
".git/objects/0d/9b491b071e734d6f1b6e8f2806c7b055645959": "9ff992df45cf072fcf4e00d974b9363c",
".git/objects/10/403fed1bbb0a83303a7a82c78228bf26d341e0": "791470355ad5624e50dec7e4a6713b3b",
".git/objects/10/7e360f6eb366e75880c35ec592708f659f2ca0": "473ddbe2aec9ca0653f41ac26f48b226",
".git/objects/12/b536a3c60a0371a704d5e65b0e8e319c720327": "b0de406fedaebc9be660ef222ebd4f63",
".git/objects/13/31be22c86c44b0151e3346f8e0a606de884280": "f47a752fdf539bf1666f3bbb61a8a848",
".git/objects/14/5fcf4badced4a2c57038de50c742bc2c7f442c": "d61e33bd5e1321eb0ee681264a9fa486",
".git/objects/19/ff8630b7b1350c96c2ba7a72cf341248b366cd": "1e3c0490d69bd08f681dcb72dd8e4d82",
".git/objects/1a/1b2374a581818f52d4515d94c0940c1299943a": "260f187d35b6580ea6bbe10222a6b1ee",
".git/objects/1b/20957acb3e37d7a7c1e270011339a5f188f997": "1404df34624bb23c139d4fa5fd7b0b82",
".git/objects/1b/55e3157ae5a361678363f7d22f067f6cb2f08c": "d4bbb6e5af2dcb474dfb907078b188d8",
".git/objects/21/2bb4794568fcc339ea145df9e8b64649359814": "d331d8313052841801e422fa8e44b414",
".git/objects/21/db0e609499adc230934cd7fb430bd655201db9": "5fb73c692c676f5be532187b22f36a5e",
".git/objects/2b/8edec0272e22e94d95ae5c30fe1973b64e6962": "172782651567b0e02da98b686d6c126f",
".git/objects/2f/8892f919414592251fa9e4ea1b5036c0f08230": "4394189df06e2c4da111a1317e880e76",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/33/cc6b821be4570410d424736f3f8d9aa12a700f": "98682a7577a3bfa9fd8740e43a842b77",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3e/0fb7623ca36e046e102bf0214f38af8f7032ae": "78d0d876cff1370f461d7e8112c57136",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/2d0054e4d491b8e89918f048eb5c4425c50f1f": "f0a5017ac0d3318d5e4872b305139c19",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b968a882b7bf9659175a96831ddcaf5d72f2ad": "96db738a8a40bf7c47e17235c458a01d",
".git/objects/4a/3937dd53553706eda82ac8d3fe89321c6e3430": "501bf0f7acd174085668113cb7aa8c6f",
".git/objects/4c/aded65fd93baa83542c927dc01426368f3e0d9": "ccc69826f723d3ed5a12c08cbd63e3d0",
".git/objects/4c/b9d4608627a128153e66548fabc860629f18a5": "c0df35ab736855e85f01152093aaa658",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/d5ce9b43d31c2a09cc87b710d18f65e48ca2db": "3d3c8d231c8411d109a8b8f93daec649",
".git/objects/50/5e0a9e60eeeb1260f45845f127f13901a39ac9": "0fe3acc9c3d95e2723ad64f184f6982a",
".git/objects/51/94dcfe32bf2ddb4beb9a892b62ee7139b4bc5e": "1de6973f079efc5fd8b6823f29d26fc1",
".git/objects/54/b5cdc8064b43862a24aff8e0a067cdb38a9225": "111f122c475982d152d23243191477d8",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5c/af37b135e7e0423d01b3645c4385c790345ae2": "caadf9e440d85af66c0f6c26f11960fe",
".git/objects/5e/8edb84da6add73e508d872287e2971e364b7f1": "4c098ba270849af2adf17337afc4c23d",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/dbf67a19f0cec36eb53a1514d0a849c15cc934": "0e0a8b68008abd285384a5a0ca58917b",
".git/objects/63/f3f7a2bda31569b873aa8e3d6ee93a1885c926": "1040912e4554ac851bea714eedc5a9d9",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/7d900486bccbaaf660cd206f2c3cda1b7df869": "208fc2293274860545de5de9e16fbc34",
".git/objects/66/5b2870dc8828db546d1b75909dba89439a8f88": "a02340bb0aa40cdd26d09289c809d692",
".git/objects/69/09f175a01b2a7cbd2c24809d3408ff2f723873": "a21f168f1e55be8841f0d15d76b67376",
".git/objects/69/55e7cfc50084d6f9cada6fc9dfa44e977fd173": "978b32c1a71953902dbefb62dec9f946",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/e149f843366f972b691677b9c4921ab67c6432": "32319e3a82dda910f9b9336c66643b7f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/73/9d224ebff5e6cc377319c73ef35ed1b766a415": "3321662a621e79fa377798234d04b1a4",
".git/objects/7a/24a2e6d78f132c26df315068a6fb73ae109dbf": "eb254f8af3828a7b8ed5aa519442c4ea",
".git/objects/7b/b46d19365fc505398de320f4f93b307445549c": "b3ad24c283e2fa5c93067e44570343a3",
".git/objects/85/29ad90f8d67ed41ef73c1dfdd5b50be1b4cde0": "aba7d30634eb9d56c065b102c87c0cfd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/c47114aaf1536a8c8e60d8fc487a943dce41f7": "715d236179d1bcdaa0effb29cc61c97d",
".git/objects/96/76f3cb90b4aec6593a9fae16216f9c5922a665": "0c7e5d537cea7e598936abf2dac7802e",
".git/objects/98/8a108002ad6da52f62736c21b29d665569958e": "f0dde09d1db6fd0ec5d6c2bf17618634",
".git/objects/9b/4421bf8dd30ee7c7cf8100fa2d43a59ad57eb6": "fb8817ed8329d65cd1736e5229483666",
".git/objects/a1/4f47b4302613132f710159bf7da284056774d2": "e4b09288ae16f723f563ecd785a98c75",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/e84966c1f57560dea2e08448a55630fdb6952c": "ddfd32c3b1e3dadbb985734658f13750",
".git/objects/c0/46716a72fb947725da625830263e93492db9c3": "a69530d69006f6c2111637e852429b69",
".git/objects/c3/58f8ca3a489c6a02f79db2d277d46963a74b9b": "68d0fb0e6afd1e9aa3afee2e623bf610",
".git/objects/c8/8575ac3697a5731a984af09161431867f1e283": "e73b5ce437a171eec75667f04cc23a24",
".git/objects/c9/5dba55853a351e3d44769910c067484e4f446e": "1528e1ccd965dcf8de379a7ef81ff189",
".git/objects/cd/c1df5a95b5df12a4e33dee75b3d84ddc868a6f": "c5cc4e20817ff0d02b121a2220914d14",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/1a0652a66e2a24a947c66370a97f7a602af884": "248b960a8be641849504708bcf6959da",
".git/objects/df/970e3a5d9bc542a523e8027e7b3d2510969631": "14f060a3807ffd22122216b2398dd9bc",
".git/objects/e2/004b05455f94d1f85caefd26249fd7575ceaa9": "75e99c5dac07e438d3c430744328f7ec",
".git/objects/e3/1baeff1c184f5cbb00068f566f1407488038d7": "dc96ac0560f2f76c3896f51fd77cd50d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/fabf7528753b0f3b08a4afb54ae16552aa8ed4": "bb3f6ebf23f3b09e2244b9032308923b",
".git/objects/ec/5abbbb0e20ba9b68c3843e369423415f14e2ca": "a1c61af73724071c130b0a47bd1b8845",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/095c47c483272a0ba3c580b0accaa66e98886e": "427505136070ff3cd739376e9b81b270",
".git/objects/f0/8cb616515c0a9f035613c63694c2e1b2504114": "76c15d85218d06383a57aa3e2b515bad",
".git/objects/f1/c0334d9e10d3dbdd65e1101102b46e32a0cbc6": "20ab013f4dfcdd410f6f076dc98ca4a4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/c181ca45e28a5ef2740f50d61efae12aa756cc": "4df6ae8c084ad97f351572379017a53e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/bd13d08289a47aa5deef86acb522dbf3ca9634": "61d05f165c9e4be3e1ac2193657c6a2d",
".git/refs/heads/main": "aab318c9b9c124d71773c35006cd12ed",
".git/refs/remotes/origin/main": "aab318c9b9c124d71773c35006cd12ed",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a33f987cde4becc5255ca33eb1da2a89",
"assets/NOTICES": "801b9071543607c1d4f3cca9116d1cee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "f359834b67c51e3f6349c137a8079d83",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e003ec965864b99bb8a63d2f462603e8",
"/": "e003ec965864b99bb8a63d2f462603e8",
"main.dart.js": "d38bcad30342499511a24bc7dc0cfa49",
"manifest.json": "860cbfa2d4a25aa7c9b765242f9116bb",
"version.json": "f38947f3d7c8622e18c1d2635fc7fe3b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
