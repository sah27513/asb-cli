export const serviceBus = {
  host: "example-dev.servicebus.windows.net",
  port: 443,
  protocol: "https:",
  authenticationProvider: {
    keyName: "RootManageSharedAccessKey",
    keyValue: "CmcGRdF06yUuPKttvrRbN+sq73qbaq36u1UA5qpcq08=",
    signer: {
      _accessKey: "CmcGRdF06yUuPKttvrRbN+sq73qbaq36u1UA5qpcq08="
    }
  },
  logger: { level: "info", loggerFunction: [Function] },
  strictSSL: true,
  proxy: null,
  xml2jsSettings: {
    explicitCharkey: false,
    trim: false,
    normalize: false,
    normalizeTags: false,
    attrkey: "$",
    charkey: "_",
    explicitArray: false,
    ignoreAttrs: true,
    mergeAttrs: false,
    explicitRoot: true,
    validator: null,
    xmlns: false,
    explicitChildren: false,
    preserveChildrenOrder: false,
    childkey: "$$",
    charsAsChildren: false,
    includeWhiteChars: false,
    async: false,
    strict: true,
    attrNameProcessors: null,
    attrValueProcessors: null,
    tagNameProcessors: null,
    valueProcessors: null,
    rootName: "root",
    xmldec: { version: "1.0", encoding: "UTF-8", standalone: true },
    doctype: null,
    renderOpts: { pretty: true, indent: "  ", newline: "\n" },
    headless: false,
    chunkSize: 10000,
    emptyTag: "",
    cdata: false
  },
  apiVersion: "2016-07"
};
