import config from 'config';
import * as Log4js from 'log4js';

export class Logger {
  public static initialize() {
    let configure = config.get('log4js');
    Log4js.configure(configure as Log4js.Configuration);
  }

  public static infolog(message: string | undefined): void {
    if (message == null) {
      return;
    }
    let logger = Log4js.getLogger('info');
    logger.info(message);
  }

  public static syslogInfo(message: string | undefined): void {
    if (message == null) {
      return;
    }
    let logger = Log4js.getLogger('system');
    logger.info(message);
  }

  public static syslogWarning(message: string | undefined): void {
    if (message == null) {
      return;
    }
    let logger = Log4js.getLogger('system');
    logger.warn(message);
  }

  public static syslogError(message: string | undefined): void {
    if (message == null) {
      return;
    }
    let logger = Log4js.getLogger('system');
    logger.error(message);
  }

  public static error(message: string | undefined): void {
    if (message == null) {
      return;
    }
    let logger = Log4js.getLogger('error');
    logger.error(message);
  }

  public static debug(message: string | undefined): void {
    if (message == null) {
      return;
    }
    let logger = Log4js.getLogger('debug');
    logger.debug(message);
  }
}
