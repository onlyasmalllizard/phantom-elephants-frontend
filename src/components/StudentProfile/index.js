import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import LeadText from "@material-tailwind/react/LeadText";
import { Header } from "semantic-ui-react";

export default function StudentProfile({ student }) {
  const { name, avatar, email, bootcampId } = student;
  return (
    <>
      <div className="bg-grey text-center flex flex-col w-full justify-evenly items-center">
        <Card>
          <div className="flex justify-center">
            <div className="text-left w-11/12 mb-4">
              <Header as="h3" dividing>
                Student
              </Header>
            </div>
          </div>

          <div className="flex-col items-center">
            <div
              style={{
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image src={avatar} rounded={true} alt={`Avatar for ${name}`} />
            </div>
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
          </div>
        </Card>
      </div>
    </>
  );
}
