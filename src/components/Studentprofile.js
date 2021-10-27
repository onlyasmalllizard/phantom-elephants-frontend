import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import LeadText from "@material-tailwind/react/LeadText";

export default function StudentProfile(props) {
  return (
    <Card>
      <Image src={props.img} />
      <CardBody>
        <LeadText>{props.bio}</LeadText>
      </CardBody>
    </Card>
  );
}
