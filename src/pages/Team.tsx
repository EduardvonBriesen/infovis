import styled from "styled-components";
import TeamMember from "../components/TeamMember";

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: ${(props) => props.theme.colors.background.dark};
  width: 100vw;
  height: 100vh;
  padding: 10%;
  box-sizing: border-box;
`;

const Headline = styled.h1`
  font-weight: 800;
  font-size: 200px;
  line-height: 200px;
  margin: 0;
  color: ${(props) => props.theme.colors.primary};
`;

const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-top: 1rem;
`;

function Team() {
  return (
    <TeamContainer id="team">
      <Headline>We Are</Headline>
      <TeamMemberContainer>
        <TeamMember
          name="Elisabeth"
          text="Faucibus etiam rhoncus velit lectus. Urna tellus viverra metus est. Amet varius auctor libero purus."
          image={"../assets/team1.png"}
        />
        <TeamMember
          name="Yousri"
          text="Faucibus etiam rhoncus velit lectus. Urna tellus viverra metus est. Amet varius auctor libero purus."
          image={"../assets/team1.png"}
        />
        <TeamMember
          name="Peiwen"
          text="Faucibus etiam rhoncus velit lectus. Urna tellus viverra metus est. Amet varius auctor libero purus."
          image={"../assets/team1.png"}
        />
        <TeamMember
          name="Ronny"
          text="Faucibus etiam rhoncus velit lectus. Urna tellus viverra metus est. Amet varius auctor libero purus."
          image={"../assets/team1.png"}
        />
        <TeamMember
          name="Eduard"
          text="Faucibus etiam rhoncus velit lectus. Urna tellus viverra metus est. Amet varius auctor libero purus."
          image={"../assets/team1.png"}
        />
      </TeamMemberContainer>
    </TeamContainer>
  );
}

export default Team;
