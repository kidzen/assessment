import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';

export function fakeAccount() {
  return {
    type: faker.lorem.words(5),
    provider: faker.lorem.words(5),
    providerAccountId: faker.lorem.words(5),
    refresh_token: undefined,
    access_token: undefined,
    expires_at: undefined,
    token_type: undefined,
    scope: undefined,
    id_token: undefined,
    session_state: undefined,
  };
}
export function fakeAccountComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    type: faker.lorem.words(5),
    provider: faker.lorem.words(5),
    providerAccountId: faker.lorem.words(5),
    refresh_token: undefined,
    access_token: undefined,
    expires_at: undefined,
    token_type: undefined,
    scope: undefined,
    id_token: undefined,
    session_state: undefined,
  };
}
export function fakeSession() {
  return {
    sessionToken: faker.lorem.words(5),
    expires: faker.date.anytime(),
  };
}
export function fakeSessionComplete() {
  return {
    id: faker.string.uuid(),
    sessionToken: faker.lorem.words(5),
    userId: faker.string.uuid(),
    expires: faker.date.anytime(),
  };
}
export function fakeUser() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.lorem.words(5),
    emailVerified: undefined,
    image: undefined,
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.lorem.words(5),
    emailVerified: undefined,
    image: undefined,
  };
}
export function fakeVerificationToken() {
  return {
    identifier: faker.lorem.words(5),
    token: faker.lorem.words(5),
    expires: faker.date.anytime(),
  };
}
export function fakeVerificationTokenComplete() {
  return {
    identifier: faker.lorem.words(5),
    token: faker.lorem.words(5),
    expires: faker.date.anytime(),
  };
}
export function fakePasswordResetToken() {
  return {
    token: faker.lorem.words(5),
    expires: faker.date.anytime(),
  };
}
export function fakePasswordResetTokenComplete() {
  return {
    email: faker.string.uuid(),
    token: faker.lorem.words(5),
    expires: faker.date.anytime(),
  };
}
export function fakeRole() {
  return {
    name: faker.person.fullName(),
  };
}
export function fakeRoleComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
  };
}
export function fakePermission() {
  return {
    action: faker.lorem.words(5),
    subject: faker.lorem.words(5),
  };
}
export function fakePermissionComplete() {
  return {
    id: faker.string.uuid(),
    action: faker.lorem.words(5),
    subject: faker.lorem.words(5),
  };
}
export function fakeRoleHasPermissionComplete() {
  return {
    id: faker.string.uuid(),
    role_id: faker.string.uuid(),
    permission_id: faker.string.uuid(),
  };
}
export function fakeUserHasRoleComplete() {
  return {
    id: faker.string.uuid(),
    role_id: faker.string.uuid(),
    user_id: faker.string.uuid(),
  };
}
export function fakeProduct() {
  return {
    name: faker.commerce.product(),
    supplier: faker.company.name(),
  };
}
export function fakeProductComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    image_id: undefined,
    supplier: faker.company.name(),
  };
}
export function fakeUpload() {
  return {
    path: faker.lorem.words(5),
    type: undefined,
    mime_type: undefined,
    file_size: undefined,
  };
}
export function fakeUploadComplete() {
  return {
    id: faker.string.uuid(),
    path: faker.lorem.words(5),
    type: undefined,
    mime_type: undefined,
    file_size: undefined,
  };
}
