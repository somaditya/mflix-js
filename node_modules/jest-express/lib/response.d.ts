export declare class Response {
    headersSent: boolean;
    locals: any;
    append: any;
    attachment: any;
    cookie: any;
    clearCookie: any;
    download: any;
    end: any;
    format: any;
    get: any;
    json: any;
    jsonp: any;
    links: any;
    location: any;
    redirect: any;
    render: any;
    send: any;
    sendFile: any;
    sendStatus: any;
    set: any;
    status: any;
    type: any;
    vary: any;
    constructor();
    setHeadersSent(value: boolean): void;
    setLocals(key: string, value: string): void;
    resetMocked(): void;
}
