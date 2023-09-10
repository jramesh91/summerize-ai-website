import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon

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
      linkedin: "https://www.linkedin.com/in/jagannath-ramesh/",
      twitter: "https://twitter.com/JagannRamesh",
    },
    {
      imgSrc: kashyab,
      alt: "profile-picture",
      name: "Kashyab Murali",
      role: "Developer",
      linkedin: "https://www.linkedin.com/in/kashyab-murali/",
      twitter: "https://twitter.com/kashyab_19",
    },
    {
      imgSrc: chatgpt,
      alt: "profile-picture",
      name: "ChatGPT",
      role: "Everything Else",
      linkedin: "https://www.linkedin.com/in/jagannath-ramesh/",
      twitter: "https://twitter.com/JagannRamesh",
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
            <Tooltip content="Connect on LinkedIn">
              <Typography
                as="a"
                href={profile.linkedin}
                variant="lead"
                color="blue"
                textGradient
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow on Twitter">
              <Typography
                as="a"
                href={profile.twitter}
                variant="lead"
                color="light-blue"
                textGradient
              >
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
