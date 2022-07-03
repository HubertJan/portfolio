import { styled } from "goober";
import { FieldLabel } from "src/components/elements/FieldLabel/FieldLabel";

const Box = styled('div')`
    display: flex;
    flex-direction: column;
`;

interface LabeledProps {
    label: string;
    children?: React.ReactNode,
}

export const FieldLabeled: React.FC<LabeledProps> = (
    { label, children }
) => {
    return (
        <Box>
            <FieldLabel text={label} />
            {children}
        </Box>
    );
}