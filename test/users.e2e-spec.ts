import { INestApplication, ValidationPipe } from "@nestjs/common"
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest"
import { AppModule } from "../src/app.module";


describe("User e2e",()=>{
    let app:INestApplication
    let token: String;

    beforeAll(async ()=>{
        const moduleFixture:TestingModule = await Test.createTestingModule({
            imports:[AppModule]
        }).compile();

        app  = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();

        const response = await request(app.getHttpServer())
          .post("/auth/signin_user")
          .send({
            email: "ali.valiyev1@example.com",
            password: "parol123",
          });
        token = response.body.token
    });
    it("/users (GET) --> 200 OK",()=>{
        return request(app.getHttpServer())
          .get("/user")
          .set("Authorization", `Bearer ${token}`)
          .expect("Content-Type",/json/)
          .expect(200)
    })
    it("/users (GET) --> 401 'Unauthorized' error", () => {
      return request(app.getHttpServer())
        .get("/user")
        .expect("Content-Type", /json/)
        .expect(401);
    });

    afterAll(async () => {
      await app.close();
    });
})