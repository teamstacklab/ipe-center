import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { getEnviromentPath } from './common/helper/env.helper';
import { User } from './api/user/user.entity';

const envFilePath: string = getEnviromentPath(`${__dirname}/common/envs`);


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
