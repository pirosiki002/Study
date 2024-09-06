import { object, string } from "zod";

const UserSchema = object({
  name: string(),
  age: string().transform((val) => parseInt(val, 10)),
});

const userData = {
  name: "Alice",
  age: "30",
};

try {
  const validatedUser = UserSchema.parse(userData);
  console.log("Validated user:", validatedUser);
} catch (error) {
  console.error("Validation error:", error);
}
