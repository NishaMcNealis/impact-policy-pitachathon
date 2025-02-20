import React from "react";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard.js";
import AndrewSelbst from "../assets/andrew-selbst.jpg";

const Container = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled("div")`
    padding-top: 5vh;
    padding-bottom: 3vh;
    font-family: 'Westwood Sans';
    font-size: 48px;
    display: flex;
    align-items: flex-start;
`;

const AllContainer = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default class Profiles extends React.Component {
    render() {
        return (
            <AllContainer>
                <Title>Profiles</Title>
                <Container>
                    <ProfileCard name="Andrew Selbst" description="Andrew Selbst is an Assistant Professor of Law at UCLA School of Law. Prior to joining UCLA Law, he was a Postdoctoral Scholar at the Data & Society Research Institute and a Visiting Fellow at Yale Law School’s Information Society Project. He has also previously taught as an Adjunct Professor at Fordham Law School.
Selbst’s research examines the relationship between law, technology, and society. Drawing on resources from computer science, critical theory, sociology, and science, technology and society, he seeks to understand how the creation, use, and proliferation of different technologies can interfere with existing legal regimes, and how legal actors can most usefully anticipate or respond to the social effects of new technology. Over the last several years, Selbst’s research has focused on the effects of machine learning and artificial intelligence on varied legal regimes, including discrimination, policing, credit regulation, data protection, and tort law." pic={AndrewSelbst}></ProfileCard>
                </Container>
                </AllContainer>
        )
    }
}
