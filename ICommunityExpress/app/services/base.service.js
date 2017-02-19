"use strict";
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var http_2 = require("@angular/http");
var BaseService = (function () {
    function BaseService(http) {
        this.http = http;
    }
    BaseService.prototype.get = function (url, params) {
        var options = new http_2.RequestOptions();
        if (params) {
            var paramString = this.jsonToQueryString(params);
            options = new http_2.RequestOptions({
                search: new http_2.URLSearchParams(paramString)
            });
        }
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BaseService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BaseService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        //console.warn(errMsg);
        console.warn(JSON.stringify(error));
        return Rx_1.Observable.throw(errMsg);
    };
    BaseService.prototype.jsonToQueryString = function (json) {
        //return '?' + 
        return Object.keys(json).map(function (key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map