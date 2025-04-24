import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 3030;
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT, () => {
      console.log(`ishladi ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
