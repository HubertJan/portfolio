import { styled } from "goober";
import { Label } from "src/components/elements/Label/Label";

const Box = styled('div')`
    display: flex;
    flex-direction: column;
`;

interface LabeledProps {
    label: string;
    children?: React.ReactNode,
}

export const Labeled: React.FC<LabeledProps> = (
    { label, children }
) => {
    return (
        <Box>
            <Label text={label} />
            {children}
        </Box>
    );
}