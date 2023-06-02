import { IEndpointError, isEndpointError } from "@uncoverrx-user/api";
import { enqueueSnackbar } from "notistack";

export function checkError<T>(maybeError: T | IEndpointError) {
    if (isEndpointError(maybeError)) {
        // eslint-disable-next-line no-console
        console.error(maybeError.details);
        enqueueSnackbar({
            variant: "error",
            message: `Something went wrong: ${maybeError.message}. Check the console for more details.`,
            autoHideDuration: 20,
        });

        return undefined;
    }

    return maybeError;
}
