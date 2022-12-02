import { useState } from 'react';
import {
  Container,
  Title,
  SubTitle,
  SwitchContainer,
  Switch,
  SwitchButton,
  List,
  ScheduleContainer,
  Underline,
  Space
  // ListItem,
  // ItemInfo,
  // ItemFront,
  // ItemDate,
  // ItemDetails,
  // ItemAuthor,
  // ItemPicture,
  // ItemTitle,
  // ItemText,
  // ItemTags,
  // Line,
  // ItemPlace,
} from './ScheduleStyles';

interface ScheduleProps {
  schedule: {
    job: string;
    company: string;
    author: string;
    title: string;
    time: string;
    text: string;
    category: string;
    place: string;
    picture: string[];
  }[][];
}

const Schedule: React.FC<ScheduleProps> = ({ schedule }: ScheduleProps) => {
  const [day, setDay] = useState<number>(0);
  return (
    <Container id='schedule'>
      <Title>Agenda</Title>
      <Underline />
      <ScheduleContainer>
        <SwitchContainer>
          <Switch>
            <SwitchButton active={day === 0} onClick={() => setDay(0)}>
              <span>20 Januari, 2023</span>
            </SwitchButton>
            <SwitchButton active={day === 1} onClick={() => setDay(1)}>
              <span>21 Januari, 2023</span>
            </SwitchButton>
            <SwitchButton active={day === 2} onClick={() => setDay(2)}>
              <span>22 Januari, 2023</span>
            </SwitchButton>
          </Switch>
        </SwitchContainer>
        <List>
          {/* {schedule[day].map((data, i) => (
            <Details speech={data} key={i} />
          ))} */}

          <Space />
          <SubTitle>Akan Segera Diumumkan...</SubTitle>
          <Space />
        </List>
      </ScheduleContainer>
    </Container>
  );
};

// interface DetailsProps {
//   speech: {
//     job: string;
//     company: string;
//     author: string;
//     title: string;
//     time: string;
//     text: string;
//     category: string;
//     place: string;
//     picture: string[];
//   };
// }

// const Details = ({ speech }: DetailsProps) => {
//   const [open, setOpen] = useState<boolean>(false);
//   return (
//     <ListItem onClick={() => setOpen(!open)}>
//       <ItemPicture src={speech.picture[0]} />

//       <ItemInfo>
//         <ItemFront>
//           <ItemDate>{speech.time}</ItemDate>
//           <ItemTitle>{speech.title}</ItemTitle>
//           <ItemAuthor>
//             Por <span>{speech.author}</span> - {speech.job}
//           </ItemAuthor>
//         </ItemFront>
//         <ItemDetails open={open}>
//           <ItemText>{speech.text}</ItemText>
//           <ItemTags>{speech.category}</ItemTags>
//           <Line />
//           <ItemPlace>
//             <span>LUGAR</span>
//             <span>{speech.place}</span>
//           </ItemPlace>
//         </ItemDetails>
//       </ItemInfo>
//     </ListItem>
//   );
// };

export default Schedule;
