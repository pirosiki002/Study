import * as z from "zod";

const schema = z.object({
  str: z.string(),
  num: z.number(),
});

// スキーマから型を生成！
type SchemaType = z.infer<typeof schema>;

// テスト関数
function validateSchema(data: unknown): SchemaType | null {
  // safeParseを使用してバリデーション
  const result = schema.safeParse(data);

  if (result.success) {
    return result.data;
  } else {
    console.error(result.error);
    return null;
  }
}

// テストデータ
const validData = { str: "Hello", num: 42 };
const invalidData = { str: "Hello", num: "Not a number" };

// テスト実行
console.log(validateSchema(validData)); // { str: 'Hello', num: 42 }
console.log(validateSchema(invalidData)); // null (バリデーションエラー)
