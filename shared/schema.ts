// shared/schema.ts

export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
};

export type InsertUser = Omit<User, "id">;
