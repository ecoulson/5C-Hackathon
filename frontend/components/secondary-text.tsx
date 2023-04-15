import { PropsWithChildren } from "react";
import Text from "./text";

export default function SecondaryText({children}: PropsWithChildren) {
    return <Text><div className="text-white">{children}</div></Text>
}
