webpackJsonp([0],{

/***/ 22:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 22;

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 24;

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/home/home.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_audio__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(_audioProvider) {
        this._audioProvider = _audioProvider;
        this.myTracks = [{
                src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
                artist: 'John Mayer',
                title: 'Why Georgia',
                art: 'assets/img/johnmayer.jpg',
                preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
            },
            {
                src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
                artist: 'John Mayer',
                title: 'Who Says',
                art: 'assets/img/johnmayer.jpg',
                preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
            }];
    }
    HomePage.prototype.ngAfterContentInit = function () {
        // get all tracks managed by AudioProvider so we can control playback via the API
        this.allTracks = this._audioProvider.tracks;
    };
    HomePage.prototype.playSelectedTrack = function () {
        // use AudioProvider to control selected track 
        this._audioProvider.play(this.selectedTrack);
    };
    HomePage.prototype.pauseSelectedTrack = function () {
        // use AudioProvider to control selected track 
        this._audioProvider.pause(this.selectedTrack);
    };
    HomePage.prototype.onTrackFinished = function (track) {
        console.log('Track finished', track);
    };
    return HomePage;
}());
HomePage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-home',template:/*ion-inline-start:"/Users/chowdhza/Documents/Ionic3Angular4AudioTest/audioTest/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n    <audio-track #audio *ngFor="let track of myTracks" [track]="track" (onFinish)="onTrackFinished($event)">\n      <ion-item>\n        <ion-thumbnail item-left>\n          <img src="{{audio.art}}">\n          <audio-track-play dark [audioTrack]="audio">\n            <ion-spinner></ion-spinner>\n          </audio-track-play>\n        </ion-thumbnail>\n        <div item-content style="width:100%">\n          <p><strong>{{audio.title}}</strong> &#x26AC; <em>{{audio.artist}}</em></p>\n          <audio-track-progress-bar duration progress [audioTrack]="audio"></audio-track-progress-bar>\n          <em style="font-size:.5em">Track ID: {{audio.id}}</em>\n        </div>\n      </ion-item>\n    </audio-track>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/chowdhza/Documents/Ionic3Angular4AudioTest/audioTest/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_audio__["a" /* AudioProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(25);
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var app_component_MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = HomePage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
app_component_MyApp = app_component___decorate([
    app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({template:/*ion-inline-start:"/Users/chowdhza/Documents/Ionic3Angular4AudioTest/audioTest/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/chowdhza/Documents/Ionic3Angular4AudioTest/audioTest/src/app/app.html"*/
    }),
    app_component___metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], app_component_MyApp);

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_audio__ = __webpack_require__(28);
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = app_module___decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */]({
        declarations: [
            app_component_MyApp,
            HomePage
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_audio__["b" /* IonicAudioModule */].forRoot({ provide: __WEBPACK_IMPORTED_MODULE_7_ionic_audio__["a" /* AudioProvider */], useFactory: __WEBPACK_IMPORTED_MODULE_7_ionic_audio__["c" /* audioProviderFactory */] }),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(app_component_MyApp)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            app_component_MyApp,
            HomePage
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            app_module___WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map
// CONCATENATED MODULE: ./src/app/main.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(30);


__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ })

},[29]);
//# sourceMappingURL=main.js.map