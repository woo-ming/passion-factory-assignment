import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerLoader = (application: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Passion Factory Assignment API')
    .setDescription('이 문서는 열정 팩토리 과제용 API 문서입니다.')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(application, config);
  SwaggerModule.setup('api', application, document);
};
