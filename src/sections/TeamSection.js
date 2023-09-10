import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

import jagan from "../assets/images/jagannath-ramesh.png";
import chatgpt from "../assets/images/chatgpt-logo-png.webp";
import kashyab from "../assets/images/kashyab.png";

export function TeamSection() {
  const profiles = [
    {
      imgSrc: jagan,
      alt: "profile-picture",
      name: "Jagan Ramesh",
      role: "Product",
    },
    {
      imgSrc: kashyab,
      alt: "profile-picture",
      name: "Kashyab Murali",
      role: "Developer",
    },
    {
      imgSrc: chatgpt,
      alt: "profile-picture",
      name: "Sekar",
      role: "Everything Else",
    },
  ];

  return (
    <div className="flex flex-wrap md:space-x-8 justify-center">
      {profiles.map((profile, index) => (
        <Card key={index} className="w-full md:w-96 mb-8 md:mb-0">
          <CardHeader floated={false} className="h-80">
            <img src={profile.imgSrc} alt={profile.alt} />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {profile.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              {profile.role}
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
