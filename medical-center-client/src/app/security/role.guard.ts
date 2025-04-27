import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService: AuthenticationService = inject(AuthenticationService);
  const expectedRoles = route.data['roles'] as string[];
  const userRole = authService.getRole();
  let roles;
  if (userRole != null) {
    roles = userRole.match(/ROLE_\w+/g);
  }
  if (userRole != null)
  console.log(roles);
  console.log(expectedRoles);
  if (userRole != null && roles != null) {
    if (expectedRoles.includes(roles[0])) {
      console.log("authdjklfjsf");
      return true;
    }
  }
  return false;
};
