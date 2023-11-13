import { OutputView } from "../View/index.js";

export default async function executeOrRetryAsync(asyncFn, context) {
  try {
    return await asyncFn.call(context);
  } catch (error) {
    OutputView.print(error.message);
    return executeOrRetryAsync(asyncFn, context);
  }
}
