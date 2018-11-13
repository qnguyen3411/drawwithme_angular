(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_drawchat_drawchat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/drawchat/drawchat.component */ "./src/app/components/drawchat/drawchat.component.ts");
/* harmony import */ var _components_hub_hub_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hub/hub.component */ "./src/app/components/hub/hub.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'draw/:id', component: _components_drawchat_drawchat_component__WEBPACK_IMPORTED_MODULE_2__["DrawchatComponent"] },
    { path: 'hub', component: _components_hub_hub_component__WEBPACK_IMPORTED_MODULE_3__["HubComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/hub' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainContainer {\n  height:99.5vh;\n  width: 100vw;\n  \n}\napp-roomlist {\n  position: relative;\n  vertical-align: top;\n  display: inline-block;\n  height: 100%;\n  width: 300px;\n  overflow: scroll;\n}\napp-room {\n  vertical-align: top;\n  display: inline-block;\n  height:100%;\n  width: calc(100% - 300px);\n  margin-right: -10px;\n  overflow: scroll;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loginform/loginform.component */ "./src/app/components/loginform/loginform.component.ts");
/* harmony import */ var _components_signupform_signupform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/signupform/signupform.component */ "./src/app/components/signupform/signupform.component.ts");
/* harmony import */ var _components_createroomform_createroomform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/createroomform/createroomform.component */ "./src/app/components/createroomform/createroomform.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(modalService) {
        this.modalService = modalService;
        this.title = 'public';
    }
    AppComponent.prototype.showLoginForm = function () {
        this.bsModalRef = this.modalService.show(_components_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_1__["LoginFormComponent"]);
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    AppComponent.prototype.showSignupForm = function () {
        this.bsModalRef = this.modalService.show(_components_signupform_signupform_component__WEBPACK_IMPORTED_MODULE_2__["SignupFormComponent"]);
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    AppComponent.prototype.showCreateRoomForm = function () {
        this.bsModalRef = this.modalService.show(_components_createroomform_createroomform_component__WEBPACK_IMPORTED_MODULE_3__["CreateRoomFormComponent"]);
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/room/room.component */ "./src/app/components/room/room.component.ts");
/* harmony import */ var _components_roomlist_roomlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/roomlist/roomlist.component */ "./src/app/components/roomlist/roomlist.component.ts");
/* harmony import */ var _components_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/loginform/loginform.component */ "./src/app/components/loginform/loginform.component.ts");
/* harmony import */ var _components_signupform_signupform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signupform/signupform.component */ "./src/app/components/signupform/signupform.component.ts");
/* harmony import */ var _components_createroomform_createroomform_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/createroomform/createroomform.component */ "./src/app/components/createroomform/createroomform.component.ts");
/* harmony import */ var _components_hub_hub_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/hub/hub.component */ "./src/app/components/hub/hub.component.ts");
/* harmony import */ var _components_playback_playback_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/playback/playback.component */ "./src/app/components/playback/playback.component.ts");
/* harmony import */ var _components_drawchat_drawchat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/drawchat/drawchat.component */ "./src/app/components/drawchat/drawchat.component.ts");
/* harmony import */ var _components_drawchat_canvas_drawchat_canvas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/drawchat-canvas/drawchat-canvas.component */ "./src/app/components/drawchat-canvas/drawchat-canvas.component.ts");
/* harmony import */ var _components_drawchat_sliders_drawchat_sliders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/drawchat-sliders/drawchat-sliders.component */ "./src/app/components/drawchat-sliders/drawchat-sliders.component.ts");
/* harmony import */ var _components_drawchat_palette_drawchat_palette_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/drawchat-palette/drawchat-palette.component */ "./src/app/components/drawchat-palette/drawchat-palette.component.ts");
/* harmony import */ var _components_drawchat_timer_drawchat_timer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/drawchat-timer/drawchat-timer.component */ "./src/app/components/drawchat-timer/drawchat-timer.component.ts");
/* harmony import */ var _components_drawchat_tools_drawchat_tools_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/drawchat-tools/drawchat-tools.component */ "./src/app/components/drawchat-tools/drawchat-tools.component.ts");
/* harmony import */ var _components_drawchat_userlist_drawchat_userlist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/drawchat-userlist/drawchat-userlist.component */ "./src/app/components/drawchat-userlist/drawchat-userlist.component.ts");
/* harmony import */ var _components_drawchat_chat_drawchat_chat_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/drawchat-chat/drawchat-chat.component */ "./src/app/components/drawchat-chat/drawchat-chat.component.ts");
/* harmony import */ var _components_drawchat_disconnect_modal_drawchat_disconnect_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/drawchat-disconnect-modal/drawchat-disconnect-modal.component */ "./src/app/components/drawchat-disconnect-modal/drawchat-disconnect-modal.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_drawchat_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/drawchat.service */ "./src/app/services/drawchat.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _services_sockets_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/sockets.service */ "./src/app/services/sockets.service.ts");
/* harmony import */ var _services_drawchat_canvas_data_cache_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/drawchat-canvas-data-cache.service */ "./src/app/services/drawchat-canvas-data-cache.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// COMPONENTS
















// SERVICES





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_room_room_component__WEBPACK_IMPORTED_MODULE_7__["RoomComponent"],
                _components_roomlist_roomlist_component__WEBPACK_IMPORTED_MODULE_8__["RoomlistComponent"],
                _components_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"],
                _components_signupform_signupform_component__WEBPACK_IMPORTED_MODULE_10__["SignupFormComponent"],
                _components_createroomform_createroomform_component__WEBPACK_IMPORTED_MODULE_11__["CreateRoomFormComponent"],
                _components_drawchat_drawchat_component__WEBPACK_IMPORTED_MODULE_14__["DrawchatComponent"],
                _components_hub_hub_component__WEBPACK_IMPORTED_MODULE_12__["HubComponent"],
                _components_playback_playback_component__WEBPACK_IMPORTED_MODULE_13__["PlaybackComponent"],
                _components_drawchat_canvas_drawchat_canvas_component__WEBPACK_IMPORTED_MODULE_15__["DrawchatCanvasComponent"],
                _components_drawchat_sliders_drawchat_sliders_component__WEBPACK_IMPORTED_MODULE_16__["DrawchatSlidersComponent"],
                _components_drawchat_palette_drawchat_palette_component__WEBPACK_IMPORTED_MODULE_17__["DrawchatPaletteComponent"],
                _components_drawchat_timer_drawchat_timer_component__WEBPACK_IMPORTED_MODULE_18__["DrawchatTimerComponent"],
                _components_drawchat_userlist_drawchat_userlist_component__WEBPACK_IMPORTED_MODULE_20__["DrawchatUserlistComponent"],
                _components_drawchat_chat_drawchat_chat_component__WEBPACK_IMPORTED_MODULE_21__["DrawchatChatComponent"],
                _components_drawchat_disconnect_modal_drawchat_disconnect_modal_component__WEBPACK_IMPORTED_MODULE_22__["DrawchatDisconnectModalComponent"],
                _components_drawchat_tools_drawchat_tools_component__WEBPACK_IMPORTED_MODULE_19__["DrawchatToolsComponent"],
            ],
            imports: [
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            entryComponents: [
                _components_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_9__["LoginFormComponent"],
                _components_signupform_signupform_component__WEBPACK_IMPORTED_MODULE_10__["SignupFormComponent"],
                _components_createroomform_createroomform_component__WEBPACK_IMPORTED_MODULE_11__["CreateRoomFormComponent"],
                _components_drawchat_disconnect_modal_drawchat_disconnect_modal_component__WEBPACK_IMPORTED_MODULE_22__["DrawchatDisconnectModalComponent"]
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_23__["UserService"],
                _services_drawchat_service__WEBPACK_IMPORTED_MODULE_24__["DrawchatService"],
                _services_session_service__WEBPACK_IMPORTED_MODULE_25__["SessionService"],
                _services_sockets_service__WEBPACK_IMPORTED_MODULE_26__["SocketsService"],
                _services_drawchat_canvas_data_cache_service__WEBPACK_IMPORTED_MODULE_27__["DrawchatCanvasDataCacheService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/createroomform/createroomform.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/createroomform/createroomform.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/createroomform/createroomform.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/createroomform/createroomform.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Room name:</label>\n      <input class=\"form-control\" name=\"name\" [(ngModel)]=\"postData.name\" />\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"tags\">Description:</label>\n      <textarea \n        class=\"form-control\" \n        rows=\"4\" \n        name=\"description\" \n        [(ngModel)]=\"postData.description\"\n      >\n      </textarea>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"tags\">Tags (space separated):</label>\n      <input class=\"form-control\" name=\"tagStr\" [(ngModel)]=\"tagStr\" />\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\n</div>"

/***/ }),

/***/ "./src/app/components/createroomform/createroomform.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/createroomform/createroomform.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateRoomFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoomFormComponent", function() { return CreateRoomFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _services_drawchat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/drawchat.service */ "./src/app/services/drawchat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateRoomFormComponent = /** @class */ (function () {
    function CreateRoomFormComponent(bsModalRef, _drawChatService) {
        this.bsModalRef = bsModalRef;
        this._drawChatService = _drawChatService;
        this.formDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.postData = {
            name: "",
            description: "",
            tags: ["test", "uhh", "test"]
        };
        this.tagStr = "";
    }
    CreateRoomFormComponent.prototype.ngOnInit = function () {
        this.title = "Make a new room!";
    };
    CreateRoomFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.tagStr = this.tagStr.replace(/[^a-zA-Z0-9\ ]/g, "");
        this.postData.tags = this.tagStr.split(" ");
        this._drawChatService
            .createRoom(this.postData)
            .subscribe(function (response) {
            if (response['status'] === 'success') {
                _this.formDone.emit(response['data']);
                _this.bsModalRef.hide();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CreateRoomFormComponent.prototype, "formDone", void 0);
    CreateRoomFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createroomform',
            template: __webpack_require__(/*! ./createroomform.component.html */ "./src/app/components/createroomform/createroomform.component.html"),
            styles: [__webpack_require__(/*! ./createroomform.component.css */ "./src/app/components/createroomform/createroomform.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _services_drawchat_service__WEBPACK_IMPORTED_MODULE_2__["DrawchatService"]])
    ], CreateRoomFormComponent);
    return CreateRoomFormComponent;
}());



/***/ }),

/***/ "./src/app/components/drawchat-canvas/drawchat-canvas.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/drawchat-canvas/drawchat-canvas.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::-webkit-scrollbar {\n  width: 15px;  /* for vertical scrollbars */\n  height: 15px; /* for horizontal scrollbars */\n}\n\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n::-webkit-scrollbar-thumb {\n  border-bottom: 1px solid rgb(214, 210, 210);\n  border-right: 1px solid rgb(214, 210, 210);\n  background: rgba(0, 0, 0, 0.8);\n}\n\n#canvasContainer {\n  position: relative;\n  width:100%;\n  height:100%;\n  overflow: scroll;\n  cursor: none;\n}\n\n#canvasContainer > * {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n}\n\n#base {\n  background-color: white;\n  z-index: 0; \n}\n\n"

/***/ }),

/***/ "./src/app/components/drawchat-canvas/drawchat-canvas.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/drawchat-canvas/drawchat-canvas.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n  id=\"canvasContainer\" \n  #container \n  (mouseenter)=\"onMouseEnter()\"\n  (mousedown)=\"onMouseDown($event)\" \n  (mousemove)=\"onMouseMove($event)\" \n  (mouseup)=\"onMouseUp()\"\n  (mouseleave)=\"onMouseLeave()\"\n  >\n\n  <canvas width=\"1365\" height=\"768\" id=\"base\" [ngStyle]=\"{zoom: currZoom}\" #base></canvas>\n  <canvas width=\"1365\" height=\"768\" id=\"self\" [ngStyle]=\"{zoom: currZoom}\" #self></canvas>\n  \n  <svg width=\"1365\" height=\"768\" xmlns=\"http://www.w3.org/2000/svg\" [ngStyle]=\"{zoom: currZoom}\">\n    <circle \n      stroke=\"black\" stroke-width=\"1\" fill=\"none\"\n      [attr.cx]=\"myPaintCursor.x\" \n      [attr.cy]=\"myPaintCursor.y\" \n      [attr.r]=\"myPaintCursor.size / 2\"\n      [attr.display]=\"myPaintCursor.isVisible ? 'block' : 'none'\"/>\n      \n      <circle *ngFor=\"let peer of peerList | keyvalue\"\n      stroke=\"black\" stroke-width=\"1\" fill=\"none\"\n      [attr.cx]=\"peer.value['cursor'].x\" \n      [attr.cy]=\"peer.value['cursor'].y\" \n      [attr.r]=\"peer.value['cursor'].size / 2\"\n      [attr.display]=\"peer.value['cursor'].isVisible ? 'block' : 'none'\"/>\n  </svg>\n  \n  <canvas *ngFor=\"let peer of peerList | keyvalue\"\n    [attr.id]=\"peer.key\"\n    width=\"1365\" height=\"768\" \n    [ngStyle]=\"{zoom: currZoom}\" \n  ></canvas>\n</div>"

/***/ }),

/***/ "./src/app/components/drawchat-canvas/drawchat-canvas.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/drawchat-canvas/drawchat-canvas.component.ts ***!
  \*************************************************************************/
/*! exports provided: DrawchatCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatCanvasComponent", function() { return DrawchatCanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_draw_modules_paintcursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/draw_modules/paintcursor */ "./src/app/draw_modules/paintcursor.ts");
/* harmony import */ var src_app_draw_modules_observablepaintcursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/draw_modules/observablepaintcursor */ "./src/app/draw_modules/observablepaintcursor.ts");
/* harmony import */ var src_app_services_mousepos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mousepos.service */ "./src/app/services/mousepos.service.ts");
/* harmony import */ var src_app_services_drawchat_brush_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/drawchat-brush.service */ "./src/app/services/drawchat-brush.service.ts");
/* harmony import */ var src_app_services_sockets_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/sockets.service */ "./src/app/services/sockets.service.ts");
/* harmony import */ var src_app_services_window_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/window.service */ "./src/app/services/window.service.ts");
/* harmony import */ var src_app_services_drawchat_canvas_data_cache_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/drawchat-canvas-data-cache.service */ "./src/app/services/drawchat-canvas-data-cache.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var DrawchatCanvasComponent = /** @class */ (function () {
    function DrawchatCanvasComponent(mouse, socket, brushSettings, window, cache) {
        this.mouse = mouse;
        this.socket = socket;
        this.brushSettings = brushSettings;
        this.window = window;
        this.cache = cache;
        this.currZoom = 1;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.peerList = {};
        this.strokeCounter = 0;
        this.drawConnection = this.socket.drawModule;
    }
    DrawchatCanvasComponent.prototype.ngOnInit = function () {
        this.container = this.canvasContainerRef.nativeElement;
        this.baseCtx = this.baseCanvasRef.nativeElement.getContext('2d');
        this.selfCtx = this.selfCanvasRef.nativeElement.getContext('2d');
        this.myPaintCursor = new src_app_draw_modules_observablepaintcursor__WEBPACK_IMPORTED_MODULE_4__["ObservablePaintCursor"](this.baseCtx).setUpperLayer(this.selfCtx);
        this.trackMouse = this.mouse.getMousePosTracker(this.baseCtx.canvas);
        this.subscribeToWindowEvents();
        this.subscribeToSelfCursorEvents();
        this.subscribeToBrushChanges();
        this.subscribeToRoomEvents();
        this.subscribeToCanvasEvents();
    };
    DrawchatCanvasComponent.prototype.ngOnDestroy = function () {
        this.destroy.next(true);
        this.destroy.unsubscribe();
        this.onLeave();
    };
    DrawchatCanvasComponent.prototype.subscribeToWindowEvents = function () {
        this.window.onWindowUnload()
            .subscribe(this.onLeave.bind(this));
    };
    DrawchatCanvasComponent.prototype.onLeave = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(Object.keys(this.peerList).length === 0)) return [3 /*break*/, 2];
                        // Cache data uri
                        this.cache.setCache(this.baseCtx.canvas.toDataURL(), this.currRoom);
                        // Snapshot signal
                        _b = (_a = this.socket.roomModule).sendSnapshot;
                        _c = {};
                        return [4 /*yield*/, this.getCanvasData()];
                    case 1:
                        // Snapshot signal
                        _b.apply(_a, [(_c.data = _d.sent(), _c)]);
                        _d.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DrawchatCanvasComponent.prototype.subscribeToSelfCursorEvents = function () {
        var _this = this;
        this.myPaintCursor.onStart.subscribe(this.drawConnection.emitCanvasActionStart
            .bind(this.drawConnection));
        this.myPaintCursor.onMove.subscribe(this.drawConnection.emitMousePosUpdate
            .bind(this.drawConnection));
        this.myPaintCursor.onEnd.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { _this.strokeCounter++; }))
            .subscribe(this.drawConnection.emitCanvasActionEnd
            .bind(this.drawConnection));
    };
    DrawchatCanvasComponent.prototype.subscribeToBrushChanges = function () {
        this.brushSettings.colorChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.myPaintCursor.setColor
            .bind(this.myPaintCursor));
        this.brushSettings.sizeChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.myPaintCursor.setSize
            .bind(this.myPaintCursor));
        this.brushSettings.toolChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.myPaintCursor.setTool
            .bind(this.myPaintCursor));
    };
    DrawchatCanvasComponent.prototype.subscribeToRoomEvents = function () {
        var _this = this;
        this.socket.roomModule
            .onPeerJoin()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.addPeerCursor.bind(this));
        this.socket.roomModule
            .onReceivingPeerInfo()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.addPeerCursor.bind(this));
        this.socket.roomModule
            .onPeerLeave()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.removeFromPeerList.bind(this));
        this.socket.roomModule
            .onPeersCanvasRequest()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.shareCanvasWithPeer.bind(this));
        this.socket.roomModule
            .onCanvasDataReceived()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(this.receiveCanvasData.bind(this));
        this.socket.roomModule
            .onSnapshotPoll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.strokeCounter === 0) {
                            return [2 /*return*/];
                        }
                        _b = (_a = this.socket.roomModule).sendSnapshot;
                        _c = {};
                        return [4 /*yield*/, this.getCanvasData()];
                    case 1:
                        _b.apply(_a, [(_c.data = _d.sent(), _c)]);
                        return [2 /*return*/];
                }
            });
        }); });
        this.socket.roomModule
            .onSnapshotPollFinish()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(function () { _this.strokeCounter = 0; });
        this.socket.roomModule
            .onSnapshotSignal()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(this.fetchSnapshot.bind(this));
    };
    DrawchatCanvasComponent.prototype.removeFromPeerList = function (_a) {
        var id = _a.id;
        if (this.peerList[id]) {
            delete this.peerList[id];
        }
    };
    DrawchatCanvasComponent.prototype.addPeerCursor = function (_a) {
        var id = _a.id, username = _a.username;
        var cursor = new src_app_draw_modules_paintcursor__WEBPACK_IMPORTED_MODULE_3__["PaintCursor"](this.baseCtx).setLabel(username);
        this.peerList[id] = { username: username, cursor: cursor };
        // New Cursor needs an upper canvas that won't be generated yet
        // Keep checking until that canvas is generated
        this.checkForCanvas({ id: id, intervalInMs: 200 })
            .subscribe(function (foundCanvas) {
            return cursor.setUpperLayer(foundCanvas.getContext('2d'));
        });
    };
    DrawchatCanvasComponent.prototype.checkForCanvas = function (_a) {
        var _this = this;
        var id = _a.id, intervalInMs = _a.intervalInMs;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(intervalInMs)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return _this.findCanvasWithId(id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (found) { return found !== undefined; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (found) { return found; }));
    };
    DrawchatCanvasComponent.prototype.findCanvasWithId = function (id) {
        return Array.from(this.container.children)
            .find(function (val) { return val.id == id; });
    };
    DrawchatCanvasComponent.prototype.shareCanvasWithPeer = function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _c = (_b = this.socket.roomModule).emitCanvasData;
                        _d = { id: id };
                        return [4 /*yield*/, this.getCanvasData()];
                    case 1:
                        _c.apply(_b, [(_d.data = _e.sent(), _d)]);
                        return [2 /*return*/];
                }
            });
        });
    };
    DrawchatCanvasComponent.prototype.receiveCanvasData = function (_a) {
        var _this = this;
        var data = _a.data;
        var img = new Image();
        var url = URL.createObjectURL(new Blob([data], { type: 'image/png' }));
        img.onload = function () {
            _this.baseCtx.drawImage(img, 0, 0);
            URL.revokeObjectURL(url);
        };
        img.src = url;
    };
    DrawchatCanvasComponent.prototype.fetchSnapshot = function (_a) {
        var _this = this;
        var url = _a.url;
        var cachedData = this.cache.getCachedData(this.currRoom);
        var img = new Image();
        img.onload = function () {
            _this.baseCtx.drawImage(img, 0, 0);
        };
        img.crossOrigin = 'anonymous';
        img.src = cachedData || url;
    };
    DrawchatCanvasComponent.prototype.sendSnapshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.socket.roomModule).sendSnapshot;
                        _c = {};
                        return [4 /*yield*/, this.getCanvasData()];
                    case 1:
                        _b.apply(_a, [(_c.data = _d.sent(), _c)]);
                        return [2 /*return*/];
                }
            });
        });
    };
    DrawchatCanvasComponent.prototype.getCanvasData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.baseCtx.canvas.toBlob(function (blob) { resolve(blob); });
        });
    };
    DrawchatCanvasComponent.prototype.subscribeToCanvasEvents = function () {
        this.drawConnection
            .onPeersCursorSizeUpdate()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.updatePeersCursorSize.bind(this));
        this.drawConnection
            .onPeersMousePosUpdate()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.updatePeersMousePos.bind(this));
        this.drawConnection
            .onPeersCanvasActionStart()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.startPeerAction.bind(this));
        this.drawConnection
            .onPeersCanvasActionEnd()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.endPeerAction.bind(this));
    };
    DrawchatCanvasComponent.prototype.updatePeersCursorSize = function (_a) {
        var id = _a.id, data = _a.data;
        if (this.peerList[id] === undefined) {
            return;
        }
        this.getCursorByUserId(id).setSize(data);
    };
    DrawchatCanvasComponent.prototype.updatePeersMousePos = function (_a) {
        var id = _a.id, _b = _a.data, x = _b.x, y = _b.y;
        if (this.peerList[id] === undefined) {
            return;
        }
        this.getCursorByUserId(id).moveTo(x, y);
    };
    DrawchatCanvasComponent.prototype.startPeerAction = function (_a) {
        var id = _a.id, data = _a.data;
        if (this.peerList[id] === undefined) {
            return;
        }
        this.getCursorByUserId(id)
            .setColor(data['rgba'])
            .startAction();
    };
    DrawchatCanvasComponent.prototype.endPeerAction = function (_a) {
        var id = _a.id;
        if (this.peerList[id] === undefined) {
            return;
        }
        this.strokeCounter++;
        this.getCursorByUserId(id).endAction();
    };
    DrawchatCanvasComponent.prototype.getCursorByUserId = function (id) {
        return this.peerList[id]['cursor'];
    };
    // Personal events
    DrawchatCanvasComponent.prototype.onMouseEnter = function () {
        this.myPaintCursor.show();
    };
    DrawchatCanvasComponent.prototype.onMouseDown = function (e) {
        if (this.leftMouseIsDown(e)) {
            if (this.brushSettings.tool === 'EYEDROPPER') {
                var _a = this.trackMouse(e), x = _a.x, y = _a.y;
                var data = this.baseCtx.getImageData(x, y, 1, 1).data;
                this.brushSettings.changeColor([data[0], data[1], data[2]]);
            }
            else {
                this.myPaintCursor.startAction();
            }
        }
    };
    DrawchatCanvasComponent.prototype.onMouseMove = function (e) {
        var _a = this.trackMouse(e), x = _a.x, y = _a.y;
        if (this.brushSettings.tool === 'EYEDROPPER' && this.leftMouseIsDown(e)) {
            var data = this.baseCtx.getImageData(x, y, 1, 1).data;
            this.brushSettings.changeColor([data[0], data[1], data[2]]);
        }
        this.myPaintCursor.moveTo(x, y);
    };
    DrawchatCanvasComponent.prototype.onMouseUp = function () {
        this.endCurrentStroke();
    };
    DrawchatCanvasComponent.prototype.onMouseLeave = function () {
        this.endCurrentStroke();
        this.myPaintCursor.hide();
    };
    DrawchatCanvasComponent.prototype.endCurrentStroke = function () {
        if (this.myPaintCursor.hasOngoingAction()) {
            this.myPaintCursor.endAction();
        }
    };
    DrawchatCanvasComponent.prototype.leftMouseIsDown = function (e) {
        return e.button === 0 && e.buttons === 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", Object)
    ], DrawchatCanvasComponent.prototype, "canvasContainerRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('base'),
        __metadata("design:type", Object)
    ], DrawchatCanvasComponent.prototype, "baseCanvasRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('self'),
        __metadata("design:type", Object)
    ], DrawchatCanvasComponent.prototype, "selfCanvasRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DrawchatCanvasComponent.prototype, "currRoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DrawchatCanvasComponent.prototype, "currZoom", void 0);
    DrawchatCanvasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawchat-canvas',
            template: __webpack_require__(/*! ./drawchat-canvas.component.html */ "./src/app/components/drawchat-canvas/drawchat-canvas.component.html"),
            styles: [__webpack_require__(/*! ./drawchat-canvas.component.css */ "./src/app/components/drawchat-canvas/drawchat-canvas.component.css")],
            providers: [src_app_services_mousepos_service__WEBPACK_IMPORTED_MODULE_5__["MouseposService"], src_app_services_window_service__WEBPACK_IMPORTED_MODULE_8__["WindowService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_mousepos_service__WEBPACK_IMPORTED_MODULE_5__["MouseposService"],
            src_app_services_sockets_service__WEBPACK_IMPORTED_MODULE_7__["SocketsService"],
            src_app_services_drawchat_brush_service__WEBPACK_IMPORTED_MODULE_6__["DrawchatBrushService"],
            src_app_services_window_service__WEBPACK_IMPORTED_MODULE_8__["WindowService"],
            src_app_services_drawchat_canvas_data_cache_service__WEBPACK_IMPORTED_MODULE_9__["DrawchatCanvasDataCacheService"]])
    ], DrawchatCanvasComponent);
    return DrawchatCanvasComponent;
}());



/***/ }),

/***/ "./src/app/components/drawchat-chat/drawchat-chat.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/drawchat-chat/drawchat-chat.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#chatBox {\n  width: 100%;\n  height: calc(100% - 30px);\n  overflow: scroll;\n}\n\n#chatInput {\n  width: 100%;\n  height: 30px;\n  z-index: 3;\n}\n\np {\n  margin-left: 5px;\n  margin-bottom: 5px;\n  font-weight: bold;\n  font-size: 13px;\n  color: whitesmoke;\n}\n\n#chatInput:focus {\n  outline: 0px;\n}\n\n::-webkit-scrollbar {\n  width: 5px;  /* for vertical scrollbars */\n  height: 0px; /* for horizontal scrollbars */\n}\n\n::-webkit-scrollbar-track {\n  background: rgba(190, 190, 190, 0.267);\n}\n\n::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.616);\n}"

/***/ }),

/***/ "./src/app/components/drawchat-chat/drawchat-chat.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/drawchat-chat/drawchat-chat.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"chatBox\" #chatBox [scrollTop]=\"chatLog.length === 0 ? 0 : chatBoxElem.scrollHeight\">\n  <p *ngFor=\"let entry of chatLog\">\n    <span class=\"text-warning\">{{entry.username}} ({{entry.time | date:'shortTime'}})</span> : <br> {{entry.message}}\n  </p>\n</div>\n\n<input \n  id=\"chatInput\" \n  type=\"text\" \n  name=\"chatInput\" \n  [(ngModel)]=\"currInput\"\n  placeholder=\"New message...\"\n  (keydown)=\"onKeyDown($event)\">\n"

/***/ }),

/***/ "./src/app/components/drawchat-chat/drawchat-chat.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/drawchat-chat/drawchat-chat.component.ts ***!
  \*********************************************************************/
/*! exports provided: DrawchatChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatChatComponent", function() { return DrawchatChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_sockets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sockets.service */ "./src/app/services/sockets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrawchatChatComponent = /** @class */ (function () {
    function DrawchatChatComponent(socket) {
        this.socket = socket;
        this.peerList = {};
        this.chatLog = [];
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DrawchatChatComponent.prototype.ngOnInit = function () {
        this.subscribeToRoomEvents();
        this.subscribeToChatEvents();
    };
    DrawchatChatComponent.prototype.ngAfterViewInit = function () {
        this.chatBoxElem = this.chatBox.nativeElement;
    };
    DrawchatChatComponent.prototype.ngOnDestroy = function () {
        this.destroy.next(true);
        this.destroy.unsubscribe();
    };
    DrawchatChatComponent.prototype.subscribeToRoomEvents = function () {
        this.socket.roomModule.onPeerJoin()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy))
            .subscribe(this.addToPeerList.bind(this));
        this.socket.roomModule.onReceivingPeerInfo()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy))
            .subscribe(this.addToPeerList.bind(this));
        this.socket.roomModule.onPeerLeave()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy))
            .subscribe(this.removeFromPeerList.bind(this));
    };
    DrawchatChatComponent.prototype.addToPeerList = function (_a) {
        var username = _a.username, id = _a.id;
        this.peerList[id] = username;
    };
    DrawchatChatComponent.prototype.removeFromPeerList = function (_a) {
        var id = _a.id;
        if (this.peerList[id]) {
            delete this.peerList[id];
        }
    };
    DrawchatChatComponent.prototype.subscribeToChatEvents = function () {
        this.socket.chatModule.onNewMessage()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.formatMessage.bind(this)))
            .subscribe(this.appendMessageToChatlog.bind(this));
    };
    DrawchatChatComponent.prototype.formatMessage = function (_a) {
        var id = _a.id, data = _a.data;
        if (!this.peerList[id]) {
            return;
        }
        ;
        var username = this.peerList[id];
        return {
            username: username,
            time: new Date(),
            message: data
        };
    };
    DrawchatChatComponent.prototype.onKeyDown = function (event) {
        if (event.key === "Enter") {
            this.appendOwnMessage();
            this.sendMessage();
            this.currInput = "";
        }
    };
    DrawchatChatComponent.prototype.sendMessage = function () {
        this.socket.chatModule.emitNewMessage(this.currInput);
    };
    DrawchatChatComponent.prototype.appendOwnMessage = function () {
        this.appendMessageToChatlog({ username: "You", time: new Date(), message: this.currInput });
    };
    DrawchatChatComponent.prototype.appendMessageToChatlog = function (data) {
        this.chatLog.push(data);
        if (this.chatLog.length >= 30) {
            this.chatLog.shift();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatBox'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DrawchatChatComponent.prototype, "chatBox", void 0);
    DrawchatChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawchat-chat',
            template: __webpack_require__(/*! ./drawchat-chat.component.html */ "./src/app/components/drawchat-chat/drawchat-chat.component.html"),
            styles: [__webpack_require__(/*! ./drawchat-chat.component.css */ "./src/app/components/drawchat-chat/drawchat-chat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_sockets_service__WEBPACK_IMPORTED_MODULE_3__["SocketsService"]])
    ], DrawchatChatComponent);
    return DrawchatChatComponent;
}());



/***/ }),

/***/ "./src/app/components/drawchat-disconnect-modal/drawchat-disconnect-modal.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/drawchat-disconnect-modal/drawchat-disconnect-modal.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/drawchat-disconnect-modal/drawchat-disconnect-modal.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/drawchat-disconnect-modal/drawchat-disconnect-modal.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Disconnected</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form (submit)=\"onSubmit()\">\n      <h4>This room is either expired or not invalid.</h4>\n      <button type=\"submit\" class=\"btn btn-success\">OK</button>\n  \n    </form>\n  </div>\n  <div class=\"modal-footer\">\n  </div>"

/***/ }),

/***/ "./src/app/components/drawchat-disconnect-modal/drawchat-disconnect-modal.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/drawchat-disconnect-modal/drawchat-disconnect-modal.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DrawchatDisconnectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatDisconnectModalComponent", function() { return DrawchatDisconnectModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrawchatDisconnectModalComponent = /** @class */ (function () {
    function DrawchatDisconnectModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.formDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.postData = {
            name: "",
            description: "",
            tags: ["test", "uhh", "test"]
        };
        this.tagStr = "";
    }
    DrawchatDisconnectModalComponent.prototype.ngOnInit = function () {
        this.title = "Make a new room!";
    };
    DrawchatDisconnectModalComponent.prototype.onSubmit = function () {
        this.formDone.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DrawchatDisconnectModalComponent.prototype, "formDone", void 0);
    DrawchatDisconnectModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawchat-disconnect-modal',
            template: __webpack_require__(/*! ./drawchat-disconnect-modal.component.html */ "./src/app/components/drawchat-disconnect-modal/drawchat-disconnect-modal.component.html"),
            styles: [__webpack_require__(/*! ./drawchat-disconnect-modal.component.css */ "./src/app/components/drawchat-disconnect-modal/drawchat-disconnect-modal.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], DrawchatDisconnectModalComponent);
    return DrawchatDisconnectModalComponent;
}());



/***/ }),

/***/ "./src/app/components/drawchat-palette/drawchat-palette.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/drawchat-palette/drawchat-palette.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#palContainer {\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n}\n\n#paletteCanvas {\n  height: 100%;\n  width: 800px;\n}\n\n::-webkit-scrollbar\n{\n  width: 0px;  /* for vertical scrollbars */\n  height: 15px; /* for horizontal scrollbars */\n}\n\n::-webkit-scrollbar-track\n{\n  background: rgba(0, 0, 0, 0.363);\n}\n\n::-webkit-scrollbar-thumb\n{\n  border-top: 1px solid black;\n  background: rgb(236, 236, 236);\n}"

/***/ }),

/***/ "./src/app/components/drawchat-palette/drawchat-palette.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/drawchat-palette/drawchat-palette.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"palContainer\">\n<canvas \n  id=\"paletteCanvas\"\n  (mousedown)=\"onMouseDownOrMove($event)\"\n  (mousemove)=\"onMouseDownOrMove($event)\"\n  width=\"800\"\n  height=\"136\"\n  #palette>\n</canvas>\n</div>"

/***/ }),

/***/ "./src/app/components/drawchat-palette/drawchat-palette.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/drawchat-palette/drawchat-palette.component.ts ***!
  \***************************************************************************/
/*! exports provided: DrawchatPaletteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatPaletteComponent", function() { return DrawchatPaletteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_mousepos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mousepos.service */ "./src/app/services/mousepos.service.ts");
/* harmony import */ var _services_drawchat_brush_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/drawchat-brush.service */ "./src/app/services/drawchat-brush.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrawchatPaletteComponent = /** @class */ (function () {
    function DrawchatPaletteComponent(mouse, brush) {
        this.mouse = mouse;
        this.brush = brush;
    }
    DrawchatPaletteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var canvas = this.paletteRef.nativeElement;
        this.trackMouse = this.mouse.getMousePosTracker(canvas);
        this.palCtx = canvas.getContext('2d');
        var img = new Image();
        img.src = 'assets/palette.png';
        img.onload = function () {
            _this.palCtx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    };
    DrawchatPaletteComponent.prototype.onMouseDownOrMove = function (e) {
        if (e.buttons == 1) {
            var mousepos = this.trackMouse(e);
            this.getColorFromPalette(mousepos);
        }
    };
    DrawchatPaletteComponent.prototype.getColorFromPalette = function (_a) {
        var x = _a.x, y = _a.y;
        var data = this.palCtx.getImageData(x, y, 1, 1).data;
        this.brush.changeColor([data[0], data[1], data[2]]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('palette'),
        __metadata("design:type", Object)
    ], DrawchatPaletteComponent.prototype, "paletteRef", void 0);
    DrawchatPaletteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawchat-palette',
            template: __webpack_require__(/*! ./drawchat-palette.component.html */ "./src/app/components/drawchat-palette/drawchat-palette.component.html"),
            styles: [__webpack_require__(/*! ./drawchat-palette.component.css */ "./src/app/components/drawchat-palette/drawchat-palette.component.css")],
            providers: [src_app_services_mousepos_service__WEBPACK_IMPORTED_MODULE_1__["MouseposService"]]
        }),
        __metadata("design:paramtypes", [src_app_services_mousepos_service__WEBPACK_IMPORTED_MODULE_1__["MouseposService"],
            _services_drawchat_brush_service__WEBPACK_IMPORTED_MODULE_2__["DrawchatBrushService"]])
    ], DrawchatPaletteComponent);
    return DrawchatPaletteComponent;
}());



/***/ }),

/***/ "./src/app/components/drawchat-sliders/drawchat-sliders.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/drawchat-sliders/drawchat-sliders.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-size: 12px;\n  font-weight: bold;\n  color:whitesmoke;\n}\n\nbutton {\n  margin-bottom: 10px;\n  color: rgb(53, 56, 58);\n}\n\n.inactive {\n  opacity: 0.6;\n}\n\n#colorBox {\n  vertical-align: bottom;\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  border-radius: 5px;\n  border: 1px solid whitesmoke;\n  margin-bottom: 10px;\n  margin-left: 65px;\n  background-color: black;\n}\n\n.sliderContainer {\n  vertical-align: top;\n  display: inline-block;\n  width: 200px;\n  padding: 10px 10px 0px 10px;\n  height:100%;\n  background-color: rgb(53, 56, 58);\n}\n\n#brush {\n  padding-top: 40px;\n}\n\n.sliderInitial {\n  vertical-align: top;\n  width: 35px;\n  display: inline-block;\n}\n\n.sliderVal {\n  vertical-align: top;\n  width: 25px;\n  margin-left: 5px;\n  display: inline-block;\n\n}\n\ninput[type=range] {\n  height: 15px;\n  -webkit-appearance: none;\n  margin-top: 2px;\n  width: calc(100% - 65px);\n  background-color: #00000000\n}\n\ninput[type=range]:focus {\n  outline: none;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 5px;\n  cursor: pointer;\n  background-color: rgba(255, 255, 255, 0.63);\n  border-radius: 5px;\n  border: 1px solid #000000;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  border: 1px solid #000000;\n  height: 20px;\n  width: 13px;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, 0.842);\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -11px;\n}\n\ninput[type=range]::-moz-range-track {\n  width: 100%;\n  height: 5px;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.63);\n  border-radius: 5px;\n  border: 1px solid #000000;\n}\n\ninput[type=range]::-moz-range-thumb {\n  border: 1px solid #000000;\n  height: 15px;\n  width: 7px;\n  border-radius: 5px;\n  background: #FFFFFF;\n  cursor: pointer;\n}\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  height: 5px;\n  cursor: pointer;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n  background: rgba(255, 255, 255, 0.842);;\n  border: 1px solid #000000;\n  border-radius: 10px;\n  box-shadow: 1px 1px 1px #000000;\n}\n\ninput[type=range]::-ms-fill-upper {\n  background:rgba(255, 255, 255, 0.842);\n  border: 1px solid #000000;\n  border-radius: 10px;\n  box-shadow: 1px 1px 1px #000000;\n}\n\ninput[type=range]::-ms-thumb {\n  margin-top: 1px;\n  border: 1px solid #000000;\n  height: 15px;\n  width: 7px;\n  border-radius: 5px;\n  background: #FFFFFF;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/components/drawchat-sliders/drawchat-sliders.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/drawchat-sliders/drawchat-sliders.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"color\" class=\"sliderContainer\">\n  <button (click)=\"changeMode('rgb')\" [ngClass]=\"{'inactive': currMode === 'hsl' }\">RGB</button>\n  <button (click)=\"changeMode('hsl')\" [ngClass]=\"{'inactive': currMode === 'rgb' }\">HSL</button>\n  \n  <div \n    id=\"colorBox\" \n    [ngStyle]=\"{\n      'background-color': solidColorCssString() \n    }\">\n  </div>\n\n  <div class=\"slider\">\n    <label class=\"sliderInitial\">{{currMode == 'rgb' ? 'R' : 'H'}}</label>\n    <input \n      type=\"range\" \n      name=\"colorSlider1Val\" \n      [(ngModel)]=\"colorSlider1Val\" \n      (change)=\"updateColor()\"\n      min=\"1\" max=\"{{currMode == 'rgb' ? 255 : 360}}\">\n    <label class=\"sliderVal\">{{colorSlider1Val}}</label>\n  </div>\n\n  <div class=\"slider\">\n    <label class=\"sliderInitial\">{{currMode == 'rgb' ? 'G' : 'S'}}</label>\n    <input \n      type=\"range\" \n      name=\"colorSlider2Val\"\n      [(ngModel)]=\"colorSlider2Val\"\n      (change)=\"updateColor()\"\n      min=\"1\" max=\"{{currMode == 'rgb' ? 255 : 100}}\">\n    <label class=\"sliderVal\">{{colorSlider2Val}}</label>\n\n  </div>\n\n  <div class=\"slider\">\n    <label class=\"sliderInitial\">{{currMode == 'rgb' ? 'B' : 'L'}}</label>\n    <input \n      type=\"range\" \n      name=\"colorSlider3Val\"\n      [(ngModel)]=\"colorSlider3Val\"\n      (change)=\"updateColor()\"\n      min=\"1\" max=\"{{currMode == 'rgb' ? 255 : 100}}\">\n    <label class=\"sliderVal\">{{colorSlider3Val}}</label>\n  </div>\n\n</div>\n\n<div id=\"brush\" class=\"sliderContainer\">\n\n  <div class=\"slider\">\n    <label class=\"sliderInitial\">Alpha</label>\n    <input \n      type=\"range\" \n      name=\"alphaSliderVal\"\n      [(ngModel)]=\"alphaSliderVal\"\n      (change)=\"updateColor()\"\n      min=\"0\" max=\"1\" step=\"0.1\">\n    <label class=\"sliderVal\">{{alphaSliderVal}}</label>\n  </div>\n\n  <div class=\"slider\">\n    <label class=\"sliderInitial\">Size</label>\n    <input \n      type=\"range\" \n      name=\"sizeSliderVal\"\n      [(ngModel)]=\"sizeSliderVal\"\n      (change)=\"updateSize()\"\n      min=\"0\" max=\"100\">\n    <label class=\"sliderVal\">{{sizeSliderVal}}</label>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/drawchat-sliders/drawchat-sliders.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/drawchat-sliders/drawchat-sliders.component.ts ***!
  \***************************************************************************/
/*! exports provided: DrawchatSlidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatSlidersComponent", function() { return DrawchatSlidersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sockets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sockets.service */ "./src/app/services/sockets.service.ts");
/* harmony import */ var _services_drawchat_brush_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/drawchat-brush.service */ "./src/app/services/drawchat-brush.service.ts");
/* harmony import */ var _services_drawchat_color_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/drawchat-color.service */ "./src/app/services/drawchat-color.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrawchatSlidersComponent = /** @class */ (function () {
    function DrawchatSlidersComponent(_socket, brush, color) {
        this._socket = _socket;
        this.brush = brush;
        this.color = color;
        this.currMode = 'rgb';
        this.colorSlider1Val = 1;
        this.colorSlider2Val = 1;
        this.colorSlider3Val = 1;
        this.alphaSliderVal = 1;
        this.sizeSliderVal = 1;
    }
    DrawchatSlidersComponent.prototype.ngOnInit = function () {
        this.subscribeToColorChanges();
    };
    DrawchatSlidersComponent.prototype.subscribeToColorChanges = function () {
        var _this = this;
        this.brush.colorChanged.subscribe(function (colorInRgb) {
            _this.color.set({ rgbOrHsl: 'rgb', vals: colorInRgb });
            _this.setColorSliderVals(_this.color.get(_this.currMode));
        });
    };
    DrawchatSlidersComponent.prototype.updateColor = function () {
        this.color.set({ rgbOrHsl: this.currMode, vals: this.getColorSliderVals() });
        this.brush.changeColorAndAlpha(this.color.get('rgb').concat([this.alphaSliderVal]));
    };
    DrawchatSlidersComponent.prototype.updateSize = function () {
        this.brush.changeSize(this.sizeSliderVal);
        this._socket.drawModule.emitCursorSizeUpdate(this.brush.size);
    };
    DrawchatSlidersComponent.prototype.changeMode = function (newMode) {
        if (newMode !== 'rgb' && newMode !== 'hsl') {
            return;
        }
        if (this.currMode === newMode) {
            return;
        }
        this.setColorSliderVals(this.color.get(newMode));
        this.currMode = newMode;
    };
    DrawchatSlidersComponent.prototype.setColorSliderVals = function (_a) {
        var val1 = _a[0], val2 = _a[1], val3 = _a[2];
        this.colorSlider1Val = val1;
        this.colorSlider2Val = val2;
        this.colorSlider3Val = val3;
    };
    DrawchatSlidersComponent.prototype.getColorSliderVals = function () {
        return [
            this.colorSlider1Val,
            this.colorSlider2Val,
            this.colorSlider3Val,
        ];
    };
    DrawchatSlidersComponent.prototype.solidColorCssString = function () {
        if (this.currMode === 'rgb') {
            return "rgb(" + this.getColorSliderVals().join(',') + ")";
        }
        else if (this.currMode === 'hsl') {
            return "hsl(" + this.colorSlider1Val + ", " + this.colorSlider2Val + "%, " + this.colorSlider3Val + "%)";
        }
    };
    DrawchatSlidersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawchat-sliders',
            template: __webpack_require__(/*! ./drawchat-sliders.component.html */ "./src/app/components/drawchat-sliders/drawchat-sliders.component.html"),
            styles: [__webpack_require__(/*! ./drawchat-sliders.component.css */ "./src/app/components/drawchat-sliders/drawchat-sliders.component.css")],
            providers: [_services_drawchat_color_service__WEBPACK_IMPORTED_MODULE_3__["DrawchatColorService"]]
        }),
        __metadata("design:paramtypes", [_services_sockets_service__WEBPACK_IMPORTED_MODULE_1__["SocketsService"],
            _services_drawchat_brush_service__WEBPACK_IMPORTED_MODULE_2__["DrawchatBrushService"],
            _services_drawchat_color_service__WEBPACK_IMPORTED_MODULE_3__["DrawchatColorService"]])
    ], DrawchatSlidersComponent);
    return DrawchatSlidersComponent;
}());



/***/ }),

/***/ "./src/app/components/drawchat-timer/drawchat-timer.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/drawchat-timer/drawchat-timer.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  font-weight: bold;\n  font-size: 13px; \n}\n\n#tokenCountdown {\n  font-weight: bolder;\n  font-size: 25px;\n  margin-bottom: 5px;\n  padding-left: 10px;\n}\n\nimg {\n  width: 15px;\n  height: 15px;\n}\n\n#tokenButton {\n  width:40%;\n  border-radius: 5px;\n  margin-right: 10px;\n  margin-left: 10px;\n}"

/***/ }),

/***/ "./src/app/components/drawchat-timer/drawchat-timer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/drawchat-timer/drawchat-timer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p id=\"tokenCountdown\" class=\"text-warning\">{{ roomCountdown || '0h 0m 0s' }}</p>\n<!-- <p>{{ roomCountdown}}</p> -->\n<button class=\"btn-warning\" id=\"tokenButton\" (click)=\"consumeToken()\">\n  <img src=\"assets/clock.png\" alt=\"clock\">  x{{tokensRemaining}}\n</button>\n<span class=\"text-warning\" id=\"roomCountdown\"> {{tokenCountdown || '0h 0m 0s'}}</span>"

/***/ }),

/***/ "./src/app/components/drawchat-timer/drawchat-timer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/drawchat-timer/drawchat-timer.component.ts ***!
  \***********************************************************************/
/*! exports provided: DrawchatTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatTimerComponent", function() { return DrawchatTimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_sockets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sockets.service */ "./src/app/services/sockets.service.ts");
/* harmony import */ var _services_drawchat_token_calculator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/drawchat-token-calculator.service */ "./src/app/services/drawchat-token-calculator.service.ts");
/* harmony import */ var _timer_modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../timer_modules/timer */ "./src/app/timer_modules/timer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DrawchatTimerComponent = /** @class */ (function () {
    function DrawchatTimerComponent(tokenCalculator, socket) {
        this.tokenCalculator = tokenCalculator;
        this.socket = socket;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    DrawchatTimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.roomModule.onReceivingRoomInfo()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(function (room) {
            _this.tokenCalculator.createdAt = new Date(room['created_at']).getTime();
            _this.tokenCalculator.expiresAt = new Date(room['expires_at']).getTime();
            _this.initializeTimers();
        });
        this.socket.roomModule.onTokenConsumption()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.onTokenConsumed.bind(this));
    };
    DrawchatTimerComponent.prototype.ngOnDestroy = function () {
        this.destroy.next(true);
        this.destroy.unsubscribe();
    };
    DrawchatTimerComponent.prototype.initializeTimers = function () {
        var _this = this;
        this.tokenTimer = new _timer_modules_timer__WEBPACK_IMPORTED_MODULE_5__["Timer"](this.tokenCalculator.getTimeTilNextToken());
        this.tokenTimer.setRestartTime(this.tokenCalculator.getTokenInterval());
        this.tokenTimer.observable.subscribe(function (timeStr) { _this.tokenCountdown = timeStr; });
        var tokenSub = this.tokenTimer.onTimeOut.subscribe(function () {
            var tokensAvailable = _this.tokenCalculator.getTokensAvailable();
            if (tokensAvailable) {
                _this.tokensRemaining++;
            }
            else {
                _this.tokenCountdown = "0h 0m 0s";
                tokenSub.unsubscribe();
            }
        });
        this.expireTimer = new _timer_modules_timer__WEBPACK_IMPORTED_MODULE_5__["Timer"](this.tokenCalculator.getTimeTilExpire());
        this.expireTimer.observable.subscribe(function (timeStr) { _this.roomCountdown = timeStr; });
        this.expireTimer.onTimeOut.subscribe(function () {
            _this.socket.connectionModule.emitTimeOut();
        });
        this.tokensRemaining = this.tokenCalculator.getTokensAvailable();
    };
    DrawchatTimerComponent.prototype.consumeToken = function () {
        this.socket.roomModule.emitTokenConsumption();
    };
    DrawchatTimerComponent.prototype.onTokenConsumed = function (_a) {
        var newExpireDate = _a.newExpireDate;
        var now = new Date().getTime();
        this.tokenCalculator.expiresAt = newExpireDate;
        this.tokensRemaining = this.tokenCalculator.getTokensAvailable();
        this.expireTimer.setTime(newExpireDate - now);
    };
    DrawchatTimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawchat-timer',
            template: __webpack_require__(/*! ./drawchat-timer.component.html */ "./src/app/components/drawchat-timer/drawchat-timer.component.html"),
            styles: [__webpack_require__(/*! ./drawchat-timer.component.css */ "./src/app/components/drawchat-timer/drawchat-timer.component.css")],
            providers: [_services_drawchat_token_calculator_service__WEBPACK_IMPORTED_MODULE_4__["DrawchatTokenCalculatorService"]],
        }),
        __metadata("design:paramtypes", [_services_drawchat_token_calculator_service__WEBPACK_IMPORTED_MODULE_4__["DrawchatTokenCalculatorService"],
            _services_sockets_service__WEBPACK_IMPORTED_MODULE_3__["SocketsService"]])
    ], DrawchatTimerComponent);
    return DrawchatTimerComponent;
}());



/***/ }),

/***/ "./src/app/components/drawchat-tools/drawchat-tools.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/drawchat-tools/drawchat-tools.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 50px;\n  height: auto;\n  margin-bottom: 25px; \n  border-radius: 5px; \n}\n\nimg.selected {\n  border: 2px solid whitesmoke;\n}"

/***/ }),

/***/ "./src/app/components/drawchat-tools/drawchat-tools.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/drawchat-tools/drawchat-tools.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"assets/brush.png\" alt=\"brush\" [ngClass]=\"{'selected': currTool === 'BRUSH' }\" (click)=\"changeTool('BRUSH')\">\n<img src=\"assets/eraser.png\" alt=\"eraser\" [ngClass]=\"{'selected': currTool === 'ERASER' }\" (click)=\"changeTool('ERASER')\">\n<img src=\"assets/eyedropper.png\" alt=\"eyedropper\" [ngClass]=\"{'selected': currTool === 'EYEDROPPER' }\" (click)=\"changeTool('EYEDROPPER')\">\n<img src=\"assets/ruler.png\" alt=\"ruler\" [ngClass]=\"{'selected': currTool === 'RULER' }\" (click)=\"changeTool('RULER')\">\n"

/***/ }),

/***/ "./src/app/components/drawchat-tools/drawchat-tools.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/drawchat-tools/drawchat-tools.component.ts ***!
  \***********************************************************************/
/*! exports provided: DrawchatToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatToolsComponent", function() { return DrawchatToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drawchat_brush_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/drawchat-brush.service */ "./src/app/services/drawchat-brush.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrawchatToolsComponent = /** @class */ (function () {
    function DrawchatToolsComponent(brush) {
        this.brush = brush;
        this.currTool = 'BRUSH';
    }
    DrawchatToolsComponent.prototype.ngOnInit = function () {
    };
    DrawchatToolsComponent.prototype.changeTool = function (tool) {
        this.currTool = tool;
        this.brush.changeTool(tool);
    };
    DrawchatToolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawchat-tools',
            template: __webpack_require__(/*! ./drawchat-tools.component.html */ "./src/app/components/drawchat-tools/drawchat-tools.component.html"),
            styles: [__webpack_require__(/*! ./drawchat-tools.component.css */ "./src/app/components/drawchat-tools/drawchat-tools.component.css")],
        }),
        __metadata("design:paramtypes", [_services_drawchat_brush_service__WEBPACK_IMPORTED_MODULE_1__["DrawchatBrushService"]])
    ], DrawchatToolsComponent);
    return DrawchatToolsComponent;
}());



/***/ }),

/***/ "./src/app/components/drawchat-userlist/drawchat-userlist.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/drawchat-userlist/drawchat-userlist.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin-left: 5px;\n  margin-bottom: 5px;\n  font-weight: bold;\n  font-size: 13px;\n  color: whitesmoke;\n}\n\n#container {\n  height:100%;\n  overflow: scroll;\n}\n\n::-webkit-scrollbar {\n  width: 5px;  /* for vertical scrollbars */\n  height: 0px; /* for horizontal scrollbars */\n}\n\n::-webkit-scrollbar-track {\n  background: rgba(190, 190, 190, 0.267);\n}\n\n::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.616);\n}"

/***/ }),

/***/ "./src/app/components/drawchat-userlist/drawchat-userlist.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/drawchat-userlist/drawchat-userlist.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n<p>You: {{ownUsername}}</p>\n<p *ngFor=\"let peer of peerList | keyvalue\">{{peer.value}}</p>\n</div>"

/***/ }),

/***/ "./src/app/components/drawchat-userlist/drawchat-userlist.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/drawchat-userlist/drawchat-userlist.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DrawchatUserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatUserlistComponent", function() { return DrawchatUserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_sockets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sockets.service */ "./src/app/services/sockets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrawchatUserlistComponent = /** @class */ (function () {
    function DrawchatUserlistComponent(socket) {
        this.socket = socket;
        this.peerList = {};
        this.ownUsername = "";
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    DrawchatUserlistComponent.prototype.ngOnInit = function () {
        this.subscribeToRoomEvents();
    };
    DrawchatUserlistComponent.prototype.ngOnDestroy = function () {
        this.destroy.next(true);
        this.destroy.unsubscribe();
    };
    DrawchatUserlistComponent.prototype.subscribeToRoomEvents = function () {
        this.socket.roomModule.onPeerJoin()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.addToPeerList.bind(this));
        this.socket.roomModule.onReceivingPeerInfo()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.addToPeerList.bind(this));
        this.socket.roomModule.onPeerLeave()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.removeFromPeerList.bind(this));
        this.socket.roomModule.onUsernameAssigned()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy))
            .subscribe(this.setOwnUsername.bind(this));
    };
    DrawchatUserlistComponent.prototype.addToPeerList = function (_a) {
        var username = _a.username, id = _a.id;
        this.peerList[id] = username;
    };
    DrawchatUserlistComponent.prototype.initializePeerList = function (peerList) {
        var _this = this;
        Object.entries(peerList).forEach(function (_a) {
            var id = _a[0], data = _a[1];
            return _this.addToPeerList({ username: data['username'], id: id });
        });
    };
    DrawchatUserlistComponent.prototype.removeFromPeerList = function (_a) {
        var id = _a.id;
        if (this.peerList[id]) {
            delete this.peerList[id];
        }
    };
    DrawchatUserlistComponent.prototype.setOwnUsername = function (_a) {
        var username = _a.username;
        this.ownUsername = username;
    };
    DrawchatUserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawchat-userlist',
            template: __webpack_require__(/*! ./drawchat-userlist.component.html */ "./src/app/components/drawchat-userlist/drawchat-userlist.component.html"),
            styles: [__webpack_require__(/*! ./drawchat-userlist.component.css */ "./src/app/components/drawchat-userlist/drawchat-userlist.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_sockets_service__WEBPACK_IMPORTED_MODULE_3__["SocketsService"]])
    ], DrawchatUserlistComponent);
    return DrawchatUserlistComponent;
}());



/***/ }),

/***/ "./src/app/components/drawchat/drawchat.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/drawchat/drawchat.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainContent {\n  vertical-align: top;\n  display: inline-block;\n  width: calc(100vw - 250px);\n  height: 100vh;\n}\n\n  #canvasFrame {\n    position: relative;\n    width: calc(100% - 80px );\n    height: calc(100% - 150px);\n    display: inline-block;\n    vertical-align: top;\n  }\n\n  #toolbar {\n    vertical-align: top;\n    width: 80px;\n    display: inline-block;\n    background-color: rgb(53, 56, 58);\n    height: calc(100% - 150px);\n    padding: 15px;\n  }\n\n  #zoomSlider {\n    vertical-align: top;\n    display: inline-block;\n    width: 70px;\n    padding-top: 10px;\n    height: 100%;\n    background-color: rgb(53, 56, 58);\n  }\n\n  #zoomSlider input {\n      position: relative;\n      top: 30%;\n      left: -30%;\n      -webkit-transform: rotate(270deg);\n              transform: rotate(270deg);\n      -webkit-appearance: none;\n      background-color: #00000000;\n      width: 90px;\n    }\n\n  input[type=range]:focus {\n      outline: none;\n    }\n\n  input[type=range]::-webkit-slider-runnable-track {\n      width: 100%;\n      height: 5px;\n      cursor: pointer;\n      background-color: rgba(255, 255, 255, 0.575);\n      border-radius: 5px;\n      -webkit-appearance: none;\n      border: 1px solid #000000;\n    }\n\n  input[type=range]::-webkit-slider-thumb {\n      border: 1px solid #000000;\n      height: 20px;\n      width: 13px;\n      border-radius: 5px;\n      background: rgba(255, 255, 255, 0.842);\n      cursor: pointer;\n      -webkit-appearance: none;\n      margin-top: -11px;\n    }\n\n  #zoomSlider img {\n      width:13px;\n      height:auto;\n    }\n\n  #zoomSlider {\n      font-weight: bold;\n      color: whitesmoke;\n      font-size: 13px;\n    }\n\n  app-drawchat-palette {\n    vertical-align: top;\n    display: inline-block;\n    width: calc(100% - 470px);\n    height:100%;\n    background-color: rgb(53, 56, 58);\n    border-left: 1px solid rgb(165, 159, 161);\n  }\n\n  #brushSettings {\n    width: 100%;\n    height: 150px;\n  }\n\n  #sideBar {\n  vertical-align: top;\n  display: inline-block;\n  background-color: rgb(53, 56, 58);\n  border-left: 1px solid white;\n  width: 230px;\n  height: 100vh;\n}\n\n  #leaveButton {\n  width: 20%;\n  height:40px;\n  border-radius: 5px;\n  padding-top:5px;\n  background-color: rgb(180, 57, 84);\n}\n\n  #leaveButton:hover {\n  cursor: pointer;\n  background-color: rgb(216, 83, 111);\n\n}\n\n  app-drawchat-timer {\n  display: inline-block;\n  vertical-align: top;\n  width:80%;\n  height:10vh;\n}\n\n  app-drawchat-userlist {\n  display: block;\n  width:100%;\n  height:30vh;\n  margin-top: 2vh;\n  margin-bottom: 2vh;\n  border-top: 1px solid whitesmoke; \n  border-bottom: 1px solid whitesmoke;\n}\n\n  app-drawchat-chat {\n  display: block;\n  width:100%;\n  height:54vh;\n  border-top: 1px solid whitesmoke; \n  border-bottom: 1px solid whitesmoke\n}\n\n"

/***/ }),

/***/ "./src/app/components/drawchat/drawchat.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/drawchat/drawchat.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mainContent\">\n<div id=\"canvasFrame\">\n  <app-drawchat-canvas \n    [currZoom]=\"zoom\" \n    [currRoom]=\"currRoom\"\n  >\n  </app-drawchat-canvas>\n</div>\n<app-drawchat-tools id=\"toolbar\">\n</app-drawchat-tools>\n\n<div id=\"brushSettings\">\n  <app-drawchat-sliders></app-drawchat-sliders>\n\n  <div id=\"zoomSlider\">\n    <img src=\"assets/zoom.png\" alt=\"zoom\"> {{zoom * 100}}%\n    <input type=\"range\" \n      name=\"zoom\" \n      [(ngModel)]=\"zoom\" \n      min=\"1\" max=\"5\" step=\"0.5\">\n  </div>\n  \n  <app-drawchat-palette></app-drawchat-palette>\n</div>\n</div>\n\n<div id=\"sideBar\">\n  <app-drawchat-timer></app-drawchat-timer>\n  <button [routerLink]=\"['/']\" id=\"leaveButton\"><img src=\"assets/leave.png\" alt=\"\"></button>\n  <app-drawchat-userlist></app-drawchat-userlist>\n  <app-drawchat-chat></app-drawchat-chat>\n</div>"

/***/ }),

/***/ "./src/app/components/drawchat/drawchat.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/drawchat/drawchat.component.ts ***!
  \***********************************************************/
/*! exports provided: DrawchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatComponent", function() { return DrawchatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _drawchat_disconnect_modal_drawchat_disconnect_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drawchat-disconnect-modal/drawchat-disconnect-modal.component */ "./src/app/components/drawchat-disconnect-modal/drawchat-disconnect-modal.component.ts");
/* harmony import */ var _services_sockets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sockets.service */ "./src/app/services/sockets.service.ts");
/* harmony import */ var _services_drawchat_brush_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/drawchat-brush.service */ "./src/app/services/drawchat-brush.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DrawchatComponent = /** @class */ (function () {
    function DrawchatComponent(_route, _socket, modalService, _router) {
        this._route = _route;
        this._socket = _socket;
        this.modalService = modalService;
        this._router = _router;
        this.zoom = 1;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DrawchatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var roomId = params['id'];
            _this.currRoom = roomId;
            _this._socket.connectionModule.joinRoom(roomId);
        });
        this._socket.connectionModule.onForceDisconnect()
            .subscribe(this.showDisconnectModal.bind(this));
    };
    DrawchatComponent.prototype.showDisconnectModal = function () {
        var _this = this;
        this.bsModalRef = this.modalService.show(_drawchat_disconnect_modal_drawchat_disconnect_modal_component__WEBPACK_IMPORTED_MODULE_4__["DrawchatDisconnectModalComponent"]);
        this.bsModalRef.content.formDone
            .subscribe(function () {
            _this._router.navigate(['/']);
            _this.bsModalRef.hide();
        });
    };
    DrawchatComponent.prototype.ngOnDestroy = function () {
        this._socket.connectionModule.leaveRoom();
        this.destroy.next(true);
        this.destroy.unsubscribe();
    };
    DrawchatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawchat',
            template: __webpack_require__(/*! ./drawchat.component.html */ "./src/app/components/drawchat/drawchat.component.html"),
            styles: [__webpack_require__(/*! ./drawchat.component.css */ "./src/app/components/drawchat/drawchat.component.css")],
            providers: [_services_drawchat_brush_service__WEBPACK_IMPORTED_MODULE_6__["DrawchatBrushService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_sockets_service__WEBPACK_IMPORTED_MODULE_5__["SocketsService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DrawchatComponent);
    return DrawchatComponent;
}());



/***/ }),

/***/ "./src/app/components/hub/hub.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/hub/hub.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainContainer {\n  height:100vh;\n  width: 100vw;\n  \n}\napp-roomlist {\n  position: relative;\n  vertical-align: top;\n  display: inline-block;\n  height: 100%;\n  width: 300px;\n  overflow: scroll;\n}\napp-room {\n  vertical-align: top;\n  display: inline-block;\n  height:100%;\n  width: calc(100% - 300px);\n  margin-right: -10px;\n  overflow: scroll;\n}\n.bg-lightgrey {\n  background-color: rgb(214, 226, 230)\n}\n::-webkit-scrollbar {\n  width: 10px;  /* for vertical scrollbars */\n  height: 0px; /* for horizontal scrollbars */\n}\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.1);\n}\n::-webkit-scrollbar-thumb {\n  background: rgba(226, 226, 226, 0.8);\n}"

/***/ }),

/***/ "./src/app/components/hub/hub.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/hub/hub.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top bg-transparent\">\n  <ul class=\"nav nav-pills\">\n    <li *ngIf=\"!isLoggedIn()\" class=\"nav-item\">\n      <a class=\"nav-link bg-light\"  (click)=\"showLoginForm()\">Log in</a>\n    </li>\n    <li *ngIf=\"!isLoggedIn()\" class=\"nav-item\">\n      <a class=\"nav-link bg-light ml-2\"  (click)=\"showSignupForm()\">Sign up</a>\n    </li>\n\n    <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n      <a class=\"nav-link bg-light ml-2\" (click)=\"showCreateRoomForm()\">Create room</a>\n    </li>\n\n    <li *ngIf=\"isLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link bg-light ml-2\" (click)=\"logout()\">Log out</a>\n      </li>\n  </ul>\n</nav>\n<div id=\"mainContainer\" class=\"bg-dark\">\n  <app-room \n    [roomToShow]=\"roomToShow\"\n    (queryEmitted)=\"setRoomListQuery($event)\"\n  ></app-room>\n  <app-roomlist \n    (roomClicked)=\"setRoomToShow($event)\"\n    [query]=\"currQuery\" \n  >\n  </app-roomlist>\n</div>"

/***/ }),

/***/ "./src/app/components/hub/hub.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/hub/hub.component.ts ***!
  \*************************************************/
/*! exports provided: HubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubComponent", function() { return HubComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loginform/loginform.component */ "./src/app/components/loginform/loginform.component.ts");
/* harmony import */ var _signupform_signupform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signupform/signupform.component */ "./src/app/components/signupform/signupform.component.ts");
/* harmony import */ var _createroomform_createroomform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../createroomform/createroomform.component */ "./src/app/components/createroomform/createroomform.component.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/session.service */ "./src/app/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HubComponent = /** @class */ (function () {
    function HubComponent(modalService, _sessionService, _router) {
        this.modalService = modalService;
        this._sessionService = _sessionService;
        this._router = _router;
        this.currQuery = {};
        this.roomToShow = {};
    }
    HubComponent.prototype.ngOnInit = function () {
    };
    HubComponent.prototype.showLoginForm = function () {
        this.bsModalRef = this.modalService.show(_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"]);
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    HubComponent.prototype.showSignupForm = function () {
        this.bsModalRef = this.modalService.show(_signupform_signupform_component__WEBPACK_IMPORTED_MODULE_4__["SignupFormComponent"]);
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    HubComponent.prototype.showCreateRoomForm = function () {
        var _this = this;
        this.bsModalRef = this.modalService.show(_createroomform_createroomform_component__WEBPACK_IMPORTED_MODULE_5__["CreateRoomFormComponent"]);
        this.bsModalRef.content.formDone
            .subscribe(function (roomId) {
            _this._router.navigate(['/draw/' + roomId]);
        });
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    HubComponent.prototype.setRoomToShow = function (room) {
        this.roomToShow = room;
    };
    HubComponent.prototype.setRoomListQuery = function (e) {
        this.currQuery = e;
    };
    HubComponent.prototype.logout = function () {
        this._sessionService.removeUserToken();
    };
    HubComponent.prototype.isLoggedIn = function () {
        return this._sessionService.getUserToken() !== null;
    };
    HubComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hub',
            template: __webpack_require__(/*! ./hub.component.html */ "./src/app/components/hub/hub.component.html"),
            styles: [__webpack_require__(/*! ./hub.component.css */ "./src/app/components/hub/hub.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HubComponent);
    return HubComponent;
}());



/***/ }),

/***/ "./src/app/components/loginform/loginform.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/loginform/loginform.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/loginform/loginform.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/loginform/loginform.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\" (submit)=\"onSubmit()\">\n    <form >\n        <div class=\"form-group\">\n          <label for=\"username\">Username:</label>\n          <input \n            class=\"form-control\" \n            name=\"username\" \n            [(ngModel)]=\"postData.username\"\n          />\n        </div>\n  \n        <div class=\"form-group\">\n          <label for=\"password\">Password:</label>\n          <input \n            type=\"password\" \n            class=\"form-control\" \n            name=\"password\" \n            [(ngModel)]=\"postData.password\"\n          />\n        </div>\n    \n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n  \n      </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\n</div>"

/***/ }),

/***/ "./src/app/components/loginform/loginform.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/loginform/loginform.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/session.service */ "./src/app/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(bsModalRef, _userService, _sessionService) {
        this.bsModalRef = bsModalRef;
        this._userService = _userService;
        this._sessionService = _sessionService;
        this.postData = {
            username: "",
            password: ""
        };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        this.title = "Login";
    };
    LoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("CLICKED ONSUBMIT");
        this._userService
            .signIn(this.postData)
            .subscribe(function (response) {
            console.log(response);
            if (response['status'] === 'success') {
                var token = response['token'];
                _this._sessionService.setUserToken(token);
                _this.bsModalRef.hide();
            }
        });
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginform',
            template: __webpack_require__(/*! ./loginform.component.html */ "./src/app/components/loginform/loginform.component.html"),
            styles: [__webpack_require__(/*! ./loginform.component.css */ "./src/app/components/loginform/loginform.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/components/playback/playback.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/playback/playback.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lower {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-color: white;\n}\n\n#upper {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n\n#blackscreen {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 96%;\n  margin-left: 2%; \n  height: 100%;\n  z-index: 9;\n}\n\n#playbutton {\n  position: relative;\n  width:20%;\n  height:auto;\n  top: 30%;\n  left: 40%\n}\n\n#canvasContainer {\n  position: relative;\n  top: 0;\n  left: 0;\n  padding-top: 56.25%;\n  overflow: scroll;\n}"

/***/ }),

/***/ "./src/app/components/playback/playback.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/playback/playback.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"canvasContainer\">\n  <canvas width=\"1820\" height=\"1024\" #lower id=\"lower\"></canvas>\n  <canvas width=\"1820\" height=\"1024\" #upper id=\"upper\"></canvas>\n</div>\n\n<div *ngIf=\"!playbackStarted\" id=\"blackscreen\" (click)=\"playClicked()\">\n  <img id=\"playbutton\" src=\"assets/playbutton.png\">\n</div>\n<button (click)=\"setPlaySpeed(200)\">1x</button>\n<button (click)=\"setPlaySpeed(30)\">2x</button>"

/***/ }),

/***/ "./src/app/components/playback/playback.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/playback/playback.component.ts ***!
  \***********************************************************/
/*! exports provided: PlaybackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaybackComponent", function() { return PlaybackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _draw_modules_paintcursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../draw_modules/paintcursor */ "./src/app/draw_modules/paintcursor.ts");
/* harmony import */ var _services_drawchat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/drawchat.service */ "./src/app/services/drawchat.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaybackComponent = /** @class */ (function () {
    function PlaybackComponent(_drawChatService) {
        this._drawChatService = _drawChatService;
        this.strokeLog = [];
        this.playbackStarted = false;
        this.currPlaySpeed = 50;
    }
    PlaybackComponent.prototype.ngOnInit = function () {
        this.baseCtx = this.lowerRef.nativeElement.getContext('2d');
        this.topCtx = this.upperRef.nativeElement.getContext('2d');
    };
    PlaybackComponent.prototype.playClicked = function () {
        if (this.playbackStarted) {
            return;
        }
        this.playbackStarted = true;
        this._drawChatService.fetchLog(this.roomId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(this.startDrawing.bind(this)))
            .subscribe();
    };
    PlaybackComponent.prototype.startDrawing = function (strokeLog) {
        var _this = this;
        var delayVal = function (interval) {
            return function (val) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(val).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(interval)); };
        };
        var startNewStroke = function (brush) {
            return function (_a) {
                var rgba = _a.rgba, size = _a.size, x = _a.x, y = _a.y;
                brush.endAction()
                    .setColor(rgba).setSize(size)
                    .moveTo(x[0], y[0])
                    .startAction();
            };
        };
        var moveAlongPath = function (brush) {
            return function (_a) {
                var x = _a.x, y = _a.y;
                // Zip pathX, pathY together into a an array of points
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(x), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(y))
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["windowCount"])(50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(delayVal(_this.currPlaySpeed)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (_a) {
                    var x = _a[0], y = _a[1];
                    brush.moveTo(x, y);
                }) // Map each point into a move operation
                );
            };
        };
        var drawStroke = function (brush) { return function (stroke) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(stroke)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(startNewStroke(brush)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(moveAlongPath(brush)));
        }; };
        var drawWithBrush = function (brush) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(strokeLog)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["windowCount"])(50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeAll"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(drawStroke(brush)));
        };
        // Execute
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _draw_modules_paintcursor__WEBPACK_IMPORTED_MODULE_2__["PaintCursor"](this.baseCtx).setUpperLayer(this.topCtx))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["concatMap"])(drawWithBrush));
    };
    PlaybackComponent.prototype.setPlaySpeed = function (spd) {
        this.currPlaySpeed = spd;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PlaybackComponent.prototype, "roomId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('lower'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PlaybackComponent.prototype, "lowerRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('upper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PlaybackComponent.prototype, "upperRef", void 0);
    PlaybackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-playback',
            template: __webpack_require__(/*! ./playback.component.html */ "./src/app/components/playback/playback.component.html"),
            styles: [__webpack_require__(/*! ./playback.component.css */ "./src/app/components/playback/playback.component.css")]
        }),
        __metadata("design:paramtypes", [_services_drawchat_service__WEBPACK_IMPORTED_MODULE_3__["DrawchatService"]])
    ], PlaybackComponent);
    return PlaybackComponent;
}());



/***/ }),

/***/ "./src/app/components/room/room.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/room/room.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\napp-playbck {\n  position: relative;\n  /* padding-top: 56.25%;\n  overflow: scroll; */\n}\n\n#greeting {\n  position: relative;\n  top: 10vh;\n  left: 30px;\n}\n\n#greeting img {\n  /* margin-top: 30%; */\n  width:90%;\n  height:auto;\n}"

/***/ }),

/***/ "./src/app/components/room/room.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/room/room.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"!currentlyShowingRoom()\" id=\"greeting\">\n  <img src=\"assets/banner.png\" alt=\"\">\n</h1>\n<div *ngIf=\"currentlyShowingRoom()\">\n  <div class=\"row ml-1 mr-3 mt-5 pt-3\">\n    <div class=\"col-2 mt-3 small font-weight-bold text-dark\">\n      <p class=\"m-2 border-bottom border-light text-center text-light\">Users:</p>\n\n      <p *ngFor=\"let user of roomToShow.users\" class=\"mb-1 ml-2 text-light\">\n        <a (click)=\"userClicked(user.id)\">{{user.username}}</a>\n      </p>\n    </div>\n    <div id=\"playbackContainer\" class=\" col-10 ml-auto mt-2\">\n      <div id=\"canvasContainer\">\n        <app-playback [roomId]=roomToShow.id></app-playback>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-10 ml-auto mb-5\">\n    <div class=\"mx-auto mt-2 border-bottom text-light\">\n      <h2>\n        {{ roomToShow.name }}\n        <button *ngIf=\"roomToShow.isActive\" class=\"btn btn-outline-light\" [routerLink]=\"['/draw', roomToShow.id ]\">Join!</button>\n      </h2>\n      <p>\n        <span *ngFor=\"let tag of roomToShow.tags\" class=\"badge badge-secondary mx-1\" (click)=\"tagClicked(tag)\">\n          {{tag}}\n        </span>\n      </p>\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn btn-secondary\">Description</button>\n      </div>\n    </div>\n\n    <div class=\"row mx-auto mt-2 text-light font-weight-bold\">\n      {{ roomToShow.description }}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/room/room.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/room/room.component.ts ***!
  \***************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomComponent = /** @class */ (function () {
    function RoomComponent() {
        this.queryEmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.roomToShow = {};
    }
    RoomComponent.prototype.ngOnInit = function () {
    };
    RoomComponent.prototype.currentlyShowingRoom = function () {
        return Object.keys(this.roomToShow).length !== 0;
    };
    RoomComponent.prototype.userClicked = function (user) {
        this.queryEmitted.emit({ user: user });
    };
    RoomComponent.prototype.tagClicked = function (tag) {
        this.queryEmitted.emit({ tag: tag });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RoomComponent.prototype, "queryEmitted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoomComponent.prototype, "roomToShow", void 0);
    RoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/components/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.css */ "./src/app/components/room/room.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/components/roomlist/roomlist.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/roomlist/roomlist.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img {\n  width: 100%;\n  height: auto;\n}\n\n.inactive {\n  opacity: 0.7;\n}"

/***/ }),

/***/ "./src/app/components/roomlist/roomlist.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/roomlist/roomlist.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group mx-1\">\n\n    <li *ngFor=\"let room of rooms\" \n      class=\"list-group-item p-0 m-2 bg-dark text-white border-light font-weight-bold\"\n      (click)=\"onRoomClicked(room)\"\n      [ngClass]=\"{ 'inactive': !room.isActive }\"\n    >\n      <h6 class=\"small m-2\">\n        {{room['name']}}\n        <span class=\"badge badge-pill\" \n        [ngClass]=\"{\n          'badge-success': room.isActive,\n          'badge-danger' : !room.isActive\n        }\">\n        {{ room.isActive ? 'Live!' : 'Done'}}\n        </span>\n      </h6>\n      <img class=\"card-img bg-white\" [src]=\"room.thumbUrl\" alt=\"\">\n      <p class=\"small mx-2 my-1\">Created on: {{room['created_at'] | date: 'dd/MM/yyyy'}}</p>\n    </li>\n\n  </ul>\n"

/***/ }),

/***/ "./src/app/components/roomlist/roomlist.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/roomlist/roomlist.component.ts ***!
  \***********************************************************/
/*! exports provided: RoomlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomlistComponent", function() { return RoomlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drawchat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/drawchat.service */ "./src/app/services/drawchat.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomlistComponent = /** @class */ (function () {
    function RoomlistComponent(_drawChatService) {
        this._drawChatService = _drawChatService;
        this.rooms = [];
        this.query = {};
        this.roomClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RoomlistComponent.prototype.ngOnInit = function () {
    };
    RoomlistComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.getQueryObservable(this.query)
            .subscribe(function (results) {
            if (results['status'] !== "success") {
                return;
            }
            _this.rooms = results['data'];
            var now = new Date();
            for (var i = 0; i < _this.rooms.length; i++) {
                _this.rooms[i]['isActive'] = new Date(_this.rooms[i]['expires_at']) > now;
                _this.rooms[i]['thumbUrl'] = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.thumb + (_this.rooms[i]['id'] + "_snapshot.png");
                console.log(_this.rooms[i]['thumbUrl']);
            }
            _this.rooms.reverse();
        });
    };
    RoomlistComponent.prototype.getQueryObservable = function (query) {
        if (query['user']) {
            return this._drawChatService.fetchRoomsByJoiner(query['user']);
        }
        else if (query['tag']) {
            return this._drawChatService.fetchRoomsByTag(this.query['tag']);
        }
        return this._drawChatService.fetchRooms();
    };
    RoomlistComponent.prototype.onRoomClicked = function (room) {
        this.roomClicked.emit(room);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoomlistComponent.prototype, "query", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RoomlistComponent.prototype, "roomClicked", void 0);
    RoomlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roomlist',
            template: __webpack_require__(/*! ./roomlist.component.html */ "./src/app/components/roomlist/roomlist.component.html"),
            styles: [__webpack_require__(/*! ./roomlist.component.css */ "./src/app/components/roomlist/roomlist.component.css")]
        }),
        __metadata("design:paramtypes", [_services_drawchat_service__WEBPACK_IMPORTED_MODULE_1__["DrawchatService"]])
    ], RoomlistComponent);
    return RoomlistComponent;
}());



/***/ }),

/***/ "./src/app/components/signupform/signupform.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/signupform/signupform.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid[required]:not(.ng-pristine), .ng-valid.required:not(.ng-pristine), .good-confirm:not(.ng-pristine)  {\n  border-left: 5px solid #42A948; \n}\n\n.ng-invalid:not(form):not(.ng-pristine), .bad-confirm  {\n  border-left: 5px solid #a94442; \n}\n"

/***/ }),

/***/ "./src/app/components/signupform/signupform.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/signupform/signupform.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">{{title}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <form #signUpForm=\"ngForm\" (submit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username:</label>\n        <input \n          type=\"text\" \n          class=\"form-control\" \n          id=\"name\"\n          name=\"username\" \n          [(ngModel)]=\"postData.username\"\n          #username=\"ngModel\"\n          minlength=\"2\" \n          required\n        />\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Password:</label>\n        <input \n          type=\"password\" \n          class=\"form-control\" \n          id=\"password\"\n          name=\"password\" \n          #password=\"ngModel\"\n          minlength=\"8\" \n          [(ngModel)]=\"postData.password\"\n          required\n        />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Confirm password:</label>\n        <input \n          type=\"password\" \n          class=\"form-control\" \n          name=\"confirm\" \n          [(ngModel)]=\"postData.confirm\"\n          id=\"confirm\"\n          [ngClass]=\"{ 'bad-confirm': !confirmMatch(), 'good-confirm': confirmMatch()}\"\n        />\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!signUpForm.form.valid\">Submit</button>\n\n    </form>\n  </div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">{{closeBtnName}}</button>\n</div>"

/***/ }),

/***/ "./src/app/components/signupform/signupform.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/signupform/signupform.component.ts ***!
  \***************************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/session.service */ "./src/app/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(bsModalRef, _userService, _sessionService) {
        this.bsModalRef = bsModalRef;
        this._userService = _userService;
        this._sessionService = _sessionService;
        this.postData = {
            username: "",
            password: "",
            confirm: ""
        };
    }
    SignupFormComponent.prototype.ngOnInit = function () {
        this.title = "Sign up";
    };
    SignupFormComponent.prototype.confirmMatch = function () {
        var _a = this.postData, password = _a.password, confirm = _a.confirm;
        return password && password === confirm;
    };
    SignupFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.postData, username = _a.username, password = _a.password;
        this._userService
            .signUp({ username: username, password: password })
            .subscribe(function (response) {
            var token = response['token'];
            _this._sessionService.setUserToken(token);
            _this.bsModalRef.hide();
        });
    };
    SignupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signupform',
            template: __webpack_require__(/*! ./signupform.component.html */ "./src/app/components/signupform/signupform.component.html"),
            styles: [__webpack_require__(/*! ./signupform.component.css */ "./src/app/components/signupform/signupform.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/app/draw_modules/brush.ts":
/*!***************************************!*\
  !*** ./src/app/draw_modules/brush.ts ***!
  \***************************************/
/*! exports provided: Brush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brush", function() { return Brush; });
var Brush = /** @class */ (function () {
    function Brush(ctx) {
        this.pathX = [];
        this.pathY = [];
        this.ctx = ctx;
        this.baseCtx = ctx;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.rgba = Brush.default.rgba;
        this.size = Brush.default.size;
    }
    Brush.prototype.setCtx = function (ctx) {
        this.ctx = ctx;
        return this;
    };
    Brush.prototype.setBase = function (ctx) {
        this.baseCtx = ctx;
        return this;
    };
    Brush.prototype.onActivate = function (x, y) {
        return this.startAt(x, y);
    };
    Brush.prototype.onMoveWhileActivated = function (x, y) {
        return this.drawTo(x, y);
    };
    Brush.prototype.onDeactivate = function () {
        return this.setOn(this.baseCtx).reset();
    };
    Brush.prototype.isActivated = function () {
        return this.isDrawing();
    };
    Brush.prototype.getActionData = function () {
        return this.getData();
    };
    Brush.prototype.startAt = function (x, y) {
        this.setInitialPoint(x, y);
        this.draw(this.ctx);
        return this;
    };
    Brush.prototype.setInitialPoint = function (x, y) {
        this.pathX = [x];
        this.pathY = [y];
        this.minX = x;
        this.minY = y;
        this.maxX = x;
        this.maxY = y;
    };
    Brush.prototype.drawTo = function (newX, newY) {
        this.updateBoundingRectPoints(newX, newY);
        this.updatePath(newX, newY);
        this.clearStroke();
        this.draw(this.ctx);
        return this;
    };
    Brush.prototype.alphaModeIsOn = function () {
        return this.rgba[3] !== 1;
    };
    Brush.prototype.updatePath = function (newX, newY) {
        this.pathX.push(newX);
        this.pathY.push(newY);
    };
    Brush.prototype.setOn = function (baseCtx) {
        var _this = this;
        this.clearStroke();
        var saved = this.saveCtxSettings(baseCtx);
        var keys = Object.keys(saved);
        keys.forEach(function (key) {
            baseCtx[key] = _this.ctx[key];
        });
        this.draw(baseCtx);
        this.restoreCtxSettings(baseCtx, saved);
        return this;
    };
    Brush.prototype.saveCtxSettings = function (ctx) {
        return {
            lineWidth: ctx.lineWidth,
            lineCap: ctx.lineCap,
            lineJoin: ctx.lineJoin,
            fillStyle: ctx.fillStyle,
            strokeStyle: ctx.strokeStyle
        };
    };
    Brush.prototype.restoreCtxSettings = function (ctx, saved) {
        Object.keys(saved).forEach(function (key) {
            ctx[key] = saved[key];
        });
    };
    Brush.prototype.clearStroke = function () {
        var _a = this.getBoundingRectPoints(), minX = _a[0], minY = _a[1], maxX = _a[2], maxY = _a[3];
        this.ctx.clearRect(minX, minY, maxX, maxY);
    };
    Brush.prototype.updateBoundingRectPoints = function (newX, newY) {
        if (this.minX > newX) {
            this.minX = newX;
        }
        else if (this.maxX < newX) {
            this.maxX = newX;
        }
        ;
        if (this.minY > newY) {
            this.minY = newY;
        }
        else if (this.maxY < newY) {
            this.maxY = newY;
        }
        ;
    };
    Brush.prototype.getBoundingRectPoints = function () {
        var _a = this.ctx.canvas, width = _a.width, height = _a.height;
        var radius = this.size / 2;
        return [
            Math.max(this.minX - radius, 0),
            Math.max(this.minY - radius - 5, 0),
            Math.min(this.maxX + radius, width),
            Math.min(this.maxY + radius, height),
        ];
    };
    Brush.prototype.draw = function (ctx) {
        if (this.pathX.length === 1) {
            this.drawDot(ctx);
        }
        else {
            this.drawPath(ctx);
        }
        return this;
    };
    Brush.prototype.drawPath = function (ctx) {
        ctx.beginPath();
        var len = this.pathX.length;
        ctx.moveTo(this.pathX[0], this.pathY[0]);
        for (var i = 1; i < len; i++) {
            ctx.lineTo(this.pathX[i], this.pathY[i]);
        }
        ctx.stroke();
    };
    Brush.prototype.drawDot = function (ctx) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.arc(this.pathX[0], this.pathY[0], this.size / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.lineWidth = this.size;
    };
    Brush.prototype.setColor = function (rgba) {
        this.setRgba(rgba);
        this.setCtxStyle();
        return this;
    };
    Brush.prototype.setRgba = function (rgba) {
        var r = parseInt(rgba[0]);
        var g = parseInt(rgba[1]);
        var b = parseInt(rgba[2]);
        var a = parseFloat(rgba[3]);
        this.rgba = [r, g, b, a];
    };
    Brush.prototype.setCtxStyle = function () {
        var cssString = "rgba(" + this.rgba.join(', ') + ")";
        this.ctx.strokeStyle = cssString;
        this.ctx.fillStyle = cssString;
        return this;
    };
    Brush.prototype.setSize = function (size) {
        this.size = size;
        this.ctx.lineWidth = size;
        return this;
    };
    Brush.prototype.reset = function () {
        var _a;
        this.rgba = Brush.default.rgba;
        this.size = Brush.default.size;
        this.pathX = [];
        this.pathY = [];
        _a = [null, null, null, null], this.minX = _a[0], this.minY = _a[1], this.maxX = _a[2], this.maxY = _a[3];
        return this;
    };
    Brush.prototype.isDrawing = function () {
        return this.pathX.length !== 0;
    };
    Brush.prototype.setData = function (data) {
        this.rgba = data.rgba;
        this.size = data.size;
        this.pathX = data.x;
        this.pathY = data.y;
    };
    Brush.prototype.getData = function () {
        return {
            rgba: this.rgba,
            size: this.size,
            x: this.pathX,
            y: this.pathY
        };
    };
    Brush.default = {
        rgba: [1, 1, 1, 1],
        size: 1,
    };
    return Brush;
}());



/***/ }),

/***/ "./src/app/draw_modules/eraser.ts":
/*!****************************************!*\
  !*** ./src/app/draw_modules/eraser.ts ***!
  \****************************************/
/*! exports provided: Eraser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eraser", function() { return Eraser; });
/* harmony import */ var _brush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brush */ "./src/app/draw_modules/brush.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Eraser = /** @class */ (function (_super) {
    __extends(Eraser, _super);
    function Eraser(ctx) {
        var _this = _super.call(this, ctx) || this;
        _this.rgba = [255, 255, 255, 1];
        _this.size = _brush__WEBPACK_IMPORTED_MODULE_0__["Brush"].default.size;
        return _this;
    }
    Eraser.prototype.setRgba = function (rgba) {
        this.rgba = [255, 255, 255, 1];
        return this;
    };
    return Eraser;
}(_brush__WEBPACK_IMPORTED_MODULE_0__["Brush"]));



/***/ }),

/***/ "./src/app/draw_modules/observablepaintcursor.ts":
/*!*******************************************************!*\
  !*** ./src/app/draw_modules/observablepaintcursor.ts ***!
  \*******************************************************/
/*! exports provided: ObservablePaintCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservablePaintCursor", function() { return ObservablePaintCursor; });
/* harmony import */ var _paintcursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paintcursor */ "./src/app/draw_modules/paintcursor.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ObservablePaintCursor = /** @class */ (function (_super) {
    __extends(ObservablePaintCursor, _super);
    function ObservablePaintCursor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onStart = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        _this.onMove = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        _this.onEnd = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return _this;
    }
    ObservablePaintCursor.prototype.startAction = function () {
        this.onStart.next({ tool: this.currToolName, rgba: this.rgba });
        return _super.prototype.startAction.call(this);
    };
    ObservablePaintCursor.prototype.moveTo = function (x, y) {
        this.onMove.next({ x: x, y: y });
        return _super.prototype.moveTo.call(this, x, y);
    };
    ObservablePaintCursor.prototype.endAction = function () {
        if (this.tool.isActivated()) {
            var strokeData = this.tool.getActionData();
            this.onEnd.next(strokeData);
            this.tool.onDeactivate();
        }
        return this;
    };
    return ObservablePaintCursor;
}(_paintcursor__WEBPACK_IMPORTED_MODULE_0__["PaintCursor"]));



/***/ }),

/***/ "./src/app/draw_modules/paintcursor.ts":
/*!*********************************************!*\
  !*** ./src/app/draw_modules/paintcursor.ts ***!
  \*********************************************/
/*! exports provided: PaintCursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintCursor", function() { return PaintCursor; });
/* harmony import */ var _brush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brush */ "./src/app/draw_modules/brush.ts");
/* harmony import */ var _eraser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eraser */ "./src/app/draw_modules/eraser.ts");
/* harmony import */ var _ruler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ruler */ "./src/app/draw_modules/ruler.ts");



var PaintCursor = /** @class */ (function () {
    function PaintCursor(baseCtx) {
        this.rgba = _brush__WEBPACK_IMPORTED_MODULE_0__["Brush"].default.rgba;
        this.size = _brush__WEBPACK_IMPORTED_MODULE_0__["Brush"].default.size;
        this.label = "";
        this.isVisible = true;
        this.baseCtx = baseCtx;
        this.baseCtx.lineCap = 'round';
        this.baseCtx.lineJoin = 'round';
        this.tool = new _brush__WEBPACK_IMPORTED_MODULE_0__["Brush"](this.baseCtx)
            .setCtx(baseCtx);
        this.currToolName = 'BRUSH';
    }
    PaintCursor.getToolCreator = function (tool) {
        return {
            'BRUSH': _brush__WEBPACK_IMPORTED_MODULE_0__["Brush"],
            'ERASER': _eraser__WEBPACK_IMPORTED_MODULE_1__["Eraser"],
            'RULER': _ruler__WEBPACK_IMPORTED_MODULE_2__["Ruler"]
        }[tool];
    };
    PaintCursor.prototype.setUpperLayer = function (ctx) {
        this.topCtx = ctx;
        this.topCtx.lineCap = 'round';
        this.topCtx.lineJoin = 'round';
        this.tool.setCtx(ctx);
        return this;
    };
    PaintCursor.prototype.startAction = function () {
        this.tool.setColor(this.rgba);
        this.tool.setSize(this.size);
        this.tool.onActivate(this.x, this.y);
        return this;
    };
    PaintCursor.prototype.endAction = function () {
        if (this.tool.isActivated()) {
            this.tool.onDeactivate();
        }
        return this;
    };
    PaintCursor.prototype.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
        if (this.tool.isActivated()) {
            this.tool.onMoveWhileActivated(x, y);
        }
        return this;
    };
    PaintCursor.prototype.hasOngoingAction = function () {
        return this.tool.isActivated();
    };
    PaintCursor.prototype.getActionData = function () {
        return this.tool.getActionData();
    };
    PaintCursor.prototype.setTool = function (currTool) {
        if (currTool === this.currToolName) {
            return this;
        }
        if (currTool !== 'BRUSH' && currTool !== 'ERASER' && currTool !== 'RULER') {
            return this;
        }
        this.currToolName = currTool;
        var newTool = PaintCursor.getToolCreator(currTool);
        this.tool = new newTool(this.baseCtx);
        this.tool
            .setCtx(this.topCtx || this.baseCtx)
            .setColor(this.rgba)
            .setSize(this.size);
        return this;
    };
    PaintCursor.prototype.setColor = function (rgba) {
        this.rgba = rgba;
        this.tool.setColor(rgba);
        return this;
    };
    PaintCursor.prototype.setSize = function (size) {
        this.size = size;
        this.tool.setSize(size);
        return this;
    };
    PaintCursor.prototype.setLabel = function (label) {
        this.label = label;
        return this;
    };
    PaintCursor.prototype.show = function () {
        this.isVisible = true;
        return this;
    };
    PaintCursor.prototype.hide = function () {
        this.isVisible = false;
        return this;
    };
    return PaintCursor;
}());



/***/ }),

/***/ "./src/app/draw_modules/ruler.ts":
/*!***************************************!*\
  !*** ./src/app/draw_modules/ruler.ts ***!
  \***************************************/
/*! exports provided: Ruler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ruler", function() { return Ruler; });
/* harmony import */ var _brush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brush */ "./src/app/draw_modules/brush.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Ruler = /** @class */ (function (_super) {
    __extends(Ruler, _super);
    function Ruler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ruler.prototype.updatePath = function (newX, newY) {
        this.pathX[1] = newX;
        this.pathY[1] = newY;
    };
    return Ruler;
}(_brush__WEBPACK_IMPORTED_MODULE_0__["Brush"]));



/***/ }),

/***/ "./src/app/services/drawchat-brush.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/drawchat-brush.service.ts ***!
  \****************************************************/
/*! exports provided: DrawchatBrushService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatBrushService", function() { return DrawchatBrushService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _draw_modules_brush__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../draw_modules/brush */ "./src/app/draw_modules/brush.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Keeps track of state for brush - color and size
var DrawchatBrushService = /** @class */ (function () {
    function DrawchatBrushService() {
        this.rgba = _draw_modules_brush__WEBPACK_IMPORTED_MODULE_2__["Brush"].default.rgba;
        this.size = _draw_modules_brush__WEBPACK_IMPORTED_MODULE_2__["Brush"].default.size;
        this.tool = 'BRUSH';
        this.colorChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.sizeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.toolChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    DrawchatBrushService.prototype.changeSize = function (size) {
        this.size = size;
        this.sizeChanged.next(size);
    };
    DrawchatBrushService.prototype.changeColor = function (rgb) {
        try {
            var r = parseInt(rgb[0]);
            var g = parseInt(rgb[1]);
            var b = parseInt(rgb[2]);
            this.rgba = [r, g, b, this.rgba[3]];
        }
        catch (_a) {
            return;
        }
        this.colorChanged.next(this.rgba);
    };
    DrawchatBrushService.prototype.changeAlpha = function (a) {
        this.rgba[3] = a;
        this.colorChanged.next(this.rgba);
    };
    DrawchatBrushService.prototype.changeColorAndAlpha = function (rgba) {
        try {
            var r = parseInt(rgba[0]);
            var g = parseInt(rgba[1]);
            var b = parseInt(rgba[2]);
            var a = parseFloat(rgba[3]);
            this.rgba = [r, g, b, a];
        }
        catch (_a) {
            return;
        }
        this.colorChanged.next(this.rgba);
    };
    DrawchatBrushService.prototype.changeTool = function (tool) {
        this.tool = tool;
        this.toolChanged.next(tool);
    };
    DrawchatBrushService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DrawchatBrushService);
    return DrawchatBrushService;
}());



/***/ }),

/***/ "./src/app/services/drawchat-canvas-data-cache.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/drawchat-canvas-data-cache.service.ts ***!
  \****************************************************************/
/*! exports provided: DrawchatCanvasDataCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatCanvasDataCacheService", function() { return DrawchatCanvasDataCacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DrawchatCanvasDataCacheService = /** @class */ (function () {
    function DrawchatCanvasDataCacheService() {
        setTimeout(this.resetCache, 20000);
    }
    DrawchatCanvasDataCacheService.prototype.setCache = function (cacheData, roomId) {
        sessionStorage.setItem('canvasCacheRoomId', roomId);
        sessionStorage.setItem('canvasCache', cacheData);
        setTimeout(this.resetCache, 20000);
    };
    DrawchatCanvasDataCacheService.prototype.resetCache = function () {
        sessionStorage.removeItem('canvasCacheRoomId');
        sessionStorage.removeItem('canvasCache');
    };
    DrawchatCanvasDataCacheService.prototype.getCachedData = function (roomId) {
        if (sessionStorage.getItem('canvasCacheRoomId') === roomId) {
            return sessionStorage.getItem('canvasCache');
        }
        else {
            return null;
        }
    };
    DrawchatCanvasDataCacheService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DrawchatCanvasDataCacheService);
    return DrawchatCanvasDataCacheService;
}());



/***/ }),

/***/ "./src/app/services/drawchat-color.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/drawchat-color.service.ts ***!
  \****************************************************/
/*! exports provided: DrawchatColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatColorService", function() { return DrawchatColorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DrawchatColorService = /** @class */ (function () {
    function DrawchatColorService() {
        this.currRgb = [1, 1, 1,];
    }
    DrawchatColorService.prototype.get = function (rgbOrHsl) {
        if (rgbOrHsl == 'rgb') {
            return this.currRgb;
        }
        else if (rgbOrHsl == 'hsl') {
            return this.rgbToHsl(this.currRgb);
        }
    };
    DrawchatColorService.prototype.set = function (_a) {
        var rgbOrHsl = _a.rgbOrHsl, vals = _a.vals;
        if (rgbOrHsl == 'rgb') {
            this.currRgb = vals;
            return;
        }
        else if (rgbOrHsl == 'hsl') {
            this.currRgb = this.hslToRgb(vals);
            return;
        }
    };
    DrawchatColorService.prototype.hslToRgb = function (_a) {
        var h = _a[0], s = _a[1], l = _a[2];
        h /= 360, s /= 100, l /= 100;
        var r, g, b;
        if (s == 0) {
            r = g = b = l; // achromatic
        }
        else {
            var hue2rgb = function hue2rgb(p, q, t) {
                if (t < 0)
                    t += 1;
                if (t > 1)
                    t -= 1;
                if (t < 1 / 6)
                    return p + (q - p) * 6 * t;
                if (t < 1 / 2)
                    return q;
                if (t < 2 / 3)
                    return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    };
    DrawchatColorService.prototype.rgbToHsl = function (_a) {
        var r = _a[0], g = _a[1], b = _a[2];
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0; // achromatic
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
    };
    DrawchatColorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DrawchatColorService);
    return DrawchatColorService;
}());



/***/ }),

/***/ "./src/app/services/drawchat-token-calculator.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/drawchat-token-calculator.service.ts ***!
  \***************************************************************/
/*! exports provided: DrawchatTokenCalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatTokenCalculatorService", function() { return DrawchatTokenCalculatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drawchat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawchat.service */ "./src/app/services/drawchat.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// TODO: Double responsibility - keeping the room state and 
var DrawchatTokenCalculatorService = /** @class */ (function () {
    function DrawchatTokenCalculatorService(drawChatService) {
        this.drawChatService = drawChatService;
        this.TOKEN_CAP = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].roomTimer.tokenCap;
        this.TOKEN_INTERVAL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].roomTimer.tokenInterval;
        this.TOKEN_TIME_VALUE = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].roomTimer.tokenTimeValue;
    }
    DrawchatTokenCalculatorService.prototype.roomIsActive = function () {
        var now = new Date().getTime();
        return now < this.expiresAt;
    };
    DrawchatTokenCalculatorService.prototype.getTokensConsumed = function () {
        return Math.round((this.expiresAt - this.createdAt) / this.TOKEN_TIME_VALUE) - 1;
    };
    DrawchatTokenCalculatorService.prototype.getTokensAvailable = function () {
        var now = new Date().getTime();
        var tokensReceivedByNow = Math.floor((now - this.createdAt) / this.TOKEN_INTERVAL);
        return Math.min(tokensReceivedByNow, this.TOKEN_CAP) - this.getTokensConsumed();
    };
    DrawchatTokenCalculatorService.prototype.getTimeTilNextToken = function () {
        var now = new Date().getTime();
        if (this.getTokensConsumed() >= this.TOKEN_CAP) {
            return null;
        }
        var timeSinceLastToken = (now - this.createdAt) % this.TOKEN_INTERVAL;
        return this.TOKEN_INTERVAL - timeSinceLastToken;
    };
    DrawchatTokenCalculatorService.prototype.getTimeTilExpire = function () {
        var now = new Date().getTime();
        return Math.max(this.expiresAt - now, 0);
    };
    DrawchatTokenCalculatorService.prototype.getTokenInterval = function () {
        return this.TOKEN_INTERVAL;
    };
    DrawchatTokenCalculatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_drawchat_service__WEBPACK_IMPORTED_MODULE_1__["DrawchatService"]])
    ], DrawchatTokenCalculatorService);
    return DrawchatTokenCalculatorService;
}());



/***/ }),

/***/ "./src/app/services/drawchat.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/drawchat.service.ts ***!
  \**********************************************/
/*! exports provided: DrawchatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawchatService", function() { return DrawchatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DrawchatService = /** @class */ (function () {
    function DrawchatService(_http, _sessionService) {
        this._http = _http;
        this._sessionService = _sessionService;
    }
    DrawchatService.prototype.createRoom = function (data) {
        var header = this._sessionService.getTokenHeader();
        return this._http.post('/rooms/create', data, header);
    };
    DrawchatService.prototype.fetchRooms = function () {
        return this._http.get('/rooms');
    };
    DrawchatService.prototype.fetchRoom = function (id) {
    };
    DrawchatService.prototype.fetchRoomsByJoiner = function (joinerId) {
        return this._http.get('/rooms?user=' + joinerId);
    };
    DrawchatService.prototype.fetchRoomsByTag = function (tag) {
        return this._http.get('/rooms?tag=' + tag);
    };
    DrawchatService.prototype.fetchLog = function (id) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.logs + (id + "_0.txt"), { responseType: "text" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return JSON.parse(data + "]"); }));
    };
    DrawchatService.prototype.fetchRoomTokenConfig = function () {
        return this._http.get('/rooms/config');
    };
    DrawchatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], DrawchatService);
    return DrawchatService;
}());



/***/ }),

/***/ "./src/app/services/mousepos.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/mousepos.service.ts ***!
  \**********************************************/
/*! exports provided: MouseposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseposService", function() { return MouseposService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouseposService = /** @class */ (function () {
    function MouseposService() {
    }
    // Given a mouse event and element, find the mouse position relative to the element's
    // top left corner
    MouseposService.prototype.getMousePos = function (event, elem) {
        var rect = elem.getBoundingClientRect();
        var zoom = parseFloat(elem.style.zoom || '1');
        return {
            x: Math.round(event.clientX / zoom - rect.left),
            y: Math.round(event.clientY / zoom - rect.top)
        };
    };
    ;
    MouseposService.prototype.getMousePosTracker = function (elem) {
        var _this = this;
        return function (event) { return _this.getMousePos(event, elem); };
    };
    MouseposService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MouseposService);
    return MouseposService;
}());



/***/ }),

/***/ "./src/app/services/session.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/session.service.ts ***!
  \*********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionService = /** @class */ (function () {
    function SessionService() {
    }
    SessionService.prototype.setUserToken = function (token) {
        localStorage.setItem('drawwithme_user_token', token);
    };
    SessionService.prototype.getUserToken = function () {
        return localStorage.getItem('drawwithme_user_token');
    };
    SessionService.prototype.getTokenHeader = function () {
        var token = this.getUserToken();
        return { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', token) };
    };
    SessionService.prototype.removeUserToken = function () {
        return localStorage.removeItem('drawwithme_user_token');
    };
    SessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/services/sockets.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sockets.service.ts ***!
  \*********************************************/
/*! exports provided: SocketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketsService", function() { return SocketsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/session.service */ "./src/app/services/session.service.ts");
/* harmony import */ var _socket_modules_socket_draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socket_modules/socket-draw */ "./src/app/socket_modules/socket-draw.ts");
/* harmony import */ var _socket_modules_socket_room__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../socket_modules/socket-room */ "./src/app/socket_modules/socket-room.ts");
/* harmony import */ var _socket_modules_socket_chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../socket_modules/socket-chat */ "./src/app/socket_modules/socket-chat.ts");
/* harmony import */ var _socket_modules_socket_connection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../socket_modules/socket-connection */ "./src/app/socket_modules/socket-connection.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SocketsService = /** @class */ (function () {
    function SocketsService(session) {
        this.session = session;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].endpoints.socketServer;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url, { autoConnect: false });
        this.connectionModule = new _socket_modules_socket_connection__WEBPACK_IMPORTED_MODULE_6__["ConnectionSocketModule"](this.session, this.socket);
        this.drawModule = new _socket_modules_socket_draw__WEBPACK_IMPORTED_MODULE_3__["DrawSocketModule"](this.socket);
        this.roomModule = new _socket_modules_socket_room__WEBPACK_IMPORTED_MODULE_4__["RoomSocketModule"](this.socket);
        this.chatModule = new _socket_modules_socket_chat__WEBPACK_IMPORTED_MODULE_5__["ChatSocketModule"](this.socket);
    }
    SocketsService.prototype.connect = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.url);
    };
    SocketsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], SocketsService);
    return SocketsService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.signUp = function (data) {
        return this._http.post('/users/signup', data);
    };
    UserService.prototype.signIn = function (data) {
        return this._http.post('/users/signin', data);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/window.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/window.service.ts ***!
  \********************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WindowService = /** @class */ (function () {
    function WindowService() {
    }
    WindowService.prototype.onWindowUnload = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            window.onunload = function () { observer.next(); };
        });
    };
    WindowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WindowService);
    return WindowService;
}());



/***/ }),

/***/ "./src/app/socket_modules/socket-chat.ts":
/*!***********************************************!*\
  !*** ./src/app/socket_modules/socket-chat.ts ***!
  \***********************************************/
/*! exports provided: ChatSocketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSocketModule", function() { return ChatSocketModule; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var ChatSocketModule = /** @class */ (function () {
    function ChatSocketModule(socket) {
        this.socket = socket;
    }
    ChatSocketModule.prototype.emitNewMessage = function (message) {
        this.socket.emit('chatMessageSent', { data: message });
    };
    ChatSocketModule.prototype.onNewMessage = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('peersChatMessageSent', function (data) {
                observer.next(data);
            });
        });
    };
    return ChatSocketModule;
}());



/***/ }),

/***/ "./src/app/socket_modules/socket-connection.ts":
/*!*****************************************************!*\
  !*** ./src/app/socket_modules/socket-connection.ts ***!
  \*****************************************************/
/*! exports provided: ConnectionSocketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionSocketModule", function() { return ConnectionSocketModule; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

// Handles room administrative tasks such as
// Tokens and updating user list
var ConnectionSocketModule = /** @class */ (function () {
    function ConnectionSocketModule(sessionService, socket) {
        this.session = sessionService;
        this.socket = socket;
    }
    ConnectionSocketModule.prototype.joinRoom = function (room) {
        this.connect();
        var token = this.session.getUserToken();
        this.socket.emit('join', { room: room, token: token });
    };
    ConnectionSocketModule.prototype.emitTimeOut = function () {
        this.socket.emit('timeOut');
    };
    ConnectionSocketModule.prototype.leaveRoom = function () {
        this.disconnect();
    };
    ConnectionSocketModule.prototype.connect = function () {
        console.log("CONNECTING");
        this.socket.connect();
    };
    ConnectionSocketModule.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    ConnectionSocketModule.prototype.isConnected = function () {
        return this.socket.connected;
    };
    ConnectionSocketModule.prototype.onForceDisconnect = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('forceDisconnect', function () {
                observer.next();
            });
        });
    };
    return ConnectionSocketModule;
}());



/***/ }),

/***/ "./src/app/socket_modules/socket-draw.ts":
/*!***********************************************!*\
  !*** ./src/app/socket_modules/socket-draw.ts ***!
  \***********************************************/
/*! exports provided: DrawSocketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawSocketModule", function() { return DrawSocketModule; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var DrawSocketModule = /** @class */ (function () {
    function DrawSocketModule(socket) {
        // this.socketsService
        this.socket = socket;
    }
    DrawSocketModule.prototype.emitCursorSizeUpdate = function (data) {
        this.socket.emit('cursorSizeUpdate', { data: data });
    };
    DrawSocketModule.prototype.emitMousePosUpdate = function (data) {
        this.socket.emit('mousePosUpdate', { data: data });
    };
    DrawSocketModule.prototype.emitCanvasActionStart = function (data) {
        this.socket.emit('canvasActionStart', { data: data });
    };
    DrawSocketModule.prototype.emitCanvasActionEnd = function (data) {
        this.socket.emit('canvasActionEnd', { data: data });
    };
    DrawSocketModule.prototype.onPeersCursorSizeUpdate = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('peersCursorSizeUpdate', function (data) {
                observer.next(data);
            });
        });
    };
    DrawSocketModule.prototype.onPeersMousePosUpdate = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('peersMousePosUpdate', function (data) {
                observer.next(data);
            });
        });
    };
    DrawSocketModule.prototype.onPeersCanvasActionStart = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('peersCanvasActionStart', function (data) {
                observer.next(data);
            });
        });
    };
    DrawSocketModule.prototype.onPeersCanvasActionEnd = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('peersCanvasActionEnd', function (data) {
                observer.next(data);
            });
        });
    };
    DrawSocketModule.prototype.emitSnapshot = function () {
        this.socket.emit('snapShot');
    };
    return DrawSocketModule;
}());



/***/ }),

/***/ "./src/app/socket_modules/socket-room.ts":
/*!***********************************************!*\
  !*** ./src/app/socket_modules/socket-room.ts ***!
  \***********************************************/
/*! exports provided: RoomSocketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomSocketModule", function() { return RoomSocketModule; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

// Handles room administrative tasks such as
// Tokens and updating user list
var RoomSocketModule = /** @class */ (function () {
    function RoomSocketModule(socket) {
        this.socket = socket;
    }
    RoomSocketModule.prototype.onReceivingRoomInfo = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('roomInfo', function (data) {
                observer.next(data);
            });
        });
    };
    RoomSocketModule.prototype.emitInfoToPeer = function (_a) {
        var peerId = _a.peerId, data = _a.data;
        this.socket.emit('shareInfoWithPeer', { id: peerId, data: data });
    };
    RoomSocketModule.prototype.onReceivingPeerInfo = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('peerInfoShared', function (data) {
                observer.next(data);
            });
        });
    };
    RoomSocketModule.prototype.onPeerJoin = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('peerJoined', function (data) {
                _this.socket.emit('shareInfoWithPeer', { id: data['id'], data: _this.currUsername });
                observer.next(data);
            });
        });
    };
    RoomSocketModule.prototype.onPeerLeave = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('peerLeft', function (data) {
                observer.next(data);
            });
        });
    };
    RoomSocketModule.prototype.onUsernameAssigned = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('assignedUsername', function (data) {
                _this.currUsername = data['username'];
                observer.next(data);
            });
        });
    };
    RoomSocketModule.prototype.onPeersCanvasRequest = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('peersCanvasRequest', function (data) {
                observer.next(data);
            });
        });
    };
    RoomSocketModule.prototype.emitCanvasData = function (data) {
        this.socket.emit('canvasDataToPeer', data);
    };
    RoomSocketModule.prototype.onCanvasDataReceived = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('canvasDataReceived', function (data) {
                observer.next(data);
            });
        });
    };
    RoomSocketModule.prototype.onStrokeLogSignal = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('strokeLogFetch', function (data) {
                observer.next(data);
            });
        });
    };
    RoomSocketModule.prototype.onSnapshotSignal = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('snapShotFetch', function (data) {
                observer.next(data);
            });
        });
    };
    RoomSocketModule.prototype.onSnapshotPoll = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('snapShotPoll', function (data) {
                observer.next(data);
            });
        });
    };
    RoomSocketModule.prototype.onSnapshotPollFinish = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('snapShotPollFinish', function () {
                observer.next();
            });
        });
    };
    RoomSocketModule.prototype.sendSnapshot = function (data) {
        this.socket.emit('snapShot', data);
    };
    RoomSocketModule.prototype.emitTokenConsumption = function () {
        this.socket.emit('tokenConsumed');
    };
    RoomSocketModule.prototype.onTokenConsumption = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
            _this.socket.on('roomTokenConsumed', function (data) {
                observer.next(data);
            });
        });
    };
    return RoomSocketModule;
}());



/***/ }),

/***/ "./src/app/timer_modules/timer.ts":
/*!****************************************!*\
  !*** ./src/app/timer_modules/timer.ts ***!
  \****************************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var Timer = /** @class */ (function () {
    function Timer(startTimeInMs) {
        this.onTimeOut = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.startTime = startTimeInMs;
        this.restartTime = this.startTime;
        this.currTime = this.startTime;
        this.observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.updateCurrTime.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.formatTime.bind(this)));
    }
    Timer.prototype.updateCurrTime = function () {
        this.currTime -= 1000;
        if (this.currTime <= 0) {
            this.onTimeOut.next(true);
            this.currTime = this.restartTime;
        }
        return this.currTime;
    };
    Timer.prototype.formatTime = function (t) {
        var hours = Math.floor(t / (3600 * 1000));
        t -= hours * (3600 * 1000);
        var minutes = Math.floor(t / (60 * 1000)) % 60;
        t -= minutes * (60 * 1000);
        var seconds = Math.floor(t / (1000)) % 1000;
        return [hours + 'h', minutes + 'm', seconds + 's'].join(' ');
    };
    Timer.prototype.setTime = function (timeInMs) {
        this.startTime = timeInMs;
        this.currTime = this.startTime;
    };
    Timer.prototype.setRestartTime = function (timeInMs) {
        this.restartTime = timeInMs;
    };
    return Timer;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    endpoints: {
        socketServer: 'localhost:5000/',
        logs: 'http://localhost:1337/logs/',
        thumb: 'http://localhost:1337/thumbs/'
    },
    roomTimer: {
        tokenCap: 5,
        tokenInterval: 1000 * 60 * 60 * 2,
        tokenTimeValue: 1000 * 60 * 60 * 4
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/QuangNguyen/Desktop/Projects/MEAN/project/draw/public/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map