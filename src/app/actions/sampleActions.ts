"use server";

interface FormState {
  error: string;
}

export const createTask = async (
  taskId: number,
  state: FormState,
  fromData: FormData
) => {
  // DBにタスクを作成する処理
  console.log("createTask");
  console.log(fromData.get("name"));
  console.log(taskId);
  state.error = "エラーが発生しました。";
  return state;
};
