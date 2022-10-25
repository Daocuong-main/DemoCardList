import React from "react";
import { SafeAreaView, FlatList, View, Image, Text } from "react-native";

const DATA = [
  {
    id: 1,
    avatar: 'https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR-320-80.jpg',
    fullName: 'Alice',
    numberComments: 69,
    imageLink: 'https://images.pexels.com/photos/9407837/pexels-photo-9407837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 2,
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Rapper_B.o.B_2013.jpg',
    fullName: 'Bob',
    numberComments: 99,
    imageLink: 'https://stylecaster.com/wp-content/uploads/2016/08/sweet-potato-chick-pea-buddha-bowls-tahini-sauce.jpg'
  },
  {
    id: 3,
    avatar: 'https://cdnimg.vietnamplus.vn/uploaded/lepz/2022_09_09/ttxvn_thai_tu_charles.jpg',
    fullName: 'Charle',
    numberComments: 67,
    imageLink: 'https://images.ctfassets.net/hrltx12pl8hq/3Mz6t2p2yHYqZcIM0ic9E2/3b7037fe8871187415500fb9202608f7/Man-Stock-Photos.jpg?fit=fill&w=480&h=270'
  }
]

const CardList_demo = () => {
  const Avatar = (Props) => {
    return (

      <Image style={{

        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 50,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5

      }}
        source={{ uri: Props.avatar }}>
      </Image>

    )
  }

  const AuthorRow = ({ item }) => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row'
      }}>
        <Avatar avatar={item.avatar}></Avatar>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginRight: 10
        }}>
          <Text style={{
            flex: 1,
            textAlign: 'left'
          }}>{item.fullName}</Text>
          <Text style={{
            flex: 1,
            textAlign: 'right'
          }}>{item.numberComments} Comments</Text>
        </View>
      </View>
    )
  }

  const Card = ({ item }) => {
    return (
      <View>
        <AuthorRow item={item} />
        <Image style={{
          width: '100%',
          height: 400,
          marginBottom: 10,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 1,
          shadowRadius: 5,
          borderRadius: 20
        }} source={{ uri: item.imageLink }} resizeMode={'cover'} />
      </View>
    )
  }

  const renderItem = ({ item }) => (
    <Card item={item} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id} />
    </SafeAreaView>
  );
}
export default CardList_demo;