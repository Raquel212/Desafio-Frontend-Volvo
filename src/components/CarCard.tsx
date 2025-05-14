import {Card, CardContent, Text, Spacer } from "vcc-ui";
import { Car } from "../types/car.interface";

interface CardProps {
    car: Car;
};

export function CarCard({car}: CardProps) {
    return (
        <Card href={"/learn/" + car?.id}>
            <CardContent>
                <Text subStyle="emphasis">{car?.bodyType}</Text>
                <Text variant="ootah">{car?.modelName}</Text>
                <Spacer />
                <Text>This is a is a link that will take you to volvocars.com</Text>
            </CardContent>
        </Card>
    );

};