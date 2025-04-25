import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class JwtSelfAdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    if (req.user?.role !== "admin" || req.user.id !== parseInt(req.params.id)) {
      throw new ForbiddenException({
        message: "faqt admin va oziniki uchun",
      });
    }
    return true; 
  }
}
