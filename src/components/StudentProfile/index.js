import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import LeadText from '@material-tailwind/react/LeadText';

export default function StudentProfile({ student }) {
  const { name, avatar, email, bootcampId } = student.info;
  return (
    <>
      <Card>
        <Image src={avatar} rounded={true} alt={`Avatar for ${name}`} />
        <CardBody>
          <LeadText>{name}</LeadText>
          <section>
            <p>
              <b>Bootcamp: </b> {bootcampId}
            </p>
            <p>
              <b>Email: </b>
              {email}
            </p>
          </section>
        </CardBody>
      </Card>
    </>
  );
}
