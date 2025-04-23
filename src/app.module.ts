import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlocksModule } from './blocks/blocks.module';
import { BlockPropertiesModule } from './block_properties/block_properties.module';
import { TypesModule } from './types/types.module';
import { Block } from './blocks/models/block.model';
import { BlockProperty } from './block_properties/models/block_property.model';
import { Type } from './types/models/type.model';
import { PropertiesModule } from './properties/properties.module';
import { Property } from './properties/models/property.model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [Block,BlockProperty,Type,Property],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    BlocksModule,
    BlockPropertiesModule,
    TypesModule,
    PropertiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
