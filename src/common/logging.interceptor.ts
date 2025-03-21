import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logFilePath = path.join(__dirname, '../logs.txt'); // Ruta del archivo de logs

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();
    const logMessage = `${new Date().toISOString()} - ${request.method} ${request.url}\n`;

    // Escribe en el archivo de logs
    fs.appendFileSync(this.logFilePath, logMessage);

    return next.handle().pipe(
      tap(() => {
        console.log(`Tiempo de ejecución: ${Date.now() - now}ms`);
      }),
    );
  }
}