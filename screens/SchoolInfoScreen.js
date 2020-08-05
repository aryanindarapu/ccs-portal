import React from 'react';
import { StyleSheet, Linking, TouchableOpacity, Text, Dimensions, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
// import PDFView from 'react-native-pdf-view';
import * as WebBrowser from 'expo-web-browser';

const SLIDER_WIDTH = Dimensions.get('window').width * 0.35;
// website, lunch menu, club list, calendar

export default function SchoolInfoScreen({ route }) {
  const SCHOOL_COLOR = route.params.data.schoolInfo.color

  const openLink = async (link) => {
    let result = await WebBrowser.openBrowserAsync(link)
  }

  return (
    <View style={styles.container}>
      <Grid>
        <Col>
          <Row size={2}>
            <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={() => openLink(route.params.data.schoolInfo.url)}>
              <MaterialCommunityIcons name="web" size={SLIDER_WIDTH * 1.1} color={SCHOOL_COLOR} />
              <Text style={styles.text}>Website</Text>
            </TouchableOpacity>
          </Row>
          <Row size={2}>
            {route.params.data.schoolInfo.isWcOne && <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={() => openLink(route.params.data.schoolInfo.wcOneUrl)}>
              <MaterialCommunityIcons name="food" size={SLIDER_WIDTH * 1.1} color={SCHOOL_COLOR} />
              <Text style={styles.text}>Lunch Menu</Text>
            </TouchableOpacity>}
          </Row>
        </Col>

        <Col>
          <Row size={2}>
            <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={() => openLink(route.params.data.schoolInfo.cal)}>
              <AntDesign name="calendar" size={SLIDER_WIDTH} color={SCHOOL_COLOR} />
              <Text style={styles.text}>Calendar</Text>
            </TouchableOpacity>
          </Row>
          <Row size={2}>
            {route.params.data.schoolInfo.isWcTwo && <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={() => openLink(route.params.data.schoolInfo.wcTwoUrl)}>
              <Feather name="list" size={SLIDER_WIDTH} color={SCHOOL_COLOR} />
              <Text style={styles.text}>Club List</Text>
            </TouchableOpacity>}
          </Row>
        </Col>
      </Grid>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'System',
    paddingTop: 10,
    fontWeight: '300',
  },
})