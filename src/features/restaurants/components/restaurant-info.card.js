import React from "react";
import { Text, Image, View } from "react-native";
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';




const Title = styled.Text`
fontSize: 16px;
`;
const Address = styled.Text`
fontSize: 12px;
`; 
const Info = styled.View`
  padding: 16px;
`;
const Rating = styled.View`
  flex-direction: row;
  padding-top: 8;
  padding-bottom: 8;
`;
const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const open = styled.View`
  flex-direction: row;
`;







export const RestaurantInfoCard = ({ restaurant = {} }) => {

  const {
    name = 'Some Restaurant',
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <Card style={{marginBottom: 25}} elevation={5}>
      <Card.Cover style={{ padding: 16, backgroundColor: "white" }} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
        <Rating>
          {ratingArray.map((i) => (
            <Image source={require('../../../../assets/star.png')} style={{width:15,height:15, marginRight:3}} />
          ))}
        </Rating>
        <SectionEnd>
        {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
        {isOpenNow && <Image source={require('../../../../assets/open.png')} style={{width:20,height:20, marginRight:3}} />}
        </SectionEnd>
        </Section>
        <Section>
        <Address>{address}</Address>
        </Section>
        <SectionEnd>
        <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
        </SectionEnd>
      </Info>
    </Card>

  )
}