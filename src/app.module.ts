import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [PersonController],
  providers: [AppService],
})
export class AppModule {}
