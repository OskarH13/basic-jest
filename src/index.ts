import { argv } from "node:process"
import { main } from "./utils/handleWorkflow"

try {
  const result = main(argv)
  console.log(result)
} catch (error) {

  if (error instanceof Error) {
    console.error(error.message)
  } else {
    console.error('An error occurred', error)
  }

  // if the error is thrown, the process will exit with a non-zero code
  process.exit(1)
}



