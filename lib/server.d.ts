import { ServiceMetadata } from "odata-v4-service-metadata";
import { ServiceDocument } from "odata-v4-service-document";
import { Promise } from "es6-promise";
import * as express from "express";
import { Transform } from "stream";
import { ODataResult } from "./result";
import { ODataController } from "./controller";
import { NavigationPart } from "./visitor";
export declare type GeneratorAction = (value?) => {};
export declare namespace ODataGeneratorHandlers {
    function PromiseHandler(request: any, next: GeneratorAction): any;
    function StreamHandler(request: any, next: GeneratorAction): Promise<{}>;
}
export declare class ODataProcessor extends Transform {
    private serverType;
    private ctrl;
    private instance;
    private resourcePath;
    private workflow;
    private context;
    private method;
    private url;
    private query;
    private entitySets;
    private odataContext;
    private streamStart;
    constructor(context: any, server: any);
    write(chunk: any, done?: Function): boolean;
    write(chunk: any, encoding?: string, done?: Function): any;
    _transform(chunk: any, encoding?: string, done?: Function): void;
    _flush(done?: Function): void;
    __EntityCollectionNavigationProperty(part: NavigationPart): Function;
    __EntityNavigationProperty(part: NavigationPart): Function;
    __PrimitiveProperty(part: NavigationPart): Function;
    __PrimitiveCollectionProperty(part: NavigationPart): Function;
    __read(ctrl: typeof ODataController, part: any, params: any, data?: any, filter?: string): Promise<{}>;
    __EntitySetName(part: NavigationPart): Function;
    __actionOrFunctionImport(part: NavigationPart): Function;
    __actionOrFunction(part: NavigationPart): Function;
    __applyParams(container: any, name: string, params: any, queryString?: string): void;
    execute(body?: any): Promise<ODataResult>;
}
export declare class ODataServer {
    private static _metadataCache;
    static namespace: string;
    static containerName: string;
    static requestHandler(): (req: any, res: any, next: any) => void;
    static createProcessor(context: any): ODataProcessor;
    static $metadata(): ServiceMetadata;
    static document(): ServiceDocument;
    static addController(controller: typeof ODataController, isPublic?: boolean): any;
    static addController(controller: typeof ODataController, isPublic?: boolean, elementType?: Function): any;
    static addController(controller: typeof ODataController, entitySetName?: string, elementType?: Function): any;
    static getController(elementType: Function): any;
    static create(): express.Router;
    static create(port: number): void;
    static create(path: string, port: number): void;
    static create(port: number, hostname: string): void;
    static create(path?: string | RegExp | number, port?: number | string, hostname?: string): void;
}
export declare function ODataErrorHandler(err: any, req: any, res: any, next: any): void;
export declare function createODataServer(server: typeof ODataServer): express.Router;
export declare function createODataServer(server: typeof ODataServer, port: number): void;
export declare function createODataServer(server: typeof ODataServer, path: string, port: number): void;
export declare function createODataServer(server: typeof ODataServer, port: number, hostname: string): void;
