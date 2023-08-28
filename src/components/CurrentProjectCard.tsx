import { Card, CardBody } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import projectImage from "../assets/trigger-collider.png";

const CurrentProjectCard = () => {
  return (
    <Card>
      <CardBody>
        <Image src={projectImage} width={250}></Image>
      </CardBody>
    </Card>
  );
};

export default CurrentProjectCard;
