import { Card, CardBody } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import projectImage from "../assets/trigger-collider.png";
import { Flex } from "@chakra-ui/react";

const CurrentProjectCard = () => {
  return (
    <Flex justifyContent="space-around">
      <Card width={300} position="relative">
        <CardBody>
          <Image
            src={projectImage}
            width={250}
            alt="Current Project Snapshot"
            borderRadius="lg"
            marginX="auto"
          ></Image>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default CurrentProjectCard;
