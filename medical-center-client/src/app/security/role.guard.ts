import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService: AuthenticationService = inject(AuthenticationService);
  const expectedRoles = route.data['role'] as string[];
  const userRole = authService.getRole();
  let role;
  if (userRole != null) {
    role = userRole.slice(1, -1);
  }
  if (userRole != null && role != null) {
    if (expectedRoles.includes(role)) {
      return true;
    }
  }
  return false;
};
