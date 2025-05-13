import {Card, CardContent, Text, Spacer } from "vcc-ui";

interface CardProps {
    id: string,
    modelName: string,
    bodyType: string,
    modelType: string,
    imageUrl: string
};

export function CarCard(props: CardProps) {
    return (
        <Card href={"/learn/" + props.id}>
            <CardContent>
                <Text subStyle="emphasis">{props.bodyType}</Text>
                <Text variant="ootah">{props.modelName}</Text>
                <Spacer />
                <Text>This is a is a link that will take you to volvocars.com</Text>
            </CardContent>
        </Card>
    );

};