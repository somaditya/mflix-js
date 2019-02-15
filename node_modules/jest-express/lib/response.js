"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    constructor() {
        this.headersSent = false;
        this.locals = {};
        this.append = jest.fn();
        this.attachment = jest.fn();
        this.cookie = jest.fn();
        this.clearCookie = jest.fn();
        this.download = jest.fn();
        this.end = jest.fn();
        this.format = jest.fn();
        this.get = jest.fn();
        this.json = jest.fn();
        this.jsonp = jest.fn();
        this.links = jest.fn();
        this.location = jest.fn();
        this.redirect = jest.fn();
        this.render = jest.fn();
        this.send = jest.fn();
        this.sendFile = jest.fn();
        this.sendStatus = jest.fn();
        this.set = jest.fn();
        this.status = jest.fn(() => {
            return {
                end: this.end,
                send: this.send,
                sendFile: this.sendFile,
            };
        });
        this.type = jest.fn();
        this.vary = jest.fn();
        return this;
    }
    setHeadersSent(value) {
        this.headersSent = value;
    }
    setLocals(key, value) {
        this.locals[key] = value;
    }
    resetMocked() {
        this.headersSent = false;
        this.locals = {};
        this.append.mockReset();
        this.attachment.mockReset();
        this.cookie.mockReset();
        this.clearCookie.mockReset();
        this.download.mockReset();
        this.end.mockReset();
        this.format.mockReset();
        this.get.mockReset();
        this.json.mockReset();
        this.jsonp.mockReset();
        this.links.mockReset();
        this.location.mockReset();
        this.redirect.mockReset();
        this.render.mockReset();
        this.send.mockReset();
        this.sendFile.mockReset();
        this.sendStatus.mockReset();
        this.set.mockReset();
        this.status.mockReset();
        this.type.mockReset();
        this.vary.mockReset();
    }
}
exports.Response = Response;
//# sourceMappingURL=response.js.map