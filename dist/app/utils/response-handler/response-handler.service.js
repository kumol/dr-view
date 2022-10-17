"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHandlerService = void 0;
const common_1 = require("@nestjs/common");
let ResponseHandlerService = class ResponseHandlerService {
    success(res, message, body, others) {
        const responseObj = {
            statusCode: common_1.HttpStatus.OK,
            message: message,
            total: others.total,
            page: 0,
            limit: 0,
            body: body
        };
        others.total ? responseObj.total = others.total : null;
        others.page ? responseObj.page = others.page : null;
        others.limit ? responseObj.limit = others.limit : null;
        responseObj.body = body;
        return res.json(responseObj);
    }
    ok(res, message, body) {
        return res.json;
    }
    notFound(res, Response, message, body) {
    }
};
ResponseHandlerService = __decorate([
    (0, common_1.Injectable)()
], ResponseHandlerService);
exports.ResponseHandlerService = ResponseHandlerService;
//# sourceMappingURL=response-handler.service.js.map