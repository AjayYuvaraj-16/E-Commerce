import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface ISectionProps {
    sectionTitle?: string;
}

const SectionHeader = ({ sectionTitle }: ISectionProps) => {
    return (
        <Stack
            sx={{
                mx: "auto",
                width: "fit-content",
                textAlign: "center",
            }}
        >
            <Typography variant="h1" fontWeight={"bold"}>
                {sectionTitle}
            </Typography>
        </Stack>
    );
};

export default SectionHeader;
