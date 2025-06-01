import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';
    const ip = req.ip;
    const start = Date.now();

    res.on('finish', () => {
      const delay = Date.now() - start;
      const { statusCode } = res;

      this.logger.log(`${method} ${originalUrl} ${statusCode} - ${delay}ms - IP: ${ip} - UA: ${userAgent}`);
    });

    next();
  }
}