import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './di/app.module';
import { swaggerLoader } from './common/documentation/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerLoader(app);
  await app.listen(+(process.env.PORT as string));
}
bootstrap();
