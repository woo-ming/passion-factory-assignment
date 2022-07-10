import { Module } from '@nestjs/common';
import { AppController } from 'src/interface/root/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
