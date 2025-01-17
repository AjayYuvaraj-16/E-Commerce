import Stack, { StackProps } from "@mui/material/Stack";
import { SxProps, Theme } from "@mui/material";

interface IWrapperStackProps extends StackProps {
    children: React.ReactNode;
    wrapperStackStyles?: SxProps<Theme>;
}
const WrapperStack = ({
    children,
    wrapperStackStyles,
    ...stackProps
}: IWrapperStackProps) => {
    return (
        <Stack sx={wrapperStackStyles} {...stackProps}>
            {children}
        </Stack>
    );
};

export default WrapperStack;
