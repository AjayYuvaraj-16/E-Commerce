import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function useResponsive(
    customSize: number | "xs" | "sm" | "md" | "lg" | "xl" = "sm"
) {
    const theme = useTheme();
    const isBelowSm = useMediaQuery(theme.breakpoints.down("sm"));
    const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
    const isBelowLg = useMediaQuery(theme.breakpoints.down("lg"));
    const isAboveSm = useMediaQuery(theme.breakpoints.up("sm"));
    const isAboveMd = useMediaQuery(theme.breakpoints.up("md"));
    const isAboveLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isBelowCustom = useMediaQuery(theme.breakpoints.down(customSize));
    const isAboveCustom = useMediaQuery(theme.breakpoints.up(customSize));

    return {
        isBelowSm,
        isBelowMd,
        isBelowLg,
        isAboveSm,
        isAboveMd,
        isAboveLg,
        isBelowCustom,
        isAboveCustom,
    };
}
export default useResponsive;
