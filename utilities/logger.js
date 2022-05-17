const pino = require("pino");

const logger = pino({
    level: "info",
    transport: {
        target: "pino-pretty",
        options: {
            colorize: false,
            destination: "./resources/logs/automationLogs.log",
            append: false,
            singleLine: true,
            ignore: "pid,hostname",
            translateTime: "SYS:yyyy-mm-dd HH:MM:ss.l",
            mkdir: "true",
        },
    },
});

const loggerDebug = pino({
    level: "debug",
    transport: {
        target: "pino-pretty",
        options: {
            colorize: false,
            destination: "./resources/logs/automationDebugLogs.log",
            append: false,
            singleLine: true,
            ignore: "pid,hostname",
            translateTime: "SYS:yyyy-mm-dd HH:MM:ss.l",
            mkdir: "true",
        },
    },
});

const tagName = "AUTOMATION";

const printSeparator = () => {
    log.info(
        "------------------------------------------------------------------------------------------"
    );
};

const printNewLine = () => {
    log.info("");
};

const startTest = (testName) => {
    printSeparator();
    log.info(`Test: ${testName}`);
    printSeparator();
};

const endTest = (status) => {
    printSeparator();
    log.info(status);
    printSeparator();
    printNewLine();
    printNewLine();
};

const startSuite = (suiteName) => {
    printNewLine();
    printSeparator();
    printSeparator();
    log.info(`Beginning: ${suiteName}`);
    printSeparator();
    printSeparator();
    printNewLine();
};

const log = {
    info: (message) => {
        loggerDebug.info(` ${tagName}: ${message}`);
        logger.info(` ${tagName}: ${message}`);
    },
    debug: (message) => {
        loggerDebug.debug(`${tagName}: ${message}`);
    },
    warn: (message) => {
        loggerDebug.warn(` ${tagName}: ${message}`);
        logger.warn(` ${tagName}: ${message}`);
    },
    error: (message) => {
        loggerDebug.error(`${tagName}: ${message}`);
        logger.error(`${tagName}: ${message}`);
    },
    fatal: (message) => {
        loggerDebug.fatal(`${tagName}: ${message}`);
        logger.fatal(`${tagName}: ${message}`);
    },
};

module.exports = { log };
